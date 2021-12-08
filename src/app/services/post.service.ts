import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

	// Creating an instance of HttpClient
  constructor(private http:HttpClient) { }

//   Saving a post in the storage
saveNewPost(postObj:any){
	return new Promise((resolve,reject)=>{	
	// Making an http Call
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

  updateLikes(postObj:any){
    return new Promise((resolve, reject)=>{
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

  updateComments(postObj:any){
    return new Promise((resolve, reject)=>{
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
