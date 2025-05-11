import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { ProgressBar } from 'primeng/progressbar';

@Component({
  selector: 'menubar',
  imports: [Menubar, CommonModule, ButtonModule, ProgressBar],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
  items: MenuItem[] | undefined;
  isSearching:boolean = false;

  ngOnInit() {
      this.items = [
          {
              label: 'Strona startowa',
              icon: 'pi pi-home'
          },
          {
              label: 'Urząd',
              icon: 'pi pi-star'
          },
          {
              label: 'Wydarzenia',
              icon: 'pi pi-search',
              items: [
                  {
                      label: 'Components',
                      icon: 'pi pi-bolt'
                  },
                  {
                      label: 'Blocks',
                      icon: 'pi pi-server'
                  },
                  {
                      label: 'UI Kit',
                      icon: 'pi pi-pencil'
                  },
                  {
                      label: 'Templates',
                      icon: 'pi pi-palette',
                      items: [
                          {
                              label: 'Apollo',
                              icon: 'pi pi-palette'
                          },
                          {
                              label: 'Ultima',
                              icon: 'pi pi-palette'
                          }
                      ]
                  }
              ]
          },
          {
              label: '112',
              icon: 'pi pi-phone'
          }
      ]
  }

  refreshPage() {
    this.isSearching = true;
    setTimeout(()=> {
        this.isSearching = false;
    }, 5000)
  }
}
