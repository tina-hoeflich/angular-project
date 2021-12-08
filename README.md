# SocialNetworkWall

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Web Engineering Project

### 

## What went well

Things I learned, that will help me in the future:

- I learned to use the Terminal in VS Code for my project. (F.ex PS C:\angular_programming_project\social-network-wall> ng g c componenents/topbar)

Login Component:

- Getting the content that is entered into the forms:
    - Using ReactiveFormsModule and FormsModule

Create-AccountComponent:

## Handeling Error Messages:

- In .. .components.html:
    - Durch `<mat-error>`. Wirft einen Fehler, wenn das FormControl-Feld "email" nicht die nötigen Validators erfüllt

## HTTP Client Module/ Angular Services

Json Server:

- `ng g s services/user`
- Installing a json Server by using the Cmdlet `npm i -g json-server`
- For the Data I created a Folder calles mock-api and in this folder I created a json calles `data.json`
- `json-server --watch mock-api/data.json`:
    
    Resources
    [http://localhost:3000/users](http://localhost:3000/users)[http://localhost:3000/posts](http://localhost:3000/posts)
    
    Home
    [http://localhost:3000](http://localhost:3000/)
    

## Creating User Page:

- Using the function `CreateNewUse()`in `user.services.ts.` returns new Promise
- Details of the User (username, email, password) are stored in the json file `data.json` inside the array "`users`"
- Json Server listens to the port localhost:3000
- The User is directly redirected to the posts-page after creating an account. The path of the posts page is added inside `src\app\app-routing.module.ts` and the redirection is managed throught the Router module in `src\app\pages\login\create-account.component.ts`

## Login Page

- Using the function `getUser()` in `user.services.ts.` returns new Promise that resolves the email entered into the email form
- This function returns an Observable, that can be subscribed to. The Pattern of the observable is: [http://localhost:3000/users?email=](http://localhost:3000/users?email=) ... (email of the user). This email is used to then check if the password entered into the login form is correct.
- login Button in `src\app\pages\login\login.component.html` calls the function `login()` located in `src\app\pages\login\login.component.ts`
- To dislay messages like **login successful** or **incorrect password**  ****the Component `Snackbar` of Angular-Materials is used. ([Angular Material UI component library](https://material.angular.io/))
- The User is directly redirected to the posts-page after loggin in. The path of the posts page is added inside `src\app\app-routing.module.ts` and the redirection is managed throught the Router module in `src\app\pages\login\login.component.ts`
- When the User is logged in, the User-Object is safed in the local storage. This is implemented in the `login()`function`src\app\pages\login\login.component.ts` as well. This means, the user is still logged into his/her account, even after reloading the page.

## Logout

- The `logout()` function in `src\app\componenents\topbar\topbar.component.ts`performes the logging out of an account. It makes sure the local Storage is cleared and the user can't see the Posts Page anymore.

## Posts Page

- With `ng g c pages/posts` the PostsComponent was created
- The PostComponent has a menue, displayed when clicking on a profile button. Here the user can log out of his or her account again. This is implemented in the `src\app\componenents\topbar\topbar.component.ts` file
- The user is redirected to the login page, whenever he/she isn't logged into an account. This is defined in the `ngOnInit()` function of `src\app\pages\posts\posts.component.ts`
- For the posts the module `MatCardModule` imported form angular Angular-Materials is used. ([Angular Material UI component library](https://material.angular.io/))
- The logic of posting somethig is implemented in the `src\app\pages\posts\posts.component.ts` file.
    - The scheme of a post is:
        
        ```tsx
        username :'',
        imageURL:'', //source of the Image
        text:'', //Caption of the Image
        likes:[], //contains the user IDs of the People who liked the Image
        comments:[{username:'', comment:''} //Contains the name of the user who commented and the comment
        ```
        
    
    ### File Input
    
    to upload images to the firebase i used the package `material-file-input` installed via `npm i ngx-material-file-input` ([ngx-material-file-input - npm (npmjs.com)](https://www.npmjs.com/package/ngx-material-file-input))
    
    ### Posting a Picture
    
    To post a picture I implemented two functions using typescript. 
    
    ## Firebase
    
    ![Untitled](Web%20Engineering%20Project%20c085f7e8d81f4b1598bb76d45a4a5253/Untitled.png)
    
    I created a firebase using my google account. This is a free tool from google that I used to try out a little more things with my Project. 
    
    In the Firebase it is possible to use some storage for user data. This implemented with in firebase
    
    ```
    service firebase.storage {
      match /b/{bucket}/o {
        match /{allPaths=**} {
          allow read, write;
        }
      }
    }
    ```
