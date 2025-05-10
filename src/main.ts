import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common'; // Konieczne dla dyrektyw Angulara

bootstrapApplication(AppComponent, {
  // imports:[CommonModule, HttpClientModule],
  providers: [
    MessageService, // Dodajemy MessageService
  ]
});
