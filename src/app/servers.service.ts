import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

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
}