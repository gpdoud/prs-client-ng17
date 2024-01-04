import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  http = inject(HttpClient);
  appConfig: any;

  get AppConfig() {
    return this.appConfig;
  }

  loadAppConfig() {
    this.http.get('/assets/app.config').subscribe(
      config => {
        console.log(config);
        this.appConfig = config
      }
    )
  }
}
