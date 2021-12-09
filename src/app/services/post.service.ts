import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// This file handles the read and write operations to the posts array inside the Json 

export class PostService {

	// Creating an instance of HttpClient
  constructor(private http:HttpClient) { }

//   Saving a post in the data.json file/ to the json server
saveNewPost(postObj:any){
	return new Promise((resolve,reject)=>{	
	// Making an http Call
	// This function constructs a post request that interprets the body as a JSON 
	// object and returns the response body as a JSON object. It returns an obeservable of it, whcích can be subscribed to
	this.http.post('http://localhost:3000/posts/', postObj).subscribe(
        (res)=>{
          resolve(res);
        },
        (err)=>{
			console.log(err)
          reject(err);
        }
      );
    });
  }


// Function to get the posts
getPosts(){
    return new Promise((resolve, reject)=>{
		// This function Constructs a GET request that interprets the body as a JSON object
		// and returns  an Observable of the response body as a JSON object.
      this.http.get('http://localhost:3000/posts/').subscribe(
        (res)=>{
          resolve(res);
        },
        (err)=>{
          reject(err);
        }
      );
    })
  }

//   Function to update the likes by updating the PostObject

  updateLikes(postObj:any){
    return new Promise((resolve, reject)=>{
		// This function onstructs a PUT request 
		// that interprets the body as a JSON object and returns an observable of JSON object.(of the response)
      this.http.put('http://localhost:3000/posts/' + postObj.id, postObj).subscribe(
        (res)=>{
          resolve(res);
        },
        (err)=>{
          reject(err);
        }
      );
    });
  }
// Function to update the comments of a Post
  updateComments(postObj:any){
    return new Promise((resolve, reject)=>{
		// This function onstructs a PUT request 
		// that interprets the body as a JSON object and returns an observable of JSON object.(of the response)
      this.http.put('http://localhost:3000/posts/' + postObj.id, postObj).subscribe(
        (res)=>{
          resolve(res);
        },
        (err)=>{
          reject(err);
        }
      );
    });
  }
}
