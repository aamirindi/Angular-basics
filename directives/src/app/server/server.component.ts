import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
  styles: [`
    .online{
      color: white;
    }
  `]
})
export class ServerComponent {
  // String Interpolation
  serverId = 10;
  // serverId: number = 10;
  serverStatus = "offline";
  // serverStatus: string = "offline"

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online'? 'green' : 'red'
  }

  
}
