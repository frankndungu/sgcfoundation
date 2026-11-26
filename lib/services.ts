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
    subtitle: 'Compassionate Support for Your Mental Health Journey',
    description: 'One-on-one counseling sessions tailored to your unique needs, helping you navigate life\'s challenges with professional guidance and compassionate care.',
    fullDescription: `
      At Susan Gitau Counseling Foundation, we believe that quality mental health care should be within reach for everyone who needs it. Our individual therapy gives you a safe, professional space to work through what you\'re facing and move toward healing.

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
      'Personalized approach tailored to your unique needs',
      'Safe, confidential, and judgment-free environment',
      'Evidence-based therapeutic techniques',
      'Culturally sensitive and holistic care',
      'Ongoing support and follow-up care'
    ],
    whoIsItFor: 'Our individual therapy is for anyone in Kenya seeking support with mental health challenges, personal growth, or life transitions. We serve adults, young adults, and adolescents who want to work through emotional difficulties, improve their well-being, or gain deeper self-understanding.',
    whatToExpect: [
      'A warm, welcoming initial assessment to understand your needs',
      'Collaborative development of a personalized care plan',
      'Regular sessions focused on your specific concerns',
      'Practical tools and strategies for daily life',
      'Regular progress evaluation and adjustment of goals'
    ],
    faqs: [
      {
        question: 'How much does individual therapy cost?',
        answer: 'Fees depend on the type and length of the session. Message us on WhatsApp (+254 722 367 619) and we\'ll share our current rates.'
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
    metaTitle: 'Individual Therapy in Kenya | Professional Counseling | SGCF',
    metaDescription: 'Individual therapy in Kenya. Professional counseling for anxiety, depression, trauma, and personal growth from Susan Gitau Counseling Foundation.'
  },
  {
    id: 'couples-counseling',
    slug: 'couples-counseling',
    title: 'Couples Counseling',
    subtitle: 'Relationship Therapy to Strengthen Your Partnership',
    description: 'Relationship therapy designed to help couples at any stage—from dating and engagement to marriage and beyond—build stronger, healthier partnerships.',
    fullDescription: `
      Relationships can be both deeply rewarding and incredibly challenging. At Susan Gitau Counseling Foundation, we offer couples counseling to give every partnership the support it needs to thrive.

      Our couples counseling provides a supportive space where you and your partner can work through difficulties, improve communication, and deepen your connection. We understand that every relationship is unique, and our experienced therapists help couples navigate a wide range of issues.

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
      'Improved communication and understanding',
      'Deeper emotional connection',
      'Resolution of ongoing conflicts',
      'Rebuilt trust and intimacy',
      'Shared tools for relationship maintenance'
    ],
    whoIsItFor: 'Our couples counseling is for partners at any stage of their relationship who want to strengthen their connection, resolve conflicts, or navigate challenges together. Whether you\'re dating, engaged, married, or in a long-term partnership, we\'re here to help.',
    whatToExpect: [
      'Initial joint session to assess relationship dynamics',
      'Individual sessions if needed',
      'Development of communication and conflict resolution tools',
      'Regular check-ins on relationship progress',
      'Practical strategies for maintaining connection'
    ],
    faqs: [
      {
        question: 'How much does couples counseling cost?',
        answer: 'Fees depend on the type and length of the session. Message us on WhatsApp (+254 722 367 619) and we\'ll share our current rates.'
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
    metaTitle: 'Couples Counseling in Kenya | Relationship Therapy | SGCF',
    metaDescription: 'Couples counseling in Kenya. Strengthen your relationship with expert guidance. Pre-marital, marriage, and relationship therapy from Susan Gitau Counseling Foundation.'
  },
  {
    id: 'trauma-recovery',
    slug: 'trauma-recovery',
    title: 'Trauma Recovery',
    subtitle: 'Specialized Care for Healing from Trauma',
    description: 'Specialized therapy for individuals healing from trauma, PTSD, and emotional wounds, using proven approaches to restore safety, trust, and well-being.',
    fullDescription: `
      Trauma can leave deep emotional scars that affect every aspect of your life. At Susan Gitau Counseling Foundation, we provide specialized trauma-informed care to help you heal from past experiences and reclaim your life.

      Our trauma recovery services use evidence-based approaches, including Trauma-Focused Cognitive Behavioral Therapy (TF-CBT) and other proven modalities. We create a safe, supportive environment where you can process difficult experiences at your own pace.

      As a nonprofit organization, we believe that everyone deserves the chance to heal from trauma.
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
      'Reduction in trauma symptoms and distress',
      'Restored sense of safety and trust',
      'Improved emotional regulation',
      'Enhanced self-esteem and self-worth',
      'Recovery of hope and purpose'
    ],
    whoIsItFor: 'Our trauma recovery services are for individuals who have experienced any form of trauma, including physical, emotional, or sexual abuse; accidents; natural disasters; violence; or other distressing events. We welcome survivors of all ages and backgrounds.',
    whatToExpect: [
      'Initial assessment to understand your trauma history',
      'Development of safety and stabilization skills',
      'Gradual processing of traumatic memories',
      'Integration of healing and growth',
      'Ongoing support for long-term recovery'
    ],
    faqs: [
      {
        question: 'How much does trauma therapy cost?',
        answer: 'Fees depend on the type and length of the session. Message us on WhatsApp (+254 722 367 619) and we\'ll share our current rates.'
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
    metaTitle: 'Trauma Recovery Therapy in Kenya | PTSD Counseling | SGCF',
    metaDescription: 'Trauma recovery services in Kenya. Specialized therapy for PTSD, complex trauma, and emotional healing from Susan Gitau Counseling Foundation.'
  },
  {
    id: 'community-wellness',
    slug: 'community-wellness',
    title: 'Community Wellness',
    subtitle: 'Mental Health Education and Support for Communities',
    description: 'Workshops, support groups, and community mental health programs designed to promote emotional well-being and resilience across Kenya.',
    fullDescription: `
      Mental health is not just an individual concern—it's a community responsibility. At Susan Gitau Counseling Foundation, we're committed to making mental health support accessible through community-based programs and initiatives.

      Our community wellness programs include workshops, support groups, educational seminars, and outreach initiatives designed to promote mental health awareness, reduce stigma, and build resilient communities. We work with schools, workplaces, churches, and community organizations to bring mental health support where it's needed most.

      As a nonprofit organization, our mission is to make mental health education and support accessible to every community in Kenya.
    `,
    icon: 'Sparkles',
    color: '#F59E0B',
    features: [
      'Support Groups',
      'Community Education Programs',
      'School Mental Health Initiatives',
      'Workplace Wellness Programs',
      'Church and Faith-Based Support',
      'Mental Health First Aid Training'
    ],
    benefits: [
      'Increased mental health awareness',
      'Reduced stigma and discrimination',
      'Accessible support for community members',
      'Stronger, more resilient communities',
      'Empowered community leaders'
    ],
    whoIsItFor: 'Our community wellness programs are for everyone—individuals, families, schools, workplaces, faith communities, and organizations. We work with communities across Kenya to promote mental health and well-being at every level.',
    whatToExpect: [
      'Engaging workshops tailored to your community\'s needs',
      'Supportive group environments for shared healing',
      'Practical tools for mental health promotion',
      'Empowerment through education',
      'Ongoing support and community building'
    ],
    faqs: [
      {
        question: 'How much do community programs cost?',
        answer: 'Costs depend on the program, group size and location. Message us on WhatsApp (+254 722 367 619) for a quote.'
      },
      {
        question: 'How can I bring a workshop to my community?',
        answer: 'Contact us to discuss your community\'s needs. We\'ll work with you to design and deliver workshops, training, or programs that meet your specific requirements.'
      },
      {
        question: 'Can you work with our organization?',
        answer: 'Absolutely! We partner with schools, workplaces, churches, NGOs, and other organizations to provide mental health education and support.'
      }
    ],
    metaTitle: 'Community Wellness Programs in Kenya | Mental Health Education | SGCF',
    metaDescription: 'Community wellness programs in Kenya. Mental health workshops, support groups, and education initiatives from Susan Gitau Counseling Foundation.'
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}