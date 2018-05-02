import { Component } from '@angular/core';
import { ServerService } from './servers.service';
import { Response } from '@angular/http';
import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //firebase url  https://udemy-angular-http-33434.firebaseio.com/

  public servers:Server[] = [];
  constructor(private serversService:ServerService){}

  onAddServer(name: string) {
    this.servers.push(new Server(name, 5, this.generateId()));    
  }

  private generateServers():void{
    this.servers= [
      new Server('Testserver', 10, this.generateId()),
      new Server('Liveserver', 100, this.generateId())   
    ];
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  saveServers(){
    this.serversService.storeServers(this.servers).subscribe(
      (response:Response)=>{
        console.log(response);
      }
    );
  }

  loadServers(){
    this.serversService.loadServers().subscribe(
      (response:Response) => {
        //console.log(response);
        this.servers=response.json();
      }
    )
  }

  cleanServers(){
    this.servers = [];
  }

}
