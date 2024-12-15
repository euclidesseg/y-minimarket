import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(
        {
          skipInitialTransition:true
        }
      )
    ),
    provideZoneChangeDetection(
      { eventCoalescing: true }
    ),
     provideRouter(routes)
  ]
};
