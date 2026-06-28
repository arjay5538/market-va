// ============================================
// AVA RIVERA PORTFOLIO - MAIN APPLICATION
// All interactivity, rendering & animations
// ============================================

// Load data
const data = portfolioData;

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHero();
  renderAbout();
  renderServices();
  renderProjects();
  renderToolsMarquees();
  renderTestimonials();
  initScrollAnimations();
  initProjectModals();
  initContactForm();
  initThemeCustomizer();
  initStatsCounters();
  
  // Optional: Show welcome toast once
  // showToast("Welcome! This portfolio is fully modular — edit js/data.js to customize.");
});

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
  const nav = document.getElementById('nav');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Navbar scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  // Active section highlighting
  const sections = ['about', 'services', 'work', 'tools', 'testimonials', 'contact'];
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      
      if (sectionTop <= 180) {
        current = sectionId;
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        `;
      } else {
        mobileMenu.classList.remove('hidden');
        mobileMenuBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6h12v12" />
          </svg>
        `;
      }
    });
    
    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        `;
      });
    });
  }
  
  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      
      if (target) {
        e.preventDefault();
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition - bodyRect - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// HERO SECTION
// ============================================
function initHero() {
  const badge = document.getElementById('hero-badge');
  const title = document.getElementById('hero-title');
  const subtitle = document.getElementById('hero-subtitle');
  const ctaPrimary = document.getElementById('cta-primary');
  const ctaSecondary = document.getElementById('cta-secondary');
  
  if (badge) badge.textContent = data.hero.badge;
  if (title) title.innerHTML = `I craft <span class="accent">magnetic social media</span> presences and scroll-stopping content.`;
  if (subtitle) subtitle.textContent = data.personal.tagline;
  
  if (ctaPrimary) {
    ctaPrimary.addEventListener('click', () => {
      document.getElementById('work').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  
  if (ctaSecondary) {
    ctaSecondary.addEventListener('click', () => {
      window.open(data.personal.calendly, '_blank');
    });
  }
  
  // Subtle floating animation on hero visual elements (if any)
  const floatingEls = document.querySelectorAll('.floating-element');
  floatingEls.forEach((el, i) => {
    el.style.animationDelay = `${i * 1.2}s`;
  });
}

// ============================================
// ABOUT SECTION + STATS
// ============================================
function renderAbout() {
  const bioContainer = document.getElementById('about-bio');
  const statsContainer = document.getElementById('about-stats');
  
  if (bioContainer) {
    bioContainer.innerHTML = data.about.bio.replace(/\n/g, '<br><br>');
  }
  
  if (statsContainer) {
    statsContainer.innerHTML = data.about.stats.map((stat, index) => `
      <div class="text-center p-6 rounded-2xl bg-white/5 border border-white/10 animate-on-scroll delay-${(index + 1) * 100}">
        <div class="stat-number text-5xl font-bold tracking-tighter text-white mb-1" data-target="${stat.number}">
          0
        </div>
        <div class="text-sm font-medium text-white/60 tracking-wide">${stat.label}</div>
      </div>
    `).join('');
  }
}

// Animated counters
function initStatsCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  const animateCounter = (counter) => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const isDecimal = target % 1 !== 0;
    const duration = 1800;
    const startTime = performance.now();
    
    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const eased = 1 - Math.pow(1 - progress, 3);
      
      let current;
      if (isDecimal) {
        current = (target * eased).toFixed(1);
      } else {
        current = Math.floor(target * eased);
      }
      
      counter.textContent = current;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = isDecimal ? target.toFixed(1) : target;
      }
    };
    
    requestAnimationFrame(update);
  };
  
  // Trigger when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => {
          if (!counter.classList.contains('counted')) {
            counter.classList.add('counted');
            animateCounter(counter);
          }
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.6 });
  
  const statsSection = document.getElementById('about-stats');
  if (statsSection) observer.observe(statsSection);
}

// ============================================
// SERVICES
// ============================================
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;
  
  container.innerHTML = data.services.map(service => `
    <div class="service-card card group">
      <div class="service-icon">
        ${service.icon}
      </div>
      <h3 class="text-2xl font-semibold tracking-tight mb-3">${service.title}</h3>
      <p class="text-white/70 mb-6 leading-relaxed">${service.desc}</p>
      
      <div class="pt-4 border-t border-white/10">
        <div class="text-xs uppercase tracking-[1.5px] font-semibold text-white/50 mb-3">WHAT'S INCLUDED</div>
        <ul class="space-y-2 text-sm">
          ${service.deliverables.map(item => `
            <li class="flex items-start gap-2 text-white/80">
              <span class="mt-1.5 inline-block w-1 h-1 rounded-full bg-violet-400 flex-shrink-0"></span>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// ============================================
// PROJECTS / PORTFOLIO
// ============================================
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;
  
  container.innerHTML = data.projects.map(project => `
    <div class="project-card card group overflow-hidden" data-project-id="${project.id}">
      <div class="relative aspect-[16/10] overflow-hidden bg-zinc-900">
        <img 
          src="${project.image}" 
          alt="${project.title}" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          loading="lazy"
        >
        <div class="project-overlay absolute inset-0"></div>
        
        <!-- Top tags -->
        <div class="absolute top-4 left-4 flex flex-wrap gap-2">
          ${project.tags.map(tag => `
            <span class="px-3 py-1 text-xs font-medium tracking-wider bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-white">
              ${tag}
            </span>
          `).join('')}
        </div>
      </div>
      
      <div class="p-6">
        <div class="flex items-start justify-between gap-4 mb-2">
          <div>
            <h3 class="font-semibold text-2xl tracking-tight">${project.title}</h3>
            <p class="text-white/60 text-sm">${project.category}</p>
          </div>
        </div>
        
        <div class="text-emerald-400 font-medium text-sm tracking-wide mb-4">
          ${project.results}
        </div>
        
        <div class="flex items-center justify-between">
          <button class="text-sm font-semibold text-white/80 group-hover:text-white flex items-center gap-1 transition-colors">
            View Case Study 
            <span class="transition-transform group-hover:translate-x-0.5">→</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================
// PROJECT MODALS
// ============================================
function initProjectModals() {
  const grid = document.getElementById('projects-grid');
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  const closeBtn = document.getElementById('modal-close');
  
  if (!grid || !modal) return;
  
  // Open modal on project card click
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (!card) return;
    
    const projectId = parseInt(card.dataset.projectId);
    const project = data.projects.find(p => p.id === projectId);
    
    if (project) {
      showProjectModal(project, modal, modalContent);
    }
  });
  
  // Close modal
  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };
  
  closeBtn.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  
  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

