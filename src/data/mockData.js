import {
  FiCloud, FiShield, FiCpu, FiTrendingUp, FiLayers, FiDatabase,
  FiActivity, FiZap, FiUsers, FiDollarSign, FiAward, FiGlobe,
  FiPhone, FiClock, FiSettings, FiCheckCircle
} from 'react-icons/fi';

export const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export const clientLogos = [
  { name: 'Microsoft', icon: 'FiGlobe' },
  { name: 'Google', icon: 'FiCpu' },
  { name: 'Stripe', icon: 'FiLayers' },
  { name: 'Vercel', icon: 'FiZap' },
  { name: 'Adobe', icon: 'FiActivity' },
  { name: 'Airbnb', icon: 'FiLayers' },
];

export const featuresData = [
  {
    icon: FiCloud,
    title: 'Multi-Cloud Orchestration',
    description: 'Seamlessly deploy, monitor, and scale workloads across AWS, Azure, and Google Cloud with unified governance.',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: FiShield,
    title: 'Zero-Trust Security Core',
    description: 'Integrated identity-aware access, real-time threat intelligence, and end-to-end cryptographic encryption.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: FiCpu,
    title: 'Autonomous AI Engine',
    description: 'Harness machine learning pipelines that auto-optimize system parameters and predict network anomalies.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: FiTrendingUp,
    title: 'Real-Time Insights Analytics',
    description: 'High-frequency telemetry aggregation providing split-second visualizations and actionable operational metrics.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: FiLayers,
    title: 'Modular Microservices Architecture',
    description: 'Plug-and-play modules built on lightweight containers to guarantee isolated scalability and maximum uptime.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: FiDatabase,
    title: 'Distributed Edge Database',
    description: 'Sub-millisecond data replication across hundreds of global edge nodes, ensuring complete consistency.',
    gradient: 'from-rose-500 to-red-600',
  }
];

export const servicesData = [
  {
    id: 'consulting',
    title: 'Digital Enterprise Consulting',
    description: 'We guide Fortune 500 companies in digital transformation, aligning legacy architectures with modern cloud-native systems.',
    benefits: ['Legacy Modernization Strategy', 'Cloud Infrastructure Optimization', 'SecOps Auditing & Training'],
    stats: '150+ Clients Guided',
    telemetry: [
      { label: 'Enterprise Infrastructure Migration', value: 85, colorClass: 'bg-secondary' },
      { label: 'Compliance Audit Progress', value: 95, colorClass: 'bg-success' },
      { label: 'Legacy Code Deprecation', value: 68, colorClass: 'bg-accent' }
    ]
  },
  {
    id: 'engineering',
    title: 'Full-Scale Platform Engineering',
    description: 'Custom implementation of microservice portals, Kubernetes clusters, telemetry pipelines, and developer environments.',
    benefits: ['CI/CD Pipeline Automation', 'High-Frequency Real-time Telemetry', 'Zero-Downtime Data Migrations'],
    stats: '99.999% Service Level Objective',
    telemetry: [
      { label: 'Server Resource Load', value: 42, colorClass: 'bg-secondary' },
      { label: 'Gateway Redundancy Rate', value: 99.9, colorClass: 'bg-success' },
      { label: 'Cluster Ingress Response', value: 92, colorClass: 'bg-accent' }
    ]
  },
  {
    id: 'ai-integration',
    title: 'Cognitive AI & ML Automation',
    description: 'Integrating LLMs, computer vision, and machine learning classifiers directly into core corporate workflow channels.',
    benefits: ['Custom Model Fine-tuning', 'Vector Search Implementation', 'Automated Predictive Maintenances'],
    stats: '12x Speed Increase',
    telemetry: [
      { label: 'Model Inference Accuracy', value: 98.4, colorClass: 'bg-secondary' },
      { label: 'Neural Thread Cluster Health', value: 88, colorClass: 'bg-success' },
      { label: 'Anomaly Prediction Rate', value: 74, colorClass: 'bg-accent' }
    ]
  }
];

