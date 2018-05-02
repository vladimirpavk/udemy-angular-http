import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Server } from './server.model';
import "rxjs/Rx";

@Injectable()
export class ServerService{
    constructor(private http:Http){   
    }

    public storeServers(servers:any):Observable<Response>{
        return this.http.put('https://udemy-angular-http-33434.firebaseio.com/data.json', servers);
    }

    public loadServers():Observable<Response>{
        return this.http.get('https://udemy-angular-http-33434.firebaseio.com/data.json');
    }

    public loadServersMap():Observable<Server[]>{
        return this.http.get('https://udemy-angular-http-33434.firebaseio.com/data.json').map(
            (response:Response)=>{
                return <Server[]>(response.json());
            }
        )
    }

    public getAppName():Observable<string>{
        return this.http.get('https://udemy-angular-http-33434.firebaseio.com/appName.json').map(
            (response:Response)=>{
                console.log(response.json());
                return <string>(response.json());
            }
        ); 
    }
}