import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.css',
      styles: [
        `
            h3{
                padding: 20px;
                background-color: lightgreen;
                border: 1px solid green;
            }
        `
    ]
})
export class SuccessAlertComponent {

}
