/* eslint-disable @typescript-eslint/no-explicit-any */
import he from 'he';

const API_URL = process.env.WORDPRESS_API_URL;

// ============================================
// Blog Types
// ============================================

export interface Author {
  node: {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    description: string | null; 
    name: string | null;
    avatar: {
      url: string;
    } | null;
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
}

export interface CallToAction {
  buttonLink?: string;
  buttonText?: string;
}

export interface EventDetails {
  eventDate: string | null;
  eventTime: string | null;
  eventVenue: string | null;
  fee: string | null;
}

export interface BlogMetadata {
  articleType: string[] | null;
  featuredArticle: boolean;
  authorQuote: string | null;
  callToAction: CallToAction | null;
  body: string;
  eventDetails?: EventDetails;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string | null;
    };
  } | null;
  author: Author | null;
  articleCategories: {
    nodes: BlogCategory[];
  };
  sgcfTags: {
    nodes: BlogTag[];
  };
  sgcfArticleDetails: BlogMetadata;
  isFeatured?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image: string;
  href: string;
  time: string;
  location: string;
  price: string;
  isFree: boolean;
  isNew: boolean;
  isFeatured?: boolean;
}

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  href: string;
  isFeatured?: boolean; // ADD THIS
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface VideoData {
  posterUrl: string;
  videoUrl: string;
  title: string;
}

interface AllBlogPostsResponse {
  sGCFArticles: {
    nodes: BlogPost[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
  };
}

interface SingleBlogPostResponse {
  sGCFArticle: BlogPost | null;
}

// ============================================
// Helper Functions
// ============================================

// Returns null (and logs a warning) when WordPress is missing, unreachable or
// returns something other than valid GraphQL JSON, so the site still builds and
// renders with empty blog/events sections instead of failing the deploy.
async function fetchAPI<T>(
  query: string,
  { variables }: { variables?: Record<string, unknown> } = {}
): Promise<T | null> {
  if (!API_URL) {
    console.warn('🟠 [fetchAPI] WORDPRESS_API_URL is not set; skipping WordPress content.');
    return null;
  }

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: 2592000 }, // 1 MONTH
    });

    const body = await res.text();

    if (!res.ok) {
      console.warn(
        `🟠 [fetchAPI] WordPress returned HTTP ${res.status} from ${API_URL}; skipping WordPress content. Response: ${body.slice(0, 200)}`
      );
      return null;
    }

    let json: { data?: T; errors?: { message?: string }[] };
    try {
      json = JSON.parse(body);
    } catch {
      console.warn(
        `🟠 [fetchAPI] WordPress response from ${API_URL} is not JSON; skipping WordPress content. Response: ${body.slice(0, 200)}`
      );
      return null;
    }

    if (json.errors) {
      console.warn('🟠 [fetchAPI] GraphQL errors; skipping WordPress content:', JSON.stringify(json.errors, null, 2));
      return null;
    }

    return json.data ?? null;
  } catch (error) {
    console.warn(`🟠 [fetchAPI] Could not reach WordPress at ${API_URL}; skipping WordPress content.`, error);
    return null;
  }
}

function stripHtmlTags(html: string) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
}

export function decodeHtmlEntities(text: string) {
  if (!text) return '';
  return he.decode(text);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getExcerpt(html: string, maxLength: number = 160): string {
  const plainText = stripHtmlTags(html);
  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength) + '...';
}

export function cleanExcerpt(text: string | null | undefined, maxLength: number = 150): string {
  if (!text) return '';
  
  let cleaned = decodeHtmlEntities(text);
  cleaned = cleaned.replace(/<[^>]*>/g, '');
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  
  if (cleaned.length > maxLength) {
    cleaned = cleaned.substring(0, maxLength) + '...';
  }
  
  return cleaned;
}

export function getSafeImageUrl(post: BlogPost): string {
  if (post.featuredImage?.node?.sourceUrl) {
    return post.featuredImage.node.sourceUrl;
  }
  return 'https://res.cloudinary.com/kwishi/image/upload/v1794820710/SGCF/og-image_q2yot3.webp';
}

export function getAuthorName(post: BlogPost): string | null {
  const author = post.author?.node;
  if (!author) return null;
  
  if (author.firstName || author.lastName) {
    return `${author.firstName || ''} ${author.lastName || ''}`.trim();
  }
  return author.name;
}

