import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  apiBaseUrl = 'https://localhost:44318/api/Users';

  constructor(private http: HttpClient){    
  }

  ngOnInit(){
    this.http.get(this.apiBaseUrl).subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
  }
}