function showProjectModal(project, modal, modalContent) {
  modalContent.innerHTML = `
    <div class="relative">
      <!-- Hero Image -->
      <div class="relative h-80 md:h-96 overflow-hidden rounded-t-3xl">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90"></div>
        
        <div class="absolute bottom-0 left-0 p-8 md:p-10 text-white">
          <div class="flex flex-wrap gap-2 mb-4">
            ${project.tags.map(tag => `
              <span class="px-4 py-1.5 text-sm font-medium tracking-wider bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                ${tag}
              </span>
            `).join('')}
          </div>
          <h2 class="text-5xl md:text-6xl font-bold tracking-tighter">${project.title}</h2>
          <p class="text-2xl text-white/90 mt-2">${project.category}</p>
        </div>
      </div>
      
      <div class="p-8 md:p-10">
        <!-- Results Banner -->
        <div class="mb-10 p-6 rounded-2xl bg-emerald-950/60 border border-emerald-900/60 flex flex-col md:flex-row md:items-center gap-4">
          <div class="flex-1">
            <div class="uppercase text-xs tracking-[2px] font-semibold text-emerald-400 mb-1">KEY RESULTS</div>
            <div class="text-3xl font-semibold tracking-tight text-white">${project.results}</div>
          </div>
          <div>
            <button onclick="window.open('${data.personal.calendly}', '_blank')" 
                    class="btn btn-primary whitespace-nowrap">
              Start Similar Project →
            </button>
          </div>
        </div>
        
        <div class="grid md:grid-cols-5 gap-x-12 gap-y-10">
          <!-- Description -->
          <div class="md:col-span-3">
            <h4 class="font-semibold text-xl tracking-tight mb-4 text-white/90">The Challenge</h4>
            <p class="text-lg text-white/80 leading-relaxed">${project.description}</p>
            
            <div class="mt-8">
              <h4 class="font-semibold text-xl tracking-tight mb-4 text-white/90">My Role</h4>
              <p class="text-white/80">${project.role}</p>
            </div>
          </div>
          
          <!-- Metrics -->
          <div class="md:col-span-2">
            <h4 class="font-semibold text-xl tracking-tight mb-5 text-white/90">Impact Metrics</h4>
            <div class="space-y-4">
              ${project.metrics.map(metric => `
                <div class="flex justify-between items-baseline border-b border-white/10 pb-4">
                  <div class="text-white/70">${metric.label}</div>
                  <div class="font-mono text-3xl font-semibold tracking-tighter text-white">${metric.value}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        
        <div class="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
          <button onclick="document.getElementById('project-modal').classList.add('hidden'); document.getElementById('project-modal').classList.remove('flex'); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })" 
                  class="btn btn-primary flex-1 sm:flex-none">
            Let's Create Something Similar
          </button>
          <button onclick="document.getElementById('project-modal').classList.add('hidden'); document.getElementById('project-modal').classList.remove('flex')" 
                  class="btn btn-secondary flex-1 sm:flex-none">
            Close
          </button>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

// ============================================
// TOOLS MARQUEES (The special dual carousel)
// ============================================
function renderToolsMarquees() {
  const socialContainer = document.getElementById('tools-social');
  const contentContainer = document.getElementById('tools-content');
  
  if (!socialContainer || !contentContainer) return;
  
  // Render Social Tools Marquee (left to right animation)
  const socialHTML = createMarqueeHTML(data.tools.social, 'animate-marquee');
  socialContainer.innerHTML = `
    <div class="mb-4 flex items-center justify-between px-1">
      <div>
        <span class="text-sm font-semibold tracking-[1.5px] text-white/60">SOCIAL &amp; MANAGEMENT</span>
      </div>
      <div class="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">9 tools</div>
    </div>
    <div class="marquee-container">
      <div class="marquee ${socialHTML.animationClass}">
        ${socialHTML.html}
        ${socialHTML.html} <!-- Duplicate for seamless loop -->
      </div>
    </div>
  `;
  
  // Render Content Tools Marquee (reverse animation)
  const contentHTML = createMarqueeHTML(data.tools.content, 'animate-marquee-reverse');
  contentContainer.innerHTML = `
    <div class="mb-4 flex items-center justify-between px-1">
      <div>
        <span class="text-sm font-semibold tracking-[1.5px] text-white/60">CONTENT CREATION &amp; PRODUCTIVITY</span>
      </div>
      <div class="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">9 tools</div>
    </div>
    <div class="marquee-container">
      <div class="marquee ${contentHTML.animationClass}">
        ${contentHTML.html}
        ${contentHTML.html}
      </div>
    </div>
  `;
}

function createMarqueeHTML(tools, animationClass) {
  const html = tools.map(tool => `
    <div class="tool-pill">
      <span class="icon">${tool.icon}</span>
      <span class="font-medium">${tool.name}</span>
    </div>
  `).join('');
  
  return {
    html: `<div class="marquee-inner flex items-center gap-4">${html}</div>`,
    animationClass: animationClass
  };
}

// ============================================
// TESTIMONIALS
// ============================================
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;
  
  container.innerHTML = data.testimonials.map((testimonial, index) => `
    <div class="testimonial-card animate-on-scroll delay-${(index + 1) * 75}">
      <div class="flex items-center gap-4 mb-6">
        <img src="${testimonial.avatar}" alt="${testimonial.name}" 
             class="w-14 h-14 rounded-2xl object-cover ring-2 ring-white/10">
        <div>
          <div class="font-semibold tracking-tight">${testimonial.name}</div>
          <div class="text-sm text-white/60">${testimonial.role} @ ${testimonial.company}</div>
        </div>
      </div>
      
      <blockquote class="testimonial-quote">
        ${testimonial.quote}
      </blockquote>
    </div>
  `).join('');
}

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  });
  
  animatedElements.forEach(el => observer.observe(el));
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = `
      <span class="flex items-center justify-center gap-2">
        <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
        Sending...
      </span>
    `;
    submitBtn.disabled = true;
    
    // Simulate sending (in real use: integrate with Formspree, Netlify Forms, or EmailJS)
    await new Promise(resolve => setTimeout(resolve, 1450));
    
    // Success state
    form.innerHTML = `
      <div class="text-center py-10">
        <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
        <h3 class="text-3xl font-semibold tracking-tight mb-3">Message received!</h3>
        <p class="text-white/70 max-w-xs mx-auto">Thank you. I'll personally review your message and get back to you within 24–48 hours.</p>
        
        <button onclick="location.reload()" class="mt-8 btn btn-secondary">
          Send Another Message
        </button>
      </div>
    `;
  });
}

