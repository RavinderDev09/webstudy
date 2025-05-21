import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SafePipe } from './safe.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root', 
  standalone: true, // Add this for Angular 17+ standalone components
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SafePipe // Add the SafePipe to imports
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  darkMode = false;
  mobileMenuOpen = false;
  yearlyBilling = false;
  videoModalOpen = false;
  showScrollButton = false;
  currentTestimonial = 0;
  activeCard: number | null = null;

  navLinks = [
    { path: '#features', label: 'Features' },
    { path: '#stats', label: 'Results' },
    { path: '#testimonials', label: 'Testimonials' },
    { path: '#pricing', label: 'Pricing' }
  ];

  heroStats = [
    { value: '250K', label: 'Students' },
    { value: '98', label: 'Countries' },
    { value: '4.9', label: 'Rating' }
  ];

  trustBadges = [
    { name: 'Forbes', logo: 'assets/forbes-logo.svg' },
    { name: 'TechCrunch', logo: 'assets/techcrunch-logo.svg' },
    { name: 'The Guardian', logo: 'assets/guardian-logo.svg' },
    { name: 'Harvard', logo: 'assets/harvard-logo.svg' }
  ];

  features = [
    {
      id: 1,
      icon: '📊',
      title: 'Smart Analytics',
      description: 'Track your study patterns and get personalized recommendations'
    },
    {
      id: 2,
      icon: '⏱️',
      title: 'Focus Timer',
      description: 'Pomodoro-style timer with adaptive intervals'
    },
    {
      id: 3,
      icon: '📝',
      title: 'AI Summaries',
      description: 'Generate concise summaries from your study materials'
    },
    {
      id: 4,
      icon: '🧠',
      title: 'Memory Coach',
      description: 'Spaced repetition system for better retention'
    },
    {
      id: 5,
      icon: '📈',
      title: 'Progress Tracking',
      description: 'Visualize your learning journey and milestones'
    },
    {
      id: 6,
      icon: '👥',
      title: 'Study Groups',
      description: 'Collaborate with peers in virtual study rooms'
    }
  ];

  productivityStats = [
    { value: '68%', label: 'Efficiency' },
    { value: '42%', label: 'Retention' },
    { value: '3.2x', label: 'Focus' }
  ];

  testimonials = [
    {
      text: 'StudyMode completely transformed how I prepare for exams. I went from barely passing to top of my class!',
      name: 'Sarah Johnson',
      title: 'Medical Student, Harvard',
      avatar: 'assets/student1.jpg'
    },
    {
      text: 'The AI summaries save me hours each week. I can now cover twice as much material in half the time.',
      name: 'Raj Patel',
      title: 'Engineering Student, MIT',
      avatar: 'assets/student2.jpg'
    },
    {
      text: 'As a working professional, StudyMode helps me maximize my limited study time. Worth every penny!',
      name: 'Maria Gonzalez',
      title: 'MBA Candidate, Stanford',
      avatar: 'assets/student3.jpg'
    }
  ];

  pricingPlans = [
    {
      name: 'Basic',
      monthlyPrice: '$9.99',
      yearlyPrice: '$95.99',
      description: 'Essential study tools',
      features: [
        'Basic analytics',
        'Standard focus timer',
        'Limited AI summaries',
        'Email support'
      ],
      featured: false
    },
    {
      name: 'Pro',
      monthlyPrice: '$19.99',
      yearlyPrice: '$191.99',
      description: 'For serious students',
      features: [
        'Advanced analytics',
        'Adaptive focus timer',
        'Unlimited AI summaries',
        'Memory coach',
        'Priority support'
      ],
      featured: true
    },
    {
      name: 'Team',
      monthlyPrice: '$14.99',
      yearlyPrice: '$143.99',
      description: 'Per user, min. 3 users',
      features: [
        'All Pro features',
        'Study group collaboration',
        'Progress sharing',
        'Admin dashboard',
        'Dedicated account manager'
      ],
      featured: false
    }
  ];
  

  socialLinks = [
{ name: 'twitter', url: 'https://twitter.com', icon: 'assets/twitter.png' },
    { name: 'Facebook', url: 'https://facebook.com', icon: 'assets/fb.jpg' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'assets/instag.jpg' },
    { name: 'LinkedIn', url: '#', icon: 'assets/linkding.png' }
  ];

  footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', url: '#' },
        { label: 'Pricing', url: '#' },
        { label: 'Case Studies', url: '#' },
        { label: 'Updates', url: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', url: '#' },
        { label: 'Careers', url: '#' },
        { label: 'Press', url: '#' },
        { label: 'Contact', url: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', url: '#' },
        { label: 'Help Center', url: '#' },
        { label: 'Tutorials', url: '#' },
        { label: 'Webinars', url: '#' }
      ]
    }
  ];

  legalLinks = [
    { label: 'Privacy Policy', url: '#' },
    { label: 'Terms of Service', url: '#' },
    { label: 'Cookie Policy', url: '#' }
  ];

  @ViewChild('particles') particles!: ElementRef;
  @ViewChild('hero') hero!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.createParticles();
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  scrollToDownload() {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  }

  openVideoModal() {
    this.videoModalOpen = true;
    this.renderer.addClass(document.body, 'no-scroll');
  }

  closeVideoModal() {
    this.videoModalOpen = false;
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  prevTestimonial() {
    this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
  }

  nextTestimonial() {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }

  goToTestimonial(index: number) {
    this.currentTestimonial = index;
  }

  activateCard(id: number) {
    this.activeCard = id;
  }

  deactivateCard() {
    this.activeCard = null;
  }



  cardTransforms: { [key: number]: string } = {};

  onMouseMove(event: MouseEvent, featureId: number) {
    const card = (event.currentTarget as HTMLElement);
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    const rotateX = (y / 20).toFixed(2);
    const rotateY = (-x / 20).toFixed(2);

    this.cardTransforms[featureId] = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  getCardTransform(featureId: number): string {
    return this.cardTransforms[featureId] || '';
  }

 
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 300;
  }

  createParticles() {
    const particleCount = 30;
    const particlesEl = this.particles.nativeElement;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = this.renderer.createElement('div');
      this.renderer.addClass(particle, 'particle');
      
      const size = Math.random() * 5 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;
      
      this.renderer.setStyle(particle, 'width', `${size}px`);
      this.renderer.setStyle(particle, 'height', `${size}px`);
      this.renderer.setStyle(particle, 'left', `${posX}%`);
      this.renderer.setStyle(particle, 'top', `${posY}%`);
      this.renderer.setStyle(particle, 'animation-delay', `${delay}s`);
      this.renderer.setStyle(particle, 'animation-duration', `${duration}s`);
      
      this.renderer.appendChild(particlesEl, particle);
    }
  }

  get videoUrl() {
    return 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
  }
}