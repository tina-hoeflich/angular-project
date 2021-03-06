import { Component, OnInit } from '@angular/core';
// Using Formbnilder and Validators from angular/forms
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	// Constructor of LoginComponent
	// Imports an Object of Class Formbuilder, one of class UserService, one of class Snackbar 
  constructor(private fb:FormBuilder, public userService:UserService, private snackbar:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }
// Creating a form group with the two form controls: email and password
// The Validators ensure, that the email is there and in the correct format
// as well as the password has a minimum lenght of 6 
loginForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

//   Function to perform the login of a User 
//   This Function calls src\app\services\user.service.ts getUser() which returns a Promise that then is resolved  
  login(){
    this.userService.getUser(this.loginForm.value.email).then((res:any)=>{
      console.log(res);
	//  case 1: the user-mail doesn't exist / If there is no "match" returned by getUser()
      if(res.length == 0){
        console.log("account does not exist");
		// Writing a message 
        this.snackbar.open('Account does not exist','ok');
      }else{
		//   If the email has been found in the Json Database by getUser()
		// Case 2: email found and passowort correct
        if(res[0].password === this.loginForm.value.password){
        //   Logging to console
			console.log("matched");
          this.snackbar.open('Login successful', 'ok');
        //  User-Object that is returned from the Server is stored UserService 
		  this.userService.user = res[0];
		//   When the user is logged in, the User-Object is safed in the local storage
		// This is required in case of refreshing the page
          localStorage.setItem('user', JSON.stringify(res[0]));
        //  Auto-navigate to the page where the posts are created after loggin in successfully 
		  this.router.navigate(['/posts']);
        }else{
			// Case 3: email found but passwort incorrect
          console.log("incorrect password");
          this.snackbar.open('Incorrect password', 'ok');
        }
      }
    }).catch((err)=>{
		// Log any error
      console.log(err);
    });
  }

}

