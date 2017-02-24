import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = 'a59b57cbe788d8945293';
    private client_secret = '47d998794973f7a2f5208cd0e9a66b4ea486930d';

    constructor(private _http: Http){
        console.log('Github Service Ready..');
        this.username = 'Temilaj';
    }
    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json()); //retun an observable in json format
    }
    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json()); //retun an observable in json format
    }

    updateUser(username:string){
        this.username = username;
    }
}