import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common'; // Konieczne dla dyrektyw Angulara
import { appConfig } from './app/app.config'; 

bootstrapApplication(AppComponent, appConfig);
// bootstrapApplication(AppComponent, {
//   // imports:[CommonModule, HttpClientModule],
//   providers: [
//     MessageService, // Dodajemy MessageService
//   ]
// });
