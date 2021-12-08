import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

	constructor(private fb:FormBuilder, public userService:UserService, private router:Router) { }
  ngOnInit(): void {
  }
// FormGroup with formControls for password, username and email
// Takes a json Object and uses Validators to validate
// that the forms aren't empty, the email format is true and the 
// username isn't longer than 10letters
// and the minLenght(6) of the password is true
createAccountForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    username :['', [Validators.required, Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

//   Function to create a new User 
//   Data is stored in tha json file data.json
create(){
    this.userService.createNewUser(this.createAccountForm.value).then((res)=>{
      console.log(res);
	//   The response of the Promise is saved in the User Object
      this.userService.user = res;
	//   The User Object is also safed in the local storage, so the user remains logged in after reloading
      localStorage.setItem('user', JSON.stringify(res));
    //   After logging in the User is redirected to the Posts page
	  this.router.navigate(['/posts']);
    }).catch((err)=>{
      console.log(err);
    });
  }

}