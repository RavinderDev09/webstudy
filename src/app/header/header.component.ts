import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    darkMode = false;
  mobileMenuOpen = false;
  yearlyBilling = false;
  videoModalOpen = false;
  showScrollButton = false;
  currentTestimonial = 0;
  activeCard: number | null = null;

    @ViewChild('particles') particles!: ElementRef;

  constructor(private renderer: Renderer2) {}

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


}