export const statisticsData = [
  { number: 99.999, suffix: '%', label: 'Platform Uptime' },
  { number: 450, suffix: 'M+', label: 'API Requests / Day' },
  { number: 85, suffix: 'B+', label: 'Assets Secured' },
  { number: 180, suffix: '+', label: 'Global Data Centers' }
];

export const timelineData = [
  {
    year: '2018',
    icon: FiGlobe,
    title: 'Founding & Initial Infrastructure Launch',
    description: 'Established the foundation of our high-speed edge delivery framework across North America and Europe.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2020',
    icon: FiShield,
    title: 'Zero-Trust Protocol Deployment',
    description: 'Integrated cryptographic authorization tokens, ensuring secure computing spaces for all global clients.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2022',
    icon: FiCpu,
    title: 'Autonomous AI Integration',
    description: 'Launched our self-healing AI diagnostics client, reducing platform incident times by over 74%.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2024',
    icon: FiLayers,
    title: 'Enterprise Multi-Cloud Suite release',
    description: 'Rolled out custom multi-cloud controllers, uniting container distribution under a single administrative board.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2026',
    icon: FiZap,
    title: 'Global Quantum Encryption Rollout',
    description: 'Pioneered post-quantum cryptographic security handshakes across our global point-of-presence servers.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80'
  }
];

export const productsData = [
  {
    name: 'OmniCloud Dashboard',
    tagline: 'Global Orchestration Control Room',
    description: 'A premium visual platform to observe container status, balance traffic loads across servers, and deploy microservices with a single click.',
    badge: 'Enterprise Flagship',
    metrics: { cpu: '34% avg', memory: '1.2TB active', health: 'Healthy' }
  },
  {
    name: 'SafeGuard AI',
    tagline: 'Zero-Trust Cyber Sentinel',
    description: 'Continuous monitoring tool that uses machine learning classifiers to flag unauthorized resource requests and mitigate DDoS threats.',
    badge: 'Security',
    metrics: { blocked: '3.2M threats/hr', compliance: '100% SoC2', threatLevel: 'Low' }
  },
  {
    name: 'flowState Analytics',
    tagline: 'Sub-Millisecond Telemetry Pipeline',
    description: 'Real-time telemetry compiler feeding custom dashboard widgets, triggering auto-scaling actions on remote nodes.',
    badge: 'Telemetry',
    metrics: { ingestionRate: '45GB/sec', latency: '0.4ms', nodesConnected: '24,500' }
  }
];

export const portfolioData = [
  {
    title: 'Fintech Core Migration',
    category: 'Cloud Engineering',
    tag: 'Cloud',
    client: 'Stripe Synergy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'Migrated 4.2 billion transaction logs to a global distributed ledger database with zero client downtime.'
  },
  {
    title: 'Autonomous Retail Platform',
    category: 'Artificial Intelligence',
    tag: 'AI',
    client: 'AeroStore Inc.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    description: 'Implemented multi-camera vision trackers and predictive inventory stocking algorithms for 800 physical retail venues.'
  },
  {
    title: 'Telemedicine Security Suite',
    category: 'Zero-Trust Compliance',
    tag: 'Security',
    client: 'HealthGuard Global',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    description: 'Engineered an end-to-end encrypted remote consulting portal matching HIPAA and GDPR compliance constraints.'
  },
  {
    title: 'Unified Logistics Grid',
    category: 'Platform Operations',
    tag: 'Cloud',
    client: 'Apex Freight',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    description: 'Created a containerized tracking hub managing route optimization and dispatch timings for 15,000 active delivery vehicles.'
  },
  {
    title: 'Smart Meter Power Matrix',
    category: 'Artificial Intelligence',
    tag: 'AI',
    client: 'Volta Energy Grid',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    description: 'Designed a real-time smart grid allocator adjusting power flows based on predictive local demand surges.'
  },
  {
    title: 'Quantum Key Distribution Node',
    category: 'Zero-Trust Compliance',
    tag: 'Security',
    client: 'Securitas Crypt',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80',
    description: 'Set up point-to-point fiber security modules encrypting cross-border transactions for global central banks.'
  }
];

