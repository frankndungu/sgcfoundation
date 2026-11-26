export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  icon: string;
  color: string;
  features: string[];
  benefits: string[];
  whoIsItFor: string;
  whatToExpect: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    id: 'individual-therapy',
    slug: 'individual-therapy',
    title: 'Individual Therapy',
    subtitle: 'Free, Compassionate Support for Your Mental Health Journey',
    description: 'Free one-on-one counseling sessions tailored to your unique needs, helping you navigate life\'s challenges with professional guidance and compassionate care.',
    fullDescription: `
      At Susan Gitau Counseling Foundation, we believe that quality mental health care should be accessible to everyone, regardless of their financial situation. Our individual therapy services are offered free of charge to those in need, ensuring that cost is never a barrier to healing.

      Individual therapy provides a safe, confidential space where you can explore your thoughts, feelings, and behaviors with a trained professional. Whether you're dealing with anxiety, depression, stress, grief, or simply seeking personal growth, our therapists work collaboratively with you to develop strategies that promote healing and well-being.

      As a nonprofit organization, our mission is to transform lives through compassionate care. We integrate evidence-based therapeutic modalities with a deep understanding of the cultural, social, and spiritual factors that influence your well-being.
    `,
    icon: 'Heart',
    color: '#2D6A4F',
    features: [
      'Anxiety and Depression Support',
      'Stress Management',
      'Grief and Loss Counseling',
      'Self-Esteem and Confidence Building',
      'Life Transitions Support',
      'Personal Growth and Development'
    ],
    benefits: [
      'Completely free, no-cost counseling',
      'Personalized approach tailored to your unique needs',
      'Safe, confidential, and judgment-free environment',
      'Evidence-based therapeutic techniques',
      'Culturally sensitive and holistic care',
      'Ongoing support and follow-up care'
    ],
    whoIsItFor: 'Our free individual therapy is for anyone in Kenya seeking support with mental health challenges, personal growth, or life transitions. We serve adults, young adults, and adolescents who want to work through emotional difficulties, improve their well-being, or gain deeper self-understanding—at no cost.',
    whatToExpect: [
      'A warm, welcoming initial assessment to understand your needs',
      'Collaborative development of a personalized care plan',
      'Regular sessions focused on your specific concerns',
      'Practical tools and strategies for daily life',
      'Regular progress evaluation and adjustment of goals'
    ],
    faqs: [
      {
        question: 'Is individual therapy really free?',
        answer: 'Yes! As a nonprofit foundation, we offer free counseling services to ensure that financial constraints never prevent anyone from accessing quality mental health care.'
      },
      {
        question: 'How long does individual therapy typically last?',
        answer: 'The duration varies depending on your needs and goals. Some people find benefit in short-term therapy (8-12 sessions), while others engage in longer-term support for deeper healing.'
      },
      {
        question: 'Is individual therapy confidential?',
        answer: 'Yes, confidentiality is fundamental to our practice. All sessions are private and protected by professional ethics and legal requirements.'
      },
      {
        question: 'What happens in the first session?',
        answer: 'Your first session is an opportunity for us to get to know you and understand what brings you to therapy. We\'ll discuss your background, current concerns, and goals.'
      }
    ],
    metaTitle: 'Free Individual Therapy in Kenya | Professional Counseling | SGCF',
    metaDescription: 'Free individual therapy services in Kenya. Professional counseling for anxiety, depression, trauma, and personal growth. No-cost mental health support from a nonprofit foundation.'
  },
  {
    id: 'couples-counseling',
    slug: 'couples-counseling',
    title: 'Couples Counseling',
    subtitle: 'Free Relationship Therapy to Strengthen Your Partnership',
    description: 'Free relationship therapy designed to help couples at any stage—from dating and engagement to marriage and beyond—build stronger, healthier partnerships.',
    fullDescription: `
      Relationships can be both deeply rewarding and incredibly challenging. At Susan Gitau Counseling Foundation, we offer free couples counseling to ensure that every partnership has access to the support it needs to thrive.

      Our couples counseling provides a supportive space where you and your partner can work through difficulties, improve communication, and deepen your connection. We understand that every relationship is unique, and our experienced therapists help couples navigate a wide range of issues—all at no cost.

      As a nonprofit organization, we are committed to strengthening families and communities across Kenya through accessible, compassionate relationship support.
    `,
    icon: 'Users',
    color: '#6D28D9',
    features: [
      'Communication Skills Development',
      'Conflict Resolution Strategies',
      'Trust Rebuilding',
      'Intimacy Enhancement',
      'Pre-marital Counseling',
      'Infidelity Recovery Support'
    ],
    benefits: [
      'Completely free relationship support',
      'Improved communication and understanding',
      'Deeper emotional connection',
      'Resolution of ongoing conflicts',
      'Rebuilt trust and intimacy',
      'Shared tools for relationship maintenance'
    ],
    whoIsItFor: 'Our free couples counseling is for partners at any stage of their relationship who want to strengthen their connection, resolve conflicts, or navigate challenges together. Whether you\'re dating, engaged, married, or in a long-term partnership, we\'re here to help—at no cost.',
    whatToExpect: [
      'Initial joint session to assess relationship dynamics',
      'Individual sessions if needed',
      'Development of communication and conflict resolution tools',
      'Regular check-ins on relationship progress',
      'Practical strategies for maintaining connection'
    ],
    faqs: [
      {
        question: 'Is couples counseling really free?',
        answer: 'Yes! As a nonprofit foundation, we offer free couples counseling to ensure that financial constraints never prevent couples from accessing the support they need.'
      },
      {
        question: 'Do we both need to attend every session?',
        answer: 'While most sessions involve both partners, there may be times when individual sessions are beneficial. Your therapist will recommend the best approach.'
      },
      {
        question: 'What if we\'re not married?',
        answer: 'We work with couples at all relationship stages—dating, engaged, married, and long-term partnerships. Our approach is tailored to your unique relationship context.'
      }
    ],
    metaTitle: 'Free Couples Counseling in Kenya | Relationship Therapy | SGCF',
    metaDescription: 'Free couples counseling services in Kenya. Strengthen your relationship with expert guidance. Pre-marital, marriage, and relationship therapy at no cost.'
  },
  {
    id: 'trauma-recovery',
    slug: 'trauma-recovery',
    title: 'Trauma Recovery',
    subtitle: 'Free, Specialized Care for Healing from Trauma',
    description: 'Free specialized therapy for individuals healing from trauma, PTSD, and emotional wounds, using proven approaches to restore safety, trust, and well-being.',
    fullDescription: `
      Trauma can leave deep emotional scars that affect every aspect of your life. At Susan Gitau Counseling Foundation, we provide free, specialized trauma-informed care to help you heal from past experiences and reclaim your life.

      Our trauma recovery services use evidence-based approaches, including Trauma-Focused Cognitive Behavioral Therapy (TF-CBT) and other proven modalities. We create a safe, supportive environment where you can process difficult experiences at your own pace—completely free of charge.

      As a nonprofit organization, we believe that healing from trauma should be accessible to everyone, regardless of their financial circumstances.
    `,
    icon: 'Shield',
    color: '#DC2626',
    features: [
      'PTSD Treatment',
      'Trauma-Focused Cognitive Behavioral Therapy',
      'Complex Trauma Recovery',
      'Childhood Trauma Healing',
      'Grief and Loss Support',
      'Resilience Building'
    ],
    benefits: [
      'Completely free trauma recovery services',
      'Reduction in trauma symptoms and distress',
      'Restored sense of safety and trust',
      'Improved emotional regulation',
      'Enhanced self-esteem and self-worth',
      'Recovery of hope and purpose'
    ],
    whoIsItFor: 'Our free trauma recovery services are for individuals who have experienced any form of trauma, including physical, emotional, or sexual abuse; accidents; natural disasters; violence; or other distressing events. We welcome survivors of all ages and backgrounds—at no cost.',
    whatToExpect: [
      'Initial assessment to understand your trauma history',
      'Development of safety and stabilization skills',
      'Gradual processing of traumatic memories',
      'Integration of healing and growth',
      'Ongoing support for long-term recovery'
    ],
    faqs: [
      {
        question: 'Is trauma therapy really free?',
        answer: 'Yes! As a nonprofit foundation, we offer free trauma recovery services to ensure that healing is accessible to everyone, regardless of their financial situation.'
      },
      {
        question: 'What makes trauma therapy different from regular therapy?',
        answer: 'Trauma therapy uses specialized approaches designed to help you process traumatic memories safely. It focuses on reducing trauma symptoms, restoring a sense of safety, and building resilience.'
      },
      {
        question: 'How long does trauma recovery take?',
        answer: 'Recovery time varies for each individual. Some people experience significant improvement in a few months, while others may benefit from longer-term support.'
      }
    ],
    metaTitle: 'Free Trauma Recovery Therapy in Kenya | PTSD Counseling | SGCF',
    metaDescription: 'Free trauma recovery services in Kenya. Specialized therapy for PTSD, complex trauma, and emotional healing. No-cost support from a nonprofit foundation.'
  },
  {
    id: 'community-wellness',
    slug: 'community-wellness',
    title: 'Community Wellness',
    subtitle: 'Free Mental Health Education and Support for All',
    description: 'Free workshops, support groups, and community mental health programs designed to promote emotional well-being and resilience across Kenya.',
    fullDescription: `
      Mental health is not just an individual concern—it's a community responsibility. At Susan Gitau Counseling Foundation, we're committed to making mental health support accessible to everyone through free community-based programs and initiatives.

      Our community wellness programs include free workshops, support groups, educational seminars, and outreach initiatives designed to promote mental health awareness, reduce stigma, and build resilient communities. We work with schools, workplaces, churches, and community organizations to bring free mental health support where it's needed most.

      As a nonprofit organization, our mission is to make mental health education and support accessible to every community in Kenya.
    `,
    icon: 'Sparkles',
    color: '#F59E0B',
    features: [
      'Free Support Groups',
      'Community Education Programs',
      'School Mental Health Initiatives',
      'Workplace Wellness Programs',
      'Church and Faith-Based Support',
      'Mental Health First Aid Training'
    ],
    benefits: [
      'Completely free community programs',
      'Increased mental health awareness',
      'Reduced stigma and discrimination',
      'Accessible support for community members',
      'Stronger, more resilient communities',
      'Empowered community leaders'
    ],
    whoIsItFor: 'Our free community wellness programs are for everyone—individuals, families, schools, workplaces, faith communities, and organizations. We work with communities across Kenya to promote mental health and well-being at every level, completely free of charge.',
    whatToExpect: [
      'Engaging workshops tailored to your community\'s needs',
      'Supportive group environments for shared healing',
      'Practical tools for mental health promotion',
      'Empowerment through education',
      'Ongoing support and community building'
    ],
    faqs: [
      {
        question: 'Are community programs really free?',
        answer: 'Yes! As a nonprofit foundation, all our community wellness programs are offered free of charge to ensure accessibility for everyone.'
      },
      {
        question: 'How can I bring a workshop to my community?',
        answer: 'Contact us to discuss your community\'s needs. We\'ll work with you to design and deliver free workshops, training, or programs that meet your specific requirements.'
      },
      {
        question: 'Can you work with our organization?',
        answer: 'Absolutely! We partner with schools, workplaces, churches, NGOs, and other organizations to provide free mental health education and support.'
      }
    ],
    metaTitle: 'Free Community Wellness Programs in Kenya | Mental Health Education | SGCF',
    metaDescription: 'Free community wellness programs in Kenya. Mental health workshops, support groups, and education initiatives. Nonprofit mental health support for all.'
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}