// ============================================
// THEME CUSTOMIZER (Live color editing - very modular!)
// ============================================
function initThemeCustomizer() {
  const fab = document.getElementById('customizer-fab');
  const panel = document.getElementById('customizer-panel');
  const closePanel = document.getElementById('close-customizer');
  const colorOptions = document.querySelectorAll('.color-option');
  const resetBtn = document.getElementById('reset-colors');
  
  if (!fab || !panel) return;
  
  // Toggle panel
  fab.addEventListener('click', () => {
    panel.classList.toggle('hidden');
    panel.classList.toggle('flex');
  });
  
  closePanel.addEventListener('click', () => {
    panel.classList.add('hidden');
    panel.classList.remove('flex');
  });
  
  // Color swatches
  colorOptions.forEach(option => {
    option.addEventListener('click', () => {
      const color = option.dataset.color;
      const type = option.dataset.type; // 'primary' or 'accent'
      
      // Remove active states
      document.querySelectorAll(`.color-option[data-type="${type}"]`).forEach(el => el.classList.remove('active'));
      option.classList.add('active');
      
      // Apply new color
      if (type === 'primary') {
        document.documentElement.style.setProperty('--primary', color);
        document.documentElement.style.setProperty('--primary-dark', adjustColor(color, -20));
      } else if (type === 'accent') {
        document.documentElement.style.setProperty('--accent', color);
        document.documentElement.style.setProperty('--accent-light', adjustColor(color, 30));
      }
      
      // Update gradient
      updateGradients();
    });
  });
  
  // Reset to defaults
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.documentElement.style.setProperty('--primary', '#7C3AED');
      document.documentElement.style.setProperty('--primary-dark', '#5B21B6');
      document.documentElement.style.setProperty('--accent', '#EC4899');
      document.documentElement.style.setProperty('--accent-light', '#F9A8D4');
      updateGradients();
      
      // Reset active states
      document.querySelectorAll('.color-option').forEach(el => el.classList.remove('active'));
      document.querySelector('.color-option[data-color="#7C3AED"]').classList.add('active');
      document.querySelector('.color-option[data-color="#EC4899"]').classList.add('active');
    });
  }
  
  // Pre-select default colors
  setTimeout(() => {
    const defaultPrimary = document.querySelector('.color-option[data-color="#7C3AED"]');
    const defaultAccent = document.querySelector('.color-option[data-color="#EC4899"]');
    if (defaultPrimary) defaultPrimary.classList.add('active');
    if (defaultAccent) defaultAccent.classList.add('active');
  }, 800);
}

