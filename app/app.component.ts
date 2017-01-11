import { Component } from '@angular/core';
import { GithubService } from './services/github.service';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [GithubService],
})
export class AppComponent  {
  brand= 'Github Browser';
  brandUrl = 'http://temilajumoke.com';
 }
