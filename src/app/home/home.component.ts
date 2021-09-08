import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode: boolean = false;
  users: any;
  apiBaseUrl = 'https://localhost:44318/api/Users';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  registerModeToggle(){
    this.registerMode = !this.registerMode
  }

  getUsers(){
      this.http.get(this.apiBaseUrl).subscribe(users => {
        this.users = users;
      }, error => {
        console.log(error);
      });
  }

  cancelRegusterMode(event: boolean){
    this.registerMode = event;
  }

}