// ============================================
// Blog Functions (Excluding Events)
// ============================================

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  console.log('🟡 [getAllBlogPosts] Fetching all blog posts (excluding events)...');
  
  const data = await fetchAPI<AllBlogPostsResponse>(`
    query GetAllBlogPosts {
      sGCFArticles(first: 100) {
        nodes {
          id
          title
          date
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          author {
            node {
              firstName
              lastName
              name
              description
              avatar {
                url
              }
            }
          }
          articleCategories {
            nodes {
              id
              name
              slug
            }
          }
          sgcfTags {
            nodes {
              id
              name
              slug
            }
          }
          sgcfArticleDetails {
            articleType
            featuredArticle
            authorQuote
            callToAction {
              buttonLink
              buttonText
            }
            body
            eventDetails {
              eventTime
              eventVenue
              fee
              fieldGroupName
            }
          }
        }
      }
    }
  `);

  const allPosts = data?.sGCFArticles?.nodes || [];
  console.log(`🟡 [getAllBlogPosts] Total posts fetched: ${allPosts.length}`);
  
  // Filter out ONLY events (community-event)
  // Keep everything else including success-story, clinical, self-care, etc.
  const blogPosts = allPosts.filter(
    post => !post.sgcfArticleDetails?.articleType?.includes('community-event')
  );
  
  console.log(`🟢 [getAllBlogPosts] Blog posts after filtering (excluding events): ${blogPosts.length}`);
  
  // Log what types are included
  const typeCount: Record<string, number> = {};
  blogPosts.forEach(post => {
    const types = post.sgcfArticleDetails?.articleType || [];
    types.forEach(type => {
      typeCount[type] = (typeCount[type] || 0) + 1;
    });
  });
  console.log('📊 [getAllBlogPosts] Article types included:', typeCount);
  
  // Log sample of what was fetched
  if (blogPosts.length > 0) {
    console.log('📝 [getAllBlogPosts] Sample post:', {
      title: blogPosts[0].title,
      articleType: blogPosts[0].sgcfArticleDetails?.articleType,
      featuredArticle: blogPosts[0].sgcfArticleDetails?.featuredArticle,
      categories: blogPosts[0].articleCategories?.nodes?.map(c => c.name),
    });
  }
  
  return blogPosts;
}

export async function getAllPostsIncludingEvents(): Promise<BlogPost[]> {
  console.log('🟡 [getAllPostsIncludingEvents] Fetching ALL posts (including events)...');
  
  const data = await fetchAPI<AllBlogPostsResponse>(`
    query GetAllPostsIncludingEvents {
      sGCFArticles(first: 100) {
        nodes {
          id
          title
          date
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          author {
            node {
              firstName
              lastName
              name
              description
              avatar {
                url
              }
            }
          }
          articleCategories {
            nodes {
              id
              name
              slug
            }
          }
          sgcfTags {
            nodes {
              id
              name
              slug
            }
          }
          sgcfArticleDetails {
            articleType
            featuredArticle
            authorQuote
            callToAction {
              buttonLink
              buttonText
            }
            body
            eventDetails {
              eventTime
              eventVenue
              fee
              fieldGroupName
            }
          }
        }
      }
    }
  `);

  const allPosts = data?.sGCFArticles?.nodes || [];
  console.log(`🟢 [getAllPostsIncludingEvents] Total posts fetched: ${allPosts.length}`);
  
  // Log breakdown by type
  const events = allPosts.filter(p => p.sgcfArticleDetails?.articleType?.includes('community-event'));
  const blogs = allPosts.filter(p => !p.sgcfArticleDetails?.articleType?.includes('community-event'));
  const featured = allPosts.filter(p => p.sgcfArticleDetails?.featuredArticle === true);
  
  console.log('📊 [getAllPostsIncludingEvents] Breakdown:', {
    total: allPosts.length,
    events: events.length,
    blogs: blogs.length,
    featured: featured.length,
  });
  
  // Log detailed event info
  if (events.length > 0) {
    console.log('📅 [getAllPostsIncludingEvents] Events:');
    events.forEach(event => {
      console.log(`  - ${event.title}`);
      console.log(`    Featured: ${event.sgcfArticleDetails?.featuredArticle}`);
      console.log(`    Date: ${event.date}`);
      console.log(`    Type: ${event.sgcfArticleDetails?.articleType?.join(', ')}`);
    });
  }
  
  return allPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  console.log(`🟡 [getBlogPostBySlug] Fetching post with slug: ${slug}`);
  
  const allPosts = await getAllBlogPosts();
  const post = allPosts.find(p => p.slug === slug);
  
  if (!post) {
    console.log(`🔴 [getBlogPostBySlug] No post found with slug: ${slug}`);
    return null;
  }
  
  console.log(`🟢 [getBlogPostBySlug] Found post: ${post.title}`);
  
  const data = await fetchAPI<SingleBlogPostResponse>(`
    query GetBlogPostById($id: ID!) {
      sGCFArticle(id: $id, idType: DATABASE_ID) {
        id
        title
        date
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            firstName
            lastName
            name
            description
            avatar {
              url
            }
          }
        }
        articleCategories {
          nodes {
            id
            name
            slug
          }
        }
        sgcfTags {
          nodes {
            id
            name
            slug
          }
        }
        sgcfArticleDetails {
          articleType
          featuredArticle
          authorQuote
          callToAction {
            buttonLink
            buttonText
          }
          body
          eventDetails {
            eventTime
            eventVenue
            fee
            fieldGroupName
          }
        }
      }
    }
  `, { variables: { id: post.id } });
  
  return data?.sGCFArticle || null;
}

