import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { finalize } from 'rxjs/operators';
import { PostService } from 'src/app/services/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(public userService:UserService, private router:Router, private storage:AngularFireStorage, public postService:PostService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
	//   The user is redirected to the login page, whenever he/she isn't logged into an account
    if(this.userService.user == undefined || this.userService.user == null){
    //   Checking if there is any User Object in the local storage
		let str = localStorage.getItem('user');
    // When there is a User logged in, the storage is parsed 
		if(str != null){
        this.userService.user = JSON.parse(str);
      }
	//   When there is no User logged in: redirection to login page
      else{
        this.router.navigate(['/login']);
      }
    }
	// Calling getPosts() of the postsService
    this.postService.getPosts().then((res:any)=>{
      this.posts = res;
      for(let post of this.posts){
        this.commentText.push("");
      }
    }).catch((err)=>{
      console.log(err);
    })
  }

//   Properties of Class PostComponents =PostObject
  selectedFile:any;
  text = "";
  posts:Array<any> = [];
  commentText:Array<string> = [];

//   Function to return the selected file in the Object selected file
  onFileSelected(event:any){
    this.selectedFile = event.target.files[0];
  }

// Function to post an image / called with post-button
// Calls the function uploadImage()
  post(){
    this.snackbar.open('Creating the post...', '', {duration:15000});
// if an image is selected --> should be uploaded
	if(this.selectedFile != undefined || this.selectedFile != null){
    //   Upload the selected image and return url
		this.uploadImage().then((imageURL)=>{
			// logging the image url
        console.log(imageURL);
		// creating the Obj
        let postObj = {
          username: this.userService.user.username,
          text : this.text,
          imageURL: imageURL,
          likes: [],
          comments:[]
        };
        this.posts.push(postObj);
        this.postService.saveNewPost(postObj).then((res)=>{
          console.log(res);
          this.snackbar.open('Posted successfully', 'ok');
        }).catch((err)=>{
          console.log(err);
        });
        //this.selectedFile = undefined;
        
      }).catch((err)=>{
        console.log(err);
      })
    }
    else{
      let postObj = {
        username: this.userService.user.username,
        text : this.text,
        imageURL: '',
        likes: [],
        comments:[]
      };
      this.posts.push(postObj);
      this.postService.saveNewPost(postObj).then((res)=>{
        console.log(res);
        this.snackbar.open('Posted successfully', 'ok');
      }).catch((err)=>{
        console.log(err);
      });
    }
  }
// Function to upload an image
// Returns a new Promise 
  uploadImage() {
    return new Promise((resolve, reject) => {
		// Gets the actual date
      let n = Date.now();
      const file = this.selectedFile;
	//   Uses the actual date to create a new individual path to the picture
      const filePath = `images/${n}`;
	//   creating a reference to the File using storage:AngularFireStorage
      const fileRef = this.storage.ref(filePath);
	//   create a task using the upload function of AngularFireStorage:storage
      const task = this.storage.upload(`images/${n}`, file);
    //  usinf the function snapshotChanges of AngularFireUploadTask
	// Function is looking for changes 
	  task.snapshotChanges().pipe(
	
	// is called when there is a change detected
        finalize(() => {
			// getting the URL of image
          let imageURL = fileRef.getDownloadURL();
		//   returns the URL
          imageURL.subscribe((url: any) => {
            if (url) {
              console.log(url);
              resolve(url);
            }
          });
        })
      ).subscribe(
        (url)=>{
          if(url){
            console.log(url);
          }
        }
      );
    });
  }
// Like function using the Post-Id that is safed in the Mock-Api
  like(postId:any){
    for(let i = 0; i < this.posts.length; i++){
      if(this.posts[i].id == postId){
		//   Checking if user has already liked the post
        if(this.posts[i].likes.indexOf(this.userService.user.id) >= 0){
			// unliking
			this.posts[i].likes.splice(this.posts[i].likes.indexOf(this.userService.user.id), 1);
        }
        else{
			// liking
          this.posts[i].likes.push(this.userService.user.id);
        }
        this.postService.updateLikes(this.posts[i]).then((res)=>{
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        })
      }
    }
  }
// Function to comment using PostsComponent.userService PostsComponent.commentText PostsComponent.postService.updateCompoent()
  comment(postId:any, commentIndex:any){
    for(let i = 0; i < this.posts.length; i++){
      if(this.posts[i].id == postId){
        let commentObj = {
          username: this.userService.user.username,
          comment: this.commentText[commentIndex]
        };
        this.posts[i].comments.push(commentObj);
        this.commentText[commentIndex] = "";
        this.postService.updateComments(this.posts[i]);
      }
    }
  }

//   Implementing the schema of each post
  postSchema = {
    username :'',
    imageURL:'',
    text:'',
    likes:[],
    comments:[{username:'', comment:''}]
  }

}
