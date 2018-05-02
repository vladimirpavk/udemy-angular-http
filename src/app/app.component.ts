import { Component, OnInit } from '@angular/core';
import { ServerService } from './servers.service';
import { Response } from '@angular/http';
import { Server } from './server.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //firebase url  https://udemy-angular-http-33434.firebaseio.com/

  public servers:Server[] = [];
  private appName:Observable<string>=this.serversService.getAppName();

  constructor(private serversService:ServerService){}

  ngOnInit(){
   
  }

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
    /*this.serversService.loadServers().subscribe(
      (response:Response) => {
        //console.log(response);
        this.servers=<Server[]>(response.json());
      }
    )*/
    this.serversService.loadServersMap().subscribe(
      (response:Server[])=>{
        this.servers=response;
      }
    )
  }

  cleanServers(){
    this.servers = [];
  }

}
