import {Injectable} from '@angular/core';

import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{

    private username = 'TamerHussien';
    private client_id= '6c6c2306622781bbb603';
    private client_secret='67e50664935935d311b27772afe70c5ab3da6077';

    constructor(private _http:Http){

               // console.log('Github Service init....');

    }
        getUser(){

          return  this._http.get('http://api.github.com/users/' + this.username)
            .map(res => res.json());
        }
        getRepos(){

          return  this._http.get('http://api.github.com/users/' + this.username + '/repos')
            .map(res => res.json());
        }

        updateUsername(username:string){
            this.username = username;
        }
}