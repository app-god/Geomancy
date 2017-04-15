import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core'
import { AppModule } from './app.module';

const envMode = process.env.MODE || 'development'
console.log('environment: ', envMode)

if (envMode == 'production') {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule);