// ============================================
// Events Functions
// ============================================

export async function getRecentEvents(limit: number = 3): Promise<EventItem[]> {
  console.log(`🟡 [getRecentEvents] Fetching ${limit} recent events...`);
  
  const allPosts = await getAllPostsIncludingEvents();
  const eventPosts = allPosts.filter(
    post => post.sgcfArticleDetails?.articleType?.includes('community-event')
  );
  
  console.log(`📅 [getRecentEvents] Found ${eventPosts.length} total events`);
  
  // Sort: featured events first, then by date
  const sortedEvents = eventPosts.sort((a, b) => {
    const aFeatured = a.sgcfArticleDetails?.featuredArticle || false;
    const bFeatured = b.sgcfArticleDetails?.featuredArticle || false;
    
    if (aFeatured && !bFeatured) return -1;
    if (!aFeatured && bFeatured) return 1;
    
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  
  // Log featured events
  const featuredEvents = sortedEvents.filter(e => e.sgcfArticleDetails?.featuredArticle === true);
  console.log(`⭐ [getRecentEvents] Featured events: ${featuredEvents.length}`);
  featuredEvents.forEach(e => {
    console.log(`  ⭐ ${e.title} - ${e.date}`);
  });
  
  const limitedEvents = sortedEvents.slice(0, limit);
  console.log(`🟢 [getRecentEvents] Returning ${limitedEvents.length} events`);
  
  return limitedEvents.map(post => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    date: formatDate(post.date),
    excerpt: cleanExcerpt(post.excerpt || post.sgcfArticleDetails?.body, 150),
    image: getSafeImageUrl(post),
    href: `/events/${post.slug}`,
    time: post.sgcfArticleDetails?.eventDetails?.eventTime || 'TBA',
    location: post.sgcfArticleDetails?.eventDetails?.eventVenue || 'Virtual',
    price: post.sgcfArticleDetails?.eventDetails?.fee || 'FREE',
    isFree: post.sgcfArticleDetails?.eventDetails?.fee?.toLowerCase().includes('free') || false,
    isNew: new Date(post.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    isFeatured: post.sgcfArticleDetails?.featuredArticle || false
  }));
}

export async function getAllEvents(): Promise<EventItem[]> {
  console.log('🟡 [getAllEvents] Fetching ALL events...');
  
  const allPosts = await getAllPostsIncludingEvents();
  const eventPosts = allPosts.filter(
    post => post.sgcfArticleDetails?.articleType?.includes('community-event')
  );
  
  console.log(`📅 [getAllEvents] Found ${eventPosts.length} total events`);
  
  const sortedEvents = eventPosts.sort((a, b) => {
    const aFeatured = a.sgcfArticleDetails?.featuredArticle || false;
    const bFeatured = b.sgcfArticleDetails?.featuredArticle || false;
    
    if (aFeatured && !bFeatured) return -1;
    if (!aFeatured && bFeatured) return 1;
    
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  
  const featuredEvents = sortedEvents.filter(e => e.sgcfArticleDetails?.featuredArticle === true);
  console.log(`⭐ [getAllEvents] Featured events: ${featuredEvents.length}`);
  
  return sortedEvents.map(post => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    date: formatDate(post.date),
    excerpt: cleanExcerpt(post.excerpt || post.sgcfArticleDetails?.body, 150),
    image: getSafeImageUrl(post),
    href: `/events/${post.slug}`,
    time: post.sgcfArticleDetails?.eventDetails?.eventTime || 'TBA',
    location: post.sgcfArticleDetails?.eventDetails?.eventVenue || 'Virtual',
    price: post.sgcfArticleDetails?.eventDetails?.fee || 'FREE',
    isFree: post.sgcfArticleDetails?.eventDetails?.fee?.toLowerCase().includes('free') || false,
    isNew: new Date(post.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    isFeatured: post.sgcfArticleDetails?.featuredArticle || false
  }));
}

export async function getRecentPosts(limit: number = 3): Promise<BlogPostItem[]> {
  console.log(`🟡 [getRecentPosts] Fetching ${limit} recent blog posts...`);
  
  const allPosts = await getAllBlogPosts();
  
  console.log(`📝 [getRecentPosts] Total blog posts: ${allPosts.length}`);
  
  return allPosts.slice(0, limit).map(post => {
    const types = post.sgcfArticleDetails?.articleType || [];
    let category = post.articleCategories?.nodes?.[0]?.name || 'General';
    
    // If it's a success story, use that as category
    if (types.includes('success-story')) {
      category = 'Success Story';
    }
    
    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: cleanExcerpt(post.excerpt || post.sgcfArticleDetails?.body, 100),
      date: formatDate(post.date),
      category: category,
      readTime: `${Math.ceil((post.sgcfArticleDetails?.body?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0) / 200)} min read`,
      image: getSafeImageUrl(post),
      href: `/blog/${post.slug}`,
      isFeatured: post.sgcfArticleDetails?.featuredArticle || false // ADD THIS
    };
  });
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  console.log('🟡 [getGalleryImages] Fetching gallery images...');
  // TODO: Fetch from custom ACF Options Page
  console.log('🟢 [getGalleryImages] Returning empty array (TODO: implement)');
  return [];
}

export async function getVideoData(): Promise<VideoData | null> {
  console.log('🟡 [getVideoData] Fetching video data...');
  // TODO: Fetch from custom ACF Options Page
  console.log('🟢 [getVideoData] Returning null (TODO: implement)');
  return null;
}

// Other functions remain the same...
export async function getAllBlogSlugs(): Promise<{ slug: string }[]> {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function getBlogPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) =>
    post.articleCategories?.nodes?.some((cat) => cat.slug === categorySlug)
  );
}

