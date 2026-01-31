import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { logger } from "@auth/logger";

bootstrapApplication(AppComponent, appConfig).then((app) => {
  logger.info('Application bootstrap completed successfully.');
}).catch(err => {
  logger.error('Failed to bootstrap application:', err);
});