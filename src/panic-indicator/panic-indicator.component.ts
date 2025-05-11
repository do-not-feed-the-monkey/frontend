import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'panic-indicator',
  imports: [CommonModule, Tag],
  templateUrl: './panic-indicator.component.html',
  styleUrl: './panic-indicator.component.css'
})
export class PanicIndicatorComponent {
  @Input() eventSeverity: number | undefined;
  severity: string = '';
  severityValue: string | undefined;

  ngOnInit() {
    // if (eventSeverity) {
    //   this.severityValue="Primary";
    // }
    // if () {
    //   this.severity="secondary"; 
    //   this.severityValue="Secondary";
    // }
    
    // if () {
    //   this.severity="success"; 
    //   this.severityValue="Success";
    // }
    if (this.eventSeverity && this.eventSeverity === 0)  {
      this.severity="secondary";
     
      this.severityValue = this.eventSeverity.toString();
    }
    if (this.eventSeverity && this.eventSeverity >0 && this.eventSeverity < 5) {
      this.severity="info"; 
      this.severityValue = this.eventSeverity.toString();
    }
    if (this.eventSeverity && this.eventSeverity >= 5 && this.eventSeverity <=7) {
      this.severity="warn";
      this.severityValue = this.eventSeverity.toString();
    }

    if (this.eventSeverity && this.eventSeverity > 7) {
      this.severity="danger";
      this.severityValue = this.eventSeverity.toString();
    }
  }
}
