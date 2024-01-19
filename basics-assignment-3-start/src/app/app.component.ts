import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showPass = false;
  log = [];

  onToggleDetails() {
    this.showPass = !this.showPass;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date())
  }
}


