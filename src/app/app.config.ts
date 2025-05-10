// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { providePrimeNG } from 'primeng/config';
// import { HttpClientModule } from '@angular/common/http';
// import { TableModule } from 'primeng/table';
// import { ButtonModule } from 'primeng/button';
// import Aura from '@primeng/themes/aura'; // Pamiętaj, aby prawidłowo zaimportować temat

// export const appConfig: ApplicationConfig = {
//     providers: [
//         provideAnimationsAsync(),
//         providePrimeNG({
//             theme: {
//                 preset: Aura
//             }
//         }),
//         importProvidersFrom(HttpClientModule, TableModule, ButtonModule)
//     ]
// };


import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

// Angular & PrimeNG modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';

// Motyw z @primeng/themes
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    importProvidersFrom(
      HttpClientModule,
      FormsModule,
      TableModule,
      ButtonModule,
      CheckboxModule,
      RatingModule,
      ToastModule
    )
  ]
};
