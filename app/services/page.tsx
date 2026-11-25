import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Heart, Users, Shield, Sparkles, CheckCircle } from 'lucide-react';
import { getAllServices } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Our Counseling Services | Professional Mental Health Support | SGCF',
  description: 'Explore our professional counseling services including individual therapy, couples counseling, trauma recovery, and community wellness programs in Kenya.',
};

export const dynamic = 'force-static';
export const revalidate = false;

export default function ServicesPage() {
  const services = getAllServices();
  
  const IconMap = {
    Heart,
    Users,
    Shield,
    Sparkles
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #F8F6FF 0%, #FFFFFF 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6" style={{ color: '#171717' }}>
            Our{' '}
            <span className="bg-gradient-to-r from-[#2D6A4F] to-[#6D28D9] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional, compassionate mental health services designed to meet you where you are and help you get where you want to be.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = IconMap[service.icon as keyof typeof IconMap] || Heart;
              
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  style={{ 
                    border: '1px solid',
                    borderColor: `${service.color}15`,
                    background: 'white'
                  }}
                >
                  <div className="flex items-start gap-5">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${service.color}10` }}
                    >
                      <Icon size={28} style={{ color: service.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors" style={{ color: '#171717' }}>
                          {service.title}
                        </h3>
                        <ArrowRight 
                          size={20} 
                          className="opacity-0 group-hover:opacity-100 transition-opacity" 
                          style={{ color: service.color }}
                        />
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-full"
                            style={{ 
                              background: `${service.color}08`,
                              color: service.color
                            }}
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-xs px-2.5 py-1 rounded-full text-gray-500">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20" style={{ background: '#F8F6FF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-serif mb-4" style={{ color: '#171717' }}>
            Not Sure Which Service is Right for You?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;re here to help you find the right path forward. Contact us to discuss your needs.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all hover:shadow-xl hover:scale-105 shadow-md"
            style={{ 
              background: 'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)',
            }}
          >
            Contact Us
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}