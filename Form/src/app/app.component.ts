import { Component, ViewEncapsulation , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Form';

    hidePassword: boolean = true;
    hideConfirmPassword: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  togglePasswordVisibilityTwo() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }
}
