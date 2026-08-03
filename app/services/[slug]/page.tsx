import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin,
  Heart,
  Users,
  Shield,
  Sparkles,
  ChevronRight,
  MessageCircle,
  Star
} from 'lucide-react';
import { getServiceBySlug, getAllServices } from '@/lib/services';

// Generate static paths for all services
export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service - FIXED: await params
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params; // <-- AWAIT the params
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://sgcfoundation.org/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://sgcfoundation.org/services/${service.slug}`,
      type: 'website',
      images: [
        {
          url: '/logo_sgcf_transp.png',
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

// Service page component - FIXED: await params
export default async function ServicePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params; // <-- AWAIT the params
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Get icon component
  const IconMap = {
    Heart,
    Users,
    Shield,
    Sparkles
  };
  const Icon = IconMap[service.icon as keyof typeof IconMap] || Heart;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #F8F6FF 0%, #FFFFFF 100%)' }}>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5" style={{ background: `radial-gradient(circle at 70% 50%, ${service.color} 0%, transparent 70%)` }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left - Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-lg"
                style={{ background: `${service.color}15` }}
              >
                <Icon size={32} style={{ color: service.color }} />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-4" style={{ color: '#171717' }}>
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0">
                {service.subtitle}
              </p>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all hover:shadow-xl hover:scale-105 shadow-md"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                  }}
                >
                  Book a Session
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#features"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-xl hover:scale-105 shadow-md"
                  style={{ 
                    background: 'white',
                    color: service.color,
                    border: `2px solid ${service.color}20`
                  }}
                >
                  Learn More
                  <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right - Image Placeholder */}
            <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
              <div 
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                style={{ background: `${service.color}10` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon size={80} style={{ color: service.color, opacity: 0.2 }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="text-lg font-semibold" style={{ color: service.color }}>
                      {service.title}
                    </p>
                    <p className="text-sm text-gray-500">Professional Counseling Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4" style={{ color: '#171717' }}>
              What We Offer
            </h2>
            <p className="text-gray-600">
              Our {service.title.toLowerCase()} services are designed to meet your unique needs with professional care and compassion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ 
                  border: '1px solid',
                  borderColor: `${service.color}15`,
                  background: 'white'
                }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} style={{ color: service.color }} className="flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium" style={{ color: '#171717' }}>{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For & Benefits Section */}
      <section className="py-16 md:py-20" style={{ background: '#F8F6FF' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Who It's For */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: `${service.color}10` }}>
                <Users size={14} style={{ color: service.color }} />
                <span className="text-sm font-medium" style={{ color: service.color }}>Who It&apos;s For</span>
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4" style={{ color: '#171717' }}>
                Is This Right For You?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.whoIsItFor}
              </p>
            </div>

            {/* Benefits */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: `${service.color}10` }}>
                <Star size={14} style={{ color: service.color }} />
                <span className="text-sm font-medium" style={{ color: service.color }}>Benefits</span>
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4" style={{ color: '#171717' }}>
                What You&apos;ll Gain
              </h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={18} style={{ color: service.color }} className="flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4" style={{ color: '#171717' }}>
              What to Expect
            </h2>
            <p className="text-gray-600">
              Your journey with us is designed to be supportive, structured, and empowering.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.whatToExpect.map((item, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg"
                style={{ 
                  border: '1px solid',
                  borderColor: `${service.color}15`,
                  background: 'white'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${service.color}10` }}
                >
                  <span className="text-lg font-bold" style={{ color: service.color }}>{index + 1}</span>
                </div>
                <p className="text-sm font-medium" style={{ color: '#171717' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20" style={{ background: '#F8F6FF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4" style={{ color: '#171717' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our {service.title.toLowerCase()} services.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl transition-all duration-300 hover:shadow-md"
                style={{ 
                  border: '1px solid',
                  borderColor: `${service.color}10`,
                  background: 'white'
                }}
              >
                <h4 className="font-semibold mb-2" style={{ color: '#171717' }}>
                  {faq.question}
                </h4>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className="p-12 rounded-3xl relative overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
            }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Take the first step toward healing and growth. Our professional therapists are here to support you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-xl hover:scale-105 bg-white"
                  style={{ color: service.color }}
                >
                  Book a Session
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all hover:shadow-xl hover:scale-105"
                  style={{ 
                    border: '2px solid rgba(255,255,255,0.3)',
                  }}
                >
                  Learn About Us
                  <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <div className="text-center py-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
          style={{ color: service.color }}
        >
          ← Back to All Services
        </Link>
      </div>
    </div>
  );
}