export async function getBlogPostsByTag(tagSlug: string): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) =>
    post.sgcfTags?.nodes?.some((tag) => tag.slug === tagSlug)
  );
}

export async function getAllCategories(): Promise<BlogCategory[]> {
  const allPosts = await getAllPostsIncludingEvents();
  const categoriesMap = new Map<string, BlogCategory>();
  
  allPosts.forEach((post) => {
    if (post.articleCategories?.nodes) {
      post.articleCategories.nodes.forEach((cat) => {
        if (!categoriesMap.has(cat.slug)) {
          categoriesMap.set(cat.slug, cat);
        }
      });
    }
  });
  
  return Array.from(categoriesMap.values());
}

export async function getAllTags(): Promise<BlogTag[]> {
  const allPosts = await getAllPostsIncludingEvents();
  const tagsMap = new Map<string, BlogTag>();
  
  allPosts.forEach((post) => {
    if (post.sgcfTags?.nodes) {
      post.sgcfTags.nodes.forEach((tag) => {
        if (!tagsMap.has(tag.slug)) {
          tagsMap.set(tag.slug, tag);
        }
      });
    }
  });
  
  return Array.from(tagsMap.values());
}

export async function getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts
    .filter((post) => post.sgcfArticleDetails?.featuredArticle === true)
    .slice(0, limit);
}

export async function getPostsByType(type: string, limit: number = 10): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts
    .filter((post) => post.sgcfArticleDetails?.articleType?.includes(type))
    .slice(0, limit);
}