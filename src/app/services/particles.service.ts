import { Injectable } from '@angular/core';

declare var particlesJS: any;

@Injectable({
  providedIn: 'root'
})
export class ParticlesService {
  constructor() { }

  initParticles(containerId: string): void {
    if (typeof particlesJS !== 'undefined') {
      particlesJS(containerId, {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#3a86ff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#3a86ff", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
          }
        }
      });
    }
  }
}