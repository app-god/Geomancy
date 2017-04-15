import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core'
import { AppModule } from './app.module';

console.log(process.env.MODE)

if (process.env.MODE == 'production') {
  enableProdMode()
}
platformBrowserDynamic().bootstrapModule(AppModule);
