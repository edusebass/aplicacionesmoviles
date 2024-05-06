import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { defineCustomElements } from '@ionic/pwa-elements/loader'

if (environment.production) {
  enableProdMode();
}

defineCustomElements(window)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
