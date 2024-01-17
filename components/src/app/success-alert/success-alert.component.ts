import { Component } from "@angular/core";

@Component({
    selector: "app-success-alert",
    templateUrl: './success-alert.component.html',
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