function adjustColor(hex, percent) {
  // Simple color adjustment helper
  let r = parseInt(hex.substring(1,3), 16);
  let g = parseInt(hex.substring(3,5), 16);
  let b = parseInt(hex.substring(5,7), 16);
  
  r = Math.max(0, Math.min(255, Math.floor(r * (1 + percent / 100))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 + percent / 100))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 + percent / 100))));
  
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

function updateGradients() {
  const root = document.documentElement;
  const primary = getComputedStyle(root).getPropertyValue('--primary').trim();
  const accent = getComputedStyle(root).getPropertyValue('--accent').trim();
  
  root.style.setProperty('--gradient-primary', `linear-gradient(135deg, ${primary} 0%, ${accent} 100%)`);
}

// ============================================
// UTILITY: Simple Toast (optional use)
// ============================================
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = `fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] px-6 py-3.5 rounded-2xl bg-zinc-900 border border-white/10 text-sm shadow-xl flex items-center gap-3`;
  toast.innerHTML = `
    <span>${message}</span>
    <button class="text-white/60 hover:text-white transition-colors">×</button>
  `;
  
  document.body.appendChild(toast);
  
  toast.querySelector('button').onclick = () => toast.remove();
  
  setTimeout(() => {
    if (toast.parentNode) toast.parentNode.removeChild(toast);
  }, 5200);
}

// Make some functions globally available if needed
window.showProjectModalDemo = () => {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
};