import { Component, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mobileMenuOpen = false;
  darkMode = false;
  currentSection = 'home';
  
  // For parent component to listen to dark mode changes
  @Output() darkModeChanged = new EventEmitter<boolean>();

  navLinks = [
    { path: '/', label: 'Home', section: 'home' },
    { path: '/about', label: 'About', section: 'about' },
    { path: '/features', label: 'Features', section: 'features' },
    { path: '/pricing', label: 'Pricing', section: 'pricing' },
    { path: '/testimonials', label: 'Testimonials', section: 'testimonials' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' }
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    this.darkModeChanged.emit(this.darkMode);
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.currentSection = sectionId;
      this.mobileMenuOpen = false;
    }
  }

  scrollToDownload() {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = ['home', 'about', 'features', 'pricing', 'testimonials'];
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offset = element.offsetTop - 100;
        const height = element.offsetHeight;
        if (scrollPosition >= offset && scrollPosition < offset + height) {
          this.currentSection = section;
          break;
        }
      }
    }
  }

  ngOnInit() {
    // Load dark mode preference from localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      this.darkMode = JSON.parse(savedMode);
      this.darkModeChanged.emit(this.darkMode);
    }
  }


}