export const whyChooseUsData = [
  {
    icon: FiGlobe,
    title: 'Global Edge Scale',
    description: 'Deploy assets in seconds across our ultra-low latency border routing network spanning 6 continents.'
  },
  {
    icon: FiPhone,
    title: 'Elite MNC Support',
    description: 'Direct SLA agreements backed by our dedicated team of senior infrastructure site reliability experts 24/7.'
  },
  {
    icon: FiClock,
    title: 'Uncompromised Uptime',
    description: 'Self-correcting microservices routing ensures maximum fault-isolation and keeps your products online.'
  },
  {
    icon: FiSettings,
    title: 'Deep Customization',
    description: 'Easily extend, hook, and configure every asset to match existing internal enterprise tools.'
  }
];

export const testimonialsData = [
  {
    quote: "Aetheris' Cloud Suite completely transformed how our engineering team distributes services. Development cycles are twice as fast, and our deployment overhead was cut by 60%.",
    author: "Sarah Jenkins",
    role: "Chief Technology Officer",
    company: "Linear Systems",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The Zero-Trust setup provided by this platform allowed us to clear SoC2 audits ahead of schedule. The visual tracking tools are simple, elegant, and highly performant.",
    author: "Marcus Aurelius",
    role: "Director of Enterprise Security",
    company: "Stripe Synergy",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "We chose their autonomous AI solution to handle our high-frequency routing. It manages micro-spikes in traffic without any human oversight, keeping latency under 1ms.",
    author: "Elena Rostova",
    role: "Principal Infrastructure Lead",
    company: "AeroStore Inc.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
  }
];

export const pricingData = [
  {
    name: 'Startup Scale',
    price: '₹7,999',
    period: 'per month',
    description: 'Ideal for scaling teams launching initial application platforms.',
    features: [
      'Up to 10 microservices clusters',
      'Standard DDoS edge mitigation',
      'Real-time metrics dashboards',
      'Community chat & forum support',
      '99.9% uptime SLA guarantee'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Enterprise Core',
    price: '₹39,999',
    period: 'per month',
    description: 'Standard plan for multi-region corporate orchestration operations.',
    features: [
      'Unlimited microservice deployments',
      'Zero-Trust authorization tokens',
      'Autonomous AI platform diagnostics',
      '24/7 dedicated senior SRE support',
      '99.999% uptime SLA compliance',
      'Custom webhook event queues'
    ],
    cta: 'Proceed to Corporate License',
    popular: true
  },
  {
    name: 'Global Sovereign',
    price: 'Custom',
    period: 'tailored pricing',
    description: 'Custom governance models for global MNC networks.',
    features: [
      'Dedicated point-to-presence edge channels',
      'Post-quantum network cryptography',
      'On-premise hybrid cloud gateways',
      'Personal account executive team',
      'Unlimited database edge nodes',
      'Custom hardware configuration options'
    ],
    cta: 'Contact Enterprise Sales',
    popular: false
  }
];

export const faqData = [
  {
    question: 'How does the autonomous AI platform monitor and heal container health?',
    answer: 'The system queries cluster metrics every 100 milliseconds and runs them through pre-trained network model anomaly classifiers. If anomalous behavior is detected, container traffic is dynamically re-routed and the container is restarted automatically.'
  },
  {
    question: 'Can the Zero-Trust system integrate with my existing identity providers?',
    answer: 'Yes, our identity portal supports standard corporate directories including Okta, Active Directory, Ping Identity, and Google Workspace, utilizing SAML 2.0 or OIDC.'
  },
  {
    question: 'What happens if edge servers encounter massive traffic spikes?',
    answer: 'Our global border routing layer utilizes dynamic traffic weight balancers. Excess ingestion is instantly distributed to surrounding nodes in our 180+ server networks, preventing performance bottlenecks.'
  },
  {
    question: 'How do you guarantee a 99.999% Service Level Objective (SLO)?',
    answer: 'Our infrastructure utilizes multi-layered system redundancy. Every container, database node, and gateway route runs in active-active configurations across separate physical regions, safeguarding against hardware failure.'
  },
  {
    question: 'Are there options for sovereign on-premise private clouds?',
    answer: 'Yes! The Global Sovereign tier provides dedicated cloud gates, letting you deploy the full administration panel and routing engines inside private data warehouses.'
  }
];
