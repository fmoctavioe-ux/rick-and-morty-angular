import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// ESTA ES LA LÍNEA MÁGICA QUE FALTA:
import { provideHttpClient } from '@angular/common/http'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // AQUÍ LE DAMOS EL PERMISO PARA USAR INTERNET:
    provideHttpClient() 
  ]
};