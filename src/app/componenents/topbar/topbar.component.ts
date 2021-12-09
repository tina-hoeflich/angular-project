import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

	// Constructor of the Class TopbarComponent
	constructor(public userService:UserService, private router:Router) { }
  ngOnInit(): void {
  }

//   Function to logout by resetting the user to undefined 
// 	and clearing the local storage this makes sure, the user can't see the posts page, without 
//  being logged into his/her account
  logout(){
    this.userService.user = undefined;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}

