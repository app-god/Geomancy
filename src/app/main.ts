import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from "@angular/core";

console.log('github->heroku deployment works')
console.log('IONIC_ENV', process.env.IONIC_ENV)

if (process.env.IONIC_ENV == 'prod') {
    enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule);
