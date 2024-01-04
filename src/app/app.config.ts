import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';

import { routes } from './app.routes';
import { AppConfigService } from './app-config.service';

const startupServiceFactory = (appConfig: AppConfigService) => {
  console.debug("startupServiceFactory()");
  return () => appConfig.loadAppConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), 
    AppConfigService, {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [AppConfigService],
      multi: true
    }
  ]
};
