'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Heart, 
  Users, 
  Shield, 
  Sparkles,
  Phone,
  Mail,
  MapPin,
  CheckCircle
} from 'lucide-react';

export const AboutServicesSection = () => {
  const programs = [
    {
      title: 'Individual Therapy',
      description: 'One-on-one counseling for anxiety, depression, trauma, and personal growth',
      icon: Heart,
      color: '#2D6A4F',
      link: '/services/individual-therapy'
    },
    {
      title: 'Couples Counseling',
      description: 'Relationship therapy for couples at any stage of their journey',
      icon: Users,
      color: '#6D28D9',
      link: '/services/couples-counseling'
    },
    {
      title: 'Trauma Recovery',
      description: 'Specialized therapy for trauma, PTSD, and emotional healing',
      icon: Shield,
      color: '#DC2626',
      link: '/services/trauma-recovery'
    },
    {
      title: 'Community Wellness',
      description: 'Workshops, support groups, and community mental health programs',
      icon: Sparkles,
      color: '#F59E0B',
      link: '/services/community-wellness'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Section - Kept intact */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="relative aspect-[4/3] bg-gray-100">
              <Image
                src="https://res.cloudinary.com/kwishi/image/upload/v1794824118/SGCF/home_og_kmekf4.webp"
                alt="About Susan Gitau Counseling Foundation"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
              <p className="text-sm font-semibold" style={{ color: '#2D6A4F' }}>
                Transforming Lives Since 2015
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: '#2D6A4F10' }}>
              <Heart size={14} style={{ color: '#2D6A4F' }} />
              <span className="text-sm font-medium" style={{ color: '#1B4332' }}>
                About Us
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: '#171717' }}>
              Healing Minds,{' '}
              <span className="bg-gradient-to-r from-[#2D6A4F] to-[#6D28D9] bg-clip-text text-transparent">
                Restoring Hope
              </span>
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Susan Gitau Counseling Foundation (SGCF) is a non-profit organization dedicated to providing professional, 
              compassionate mental health services in Kenya. We believe in transforming lives through holistic care, 
              professional counseling, and community empowerment.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle size={18} style={{ color: '#2D6A4F' }} className="mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">Professional counseling services for individuals, couples, and families</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={18} style={{ color: '#2D6A4F' }} className="mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">Specialized trauma recovery and addiction counseling programs</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={18} style={{ color: '#2D6A4F' }} className="mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">Community wellness initiatives and support groups across Kenya</p>
              </div>
            </div>
            
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:gap-3 shadow-md hover:shadow-xl"
              style={{ 
                background: 'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)',
                color: 'white'
              }}
            >
              Learn More About Us
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Programs Section - Compact List */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#2D6A4F10' }}>
                <Heart size={16} style={{ color: '#2D6A4F' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: '#171717' }}>
                Our Programs
              </h3>
            </div>
            <Link 
              href="/services" 
              className="text-sm flex items-center gap-1 transition-all hover:gap-2 font-medium"
              style={{ color: '#2D6A4F' }}
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          {/* Programs Grid - Compact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <Link
                  key={program.title}
                  href={program.link}
                  className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                  style={{ 
                    border: '1px solid',
                    borderColor: 'rgba(0, 0, 0, 0.06)',
                    background: 'white'
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{ background: `${program.color}10` }}
                  >
                    <Icon size={18} style={{ color: program.color }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold truncate" style={{ color: '#171717' }}>
                      {program.title}
                    </h4>
                    <p className="text-xs truncate" style={{ color: '#171717', opacity: 0.6 }}>
                      {program.description}
                    </p>
                  </div>

                  {/* Arrow - visible on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
                    <ArrowRight size={14} style={{ color: program.color }} />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Quick Contact Info - Compact */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs" style={{ color: '#171717', opacity: 0.6 }}>
            <span className="flex items-center gap-1">
              <Phone size={12} /> +254 722 367 619
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Mail size={12} /> info@sgcfoundation.org
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <MapPin size={12} /> Nairobi, Kenya
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};