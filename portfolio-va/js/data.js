// ============================================
// EDIT THIS FILE TO CUSTOMIZE CONTENT EASILY
// ============================================

const portfolioData = {
  // Personal Info - Change name, titles, contact here
  personal: {
    name: "Ava Rivera",
    title: "Social Media Strategist & Content Creation VA",
    tagline: "I craft magnetic social media presences and scroll-stopping content that turns followers into loyal communities.",
    shortBio: "Helping founders, creators, and purpose-driven brands build authentic, high-performing social media ecosystems.",
    location: "Remote • Based in California",
    email: "hello@avarivera.co",
    calendly: "https://calendly.com/ava-rivera/30min", // Change to your Calendly
    social: {
      instagram: "https://instagram.com/avarivera.co",
      linkedin: "https://linkedin.com/in/avarivera",
      tiktok: "https://tiktok.com/@avarivera"
    }
  },

  // Hero Section
  hero: {
    badge: "✨ Currently accepting new clients for Q3 2026",
    ctaPrimary: "View My Work",
    ctaSecondary: "Book a Discovery Call"
  },

  // About Section
  about: {
    bio: `I'm a strategic content creator and social media operator with over 5 years of experience helping brands and creators grow meaningfully online. 

I specialize in turning complex ideas into scroll-stopping visuals, high-converting captions, and data-backed strategies — particularly on Instagram, TikTok, and LinkedIn.

Before going independent, I led social for a fast-growing DTC wellness brand where we scaled from 8k to 120k+ followers and consistently hit 8-figure revenue months through organic + paid content systems.

My approach is equal parts creative intuition and analytical rigor. I don't just post pretty pictures — I build content engines that drive real business results.`,
    stats: [
      { number: "52", label: "Clients Served", suffix: "+" },
      { number: "4.9", label: "Avg. Engagement Lift", suffix: "x" },
      { number: "18", label: "Viral Campaigns", suffix: "" },
      { number: "97", label: "Client Retention", suffix: "%" }
    ]
  },

  // Services Section
  services: [
    {
      id: "social-management",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>`,
      title: "Social Media Management",
      desc: "End-to-end management of Instagram, TikTok, LinkedIn & Pinterest. Daily posting, community engagement, and growth strategy.",
      deliverables: ["Daily/weekly content posting", "Community management & replies", "Hashtag & SEO research", "Monthly strategy calls"]
    },
    {
      id: "reels-video",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>`,
      title: "Short-Form Video & Reels",
      desc: "High-performing Reels, TikToks, and YouTube Shorts from concept to final edit. Hook writing, scripting, editing & optimization.",
      deliverables: ["Scriptwriting & hooks", "Full video editing", "Trending audio research", "Thumbnail + caption packages"]
    },
    {
      id: "content-strategy",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2v0a2 2 0 01-2-2m0 0a2 2 0 00-2 2m0 0a2 2 0 01-2-2m9 0a2 2 0 01-2-2" /></svg>`,
      title: "Content Strategy & Calendars",
      desc: "Custom 30-day content calendars aligned with your brand voice, goals, and seasonal opportunities. Full editorial planning.",
      deliverables: ["Audience & competitor audit", "Content pillars framework", "30-day editorial calendar", "Content batching systems"]
    },
    {
      id: "copywriting",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>`,
      title: "Copywriting & Captions",
      desc: "Scroll-stopping, on-brand captions and copy that drive saves, shares, and conversions. Includes carousels, stories & emails.",
      deliverables: ["Caption templates & voice guide", "High-converting carousel scripts", "Story sequences", "Email nurture sequences"]
    },
    {
      id: "community",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M17 20h5v-2a3 3 0 01-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
      title: "Community Management",
      desc: "Daily engagement, DM handling, comment moderation, and relationship building that turns casual followers into superfans.",
      deliverables: ["Daily comment & DM replies", "Engagement campaigns", "Crisis & reputation handling", "Community growth initiatives"]
    },
    {
      id: "analytics",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 01-2 2v10m-6 0a2 2 0 01-2-2v-5a2 2 0 012-2 2 2 0 012 2v5a2 2 0 01-2 2z" /></svg>`,
      title: "Analytics & Growth Audits",
      desc: "Deep-dive monthly reporting, competitor analysis, and actionable recommendations to continuously optimize performance.",
      deliverables: ["Monthly performance reports", "Competitor benchmarking", "Content audit + recommendations", "ROI tracking dashboards"]
    }
  ],

  // Featured Work / Portfolio
  projects: [
    {
      id: 1,
      title: "Lumen Wellness",
      category: "Instagram Growth & Content System",
      image: "assets/project1.jpg",
      results: "+320% reach • 28k new followers in 4 months",
      tags: ["Instagram", "Reels", "Strategy"],
      description: "Complete social media overhaul for a premium wellness supplement brand. Built a signature content system around education + lifestyle storytelling.",
      metrics: [
        { label: "Follower Growth", value: "+312%" },
        { label: "Avg. Reach", value: "+287%" },
        { label: "Save Rate", value: "9.4%" }
      ],
      role: "Full social strategy, content creation, community management & monthly reporting"
    },
    {
      id: 2,
      title: "Forge (B2B SaaS)",
      category: "LinkedIn Thought Leadership",
      image: "assets/project2.jpg",
      results: "4x engagement • 9 SQLs/week from organic",
      tags: ["LinkedIn", "Carousels", "Copywriting"],
      description: "Helped a developer tools startup establish a strong founder-led presence on LinkedIn through high-value carousels and thought leadership content.",
      metrics: [
        { label: "Engagement Rate", value: "4.1x" },
        { label: "Profile Visits", value: "+680%" },
        { label: "Inbound Leads", value: "9/week" }
      ],
      role: "LinkedIn content strategy, carousel design, caption writing & lead generation tracking"
    },
    {
      id: 3,
      title: "Bloom & Co",
      category: "TikTok + Reels Production",
      image: "assets/project3.jpg",
      results: "3 videos >1M views • Brand collabs up 5x",
      tags: ["TikTok", "Reels", "Video Editing"],
      description: "Full short-form video production system for a sustainable fashion brand. Created signature series that went massively viral.",
      metrics: [
        { label: "Total Views", value: "4.2M" },
        { label: "Viral Videos", value: "3" },
        { label: "Collab Inquiries", value: "+520%" }
      ],
      role: "Concept development, scripting, filming direction, editing & performance optimization"
    },
    {
      id: 4,
      title: "Nourish Collective",
      category: "Multi-Platform Content Engine",
      image: "assets/workspace.jpg",
      results: "Consistent 8-12% engagement across platforms",
      tags: ["Multi-Platform", "Strategy", "Systems"],
      description: "Built a scalable content engine for a nutrition coaching brand across Instagram, TikTok, Pinterest and email — all from one central strategy.",
      metrics: [
        { label: "Engagement Rate", value: "9.8%" },
        { label: "Content Output", value: "3x" },
        { label: "Email Growth", value: "+41%" }
      ],
      role: "Full content ecosystem design, batch production systems & cross-platform repurposing"
    },
    {
      id: 5,
      title: "The Modern Edit",
      category: "Personal Brand Launch",
      image: "assets/profile.jpg",
      results: "From 0 → 41k followers in 7 months",
      tags: ["Personal Brand", "Instagram", "Reels"],
      description: "Launched and scaled a personal brand for a productivity coach. Created her signature aesthetic, content pillars and growth playbook from scratch.",
      metrics: [
        { label: "Followers", value: "41k" },
        { label: "Avg. Views/Reel", value: "68k" },
        { label: "Speaking Gigs", value: "12" }
      ],
      role: "Brand identity, full content creation, growth strategy & monetization planning"
    },
    {
      id: 6,
      title: "Vita Health",
      category: "Paid + Organic Content Synergy",
      image: "assets/project2.jpg",
      results: "ROAS 6.8x • 41% lower CAC",
      tags: ["Meta Ads", "Creative", "Strategy"],
      description: "Developed high-converting creative frameworks for Meta ads while building organic content that fed the funnel. Created UGC-style assets that performed in both worlds.",
      metrics: [
        { label: "ROAS", value: "6.8x" },
        { label: "CAC Reduction", value: "-41%" },
        { label: "Ad CTR", value: "+83%" }
      ],
      role: "Creative strategy, ad asset production, organic-to-paid repurposing system"
    }
  ],

  // Tools for the dual marquee carousels
  tools: {
    social: [
      { name: "Instagram", icon: "📷" },
      { name: "TikTok", icon: "🎵" },
      { name: "LinkedIn", icon: "💼" },
      { name: "Meta Business", icon: "📊" },
      { name: "Later", icon: "📅" },
      { name: "Buffer", icon: "🔄" },
      { name: "Canva Pro", icon: "🎨" },
      { name: "Notion", icon: "📝" },
      { name: "ChatGPT", icon: "🤖" }
    ],
    content: [
      { name: "CapCut", icon: "🎬" },
      { name: "Adobe Premiere", icon: "🎞️" },
      { name: "Figma", icon: "✏️" },
      { name: "Photoshop", icon: "🖼️" },
      { name: "Descript", icon: "🎙️" },
      { name: "Airtable", icon: "🗂️" },
      { name: "Loom", icon: "📹" },
      { name: "Midjourney", icon: "🌌" },
      { name: "Google Workspace", icon: "📁" }
    ]
  },

  // Testimonials
  testimonials: [
    {
      quote: "Ava completely transformed our social presence. We went from posting inconsistently to having a clear, high-performing content system. Our engagement rate jumped from 1.8% to over 7% in just two months.",
      name: "Sarah Patel",
      role: "Founder & CEO",
      company: "Lumen Wellness",
      avatar: "https://i.pravatar.cc/64?img=28"
    },
    {
      quote: "Working with Ava felt like having an entire creative + strategy team in one person. Her Reels strategy helped us hit multiple 1M+ view videos and brought in brand partnership opportunities we never expected.",
      name: "Marcus Chen",
      role: "Head of Marketing",
      company: "Bloom & Co",
      avatar: "https://i.pravatar.cc/64?img=15"
    },
    {
      quote: "Ava's LinkedIn content system generated consistent inbound leads for our B2B SaaS. The quality of leads and the way she captured our voice was honestly better than most agencies we've worked with.",
      name: "Elena Rodriguez",
      role: "Co-Founder",
      company: "Forge",
      avatar: "https://i.pravatar.cc/64?img=47"
    },
    {
      quote: "I finally feel like my content reflects who I am and attracts the right people. Ava helped me go from 3k to 41k followers while landing speaking gigs and premium clients. She's a true partner.",
      name: "Dr. Lena Voss",
      role: "Productivity Coach & Author",
      company: "The Modern Edit",
      avatar: "https://i.pravatar.cc/64?img=32"
    }
  ]
};

// Export for use in app.js
if (typeof module !== 'undefined') module.exports = portfolioData;