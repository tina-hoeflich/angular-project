import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

	// Constructor of the Class UserService
	// Implements an Object of the Class HttpClient
  constructor(private http:HttpClient) { }

	// Property user of the class UserService, which can be of any type
	user:any;
  public createNewUser(dataObj:any){
	  return new Promise((resolve,reject)=>{
		  this.http.post('http://localhost:3000/users',dataObj).subscribe(
			  (res)=>{
				//   resolving response
				  resolve(res);
			  },
				  (err)=>{
					//   rejecting error
					  reject(err);
				  }
		  );
		});
	}
	// Function to get the Data of a User, whenever a user tries to log into his/her account 
	// Function is required to then checj, if there exists a user with the entered email address
	// returns an observable, that can be subscribed to
	// Pattern of the observable : http://localhost:3000/users?email= ... (email of the user)
	public getUser(email:string){
		return new Promise((resolve, reject)=>{
		  this.http.get('http://localhost:3000/users?email=' + email).subscribe(
			(res)=>{
			  resolve(res);
			},
			(err)=>{
			  reject(err);
			}
		  );
		})
	  }
	
	}
