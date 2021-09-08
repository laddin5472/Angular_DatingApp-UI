import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userModel: any = {}
  loggedIn: boolean = false
  currentUser$: Observable<User> = new Observable<User>();
  
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    //this.getCurrentUser();
    this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    this.accountService.login(this.userModel).subscribe(response => {
      console.log(response);
      //this.loggedIn = true;
    }, error => console.log(error))
  }

  logout(){
    this.accountService.logout();
    this.userModel.username = '';
    this.userModel.password = '';
    //this.loggedIn = false;
  }

  getCurrentUser(){
    //The subscription to currentUser$ observable may lead to memory leak
    //as the currentUser$ will not complete as it is NOT http request
    //So, instead of using the following we can use Async Pipe
    this.accountService.currentUser$.subscribe(user => {
      this.loggedIn = !!user;
    }, error => {
      console.log(error);
    })
  }
}
