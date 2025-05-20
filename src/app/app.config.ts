import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [ provideNoopAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    ]
};

