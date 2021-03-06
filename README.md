# Webengineering Project 2021

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4. So for the installation of  Angular please look at https://angular.io/guide/setup-local. **It is not yet possible to upload everything on github so please download the code from https://dhbwstg-my.sharepoint.com/:f:/g/personal/inf20112_lehre_dhbw-stuttgart_de/Et2uNSDghV5MugjOTBOlY9UBSDPhKAtbNv81PPCyL9qpuw?e=kFAUUd**

## Running the project on the development server

For running the web-app on the the local development server you need to start the json server on **http://localhost:3000/** so it is reqired to open a terminal and type `json-server mock-api/data.json` at the SAME LOCATION where project is safed so at *../WebengineeringProject2021*. The posts and login data will be safed at this locaion.

A working copy of the project can soon be created by downloadig the github project as `zip`. (For now download the zip as noted above).
In the project directory `ng serve --open` must be executed via the console. Afterwards the page should open automatically (if not it can be viewed in the browser under `http://localhost:4200/`). 

# The Project

### What went well

- I learned a lot that I will use in the future. 
- I used this project to learn a lot of shortcuts to use in the Terminal. (F.ex PS C:\angular_programming_project\social-network-wall> ng g c componenents/topbar). This really helaped me and safed lots of time
- I learned to initialize firebase and how this works
- I learned abour Angular and many modules of it
- The project made me revise the things we learned in the lectures about css
- I had to learn a lot about typescript which will help me in the future

### What didn't go too well

- I still have one bug that needs fixing: After a user creates a new post the page **needs to be refreshed manually** once, after that everything works fine. 
If this isn't done once, the user can like and comment on the post he just created, but it will be deleted once he or she refreshes the page (the like and comment of the just uploaded post isn't safed and there will occur errors). This doesn't interfere with the rest of the flow of the Application
- The App isn't fully responsive since the text/ captions of the posts are not scaling down and up. This could be implemented.


## the layout

For the layout I used Css and flexbox to make the page responsive (apart from the text). The three different pages each hava a Css file [`src\app\pages\posts\posts.component.css`](src\app\pages\posts\posts.component.css) , [`src\app\pages\login\login.component.css`](src\app\pages\login\login.component.css) and [`src\app\pages\create-account\create-account.component.css`](src\app\pages\create-account\create-account.component.css)

## the structure
The Project is constructed out of three components
- the [`src`](src) folder which contains the app and the environments folder. Furthermore it contains a [`main.ts`](main.ts)[`style.css`](style.css)and [`index.html`](index.html) that configure some general configurations for the whole project. I also created a favoricon for the app :). 
- the mock-api folder that conatins the [`mock-api\data.json`](mock-api\data.json) file. here the user credentials for logging in are safed and the posts(apart fro the images of course) are safed. This needs to be run with **json-server mock-api/data.json**
- the node_modules folder containing all the modules for Anular

### The app uses the following moules from Angular:

- AppRoutingModule
- BrowserAnimationsModule
- MatButtonModule
- MatFormFieldModule
- MatInputModule
- ReactiveFormsModule
- FormsModule
- HttpClientModule
- MatSnackBarModule
- MatIconModule 
- MatMenuModule
- MatCardModule
- MaterialFileInputModule
- AngularFireModule
- AngularFirestoreModule

### Logic of the login: 

- Using the function `getUser()` in `user.services.ts.` returns new Promise that resolves the email entered into the email form
- This function returns an Observable, that can be subscribed to. The Pattern of the observable is: [http://localhost:3000/users?email=](http://localhost:3000/users?email=) ... (email of the user). This email is used to then check if the password entered into the login form is correct.
- login Button in `src\app\pages\login\login.component.html` calls the function `login()` located in `src\app\pages\login\login.component.ts`
- To dislay messages like **login successful** or **incorrect password**  ****the Component `Snackbar` of Angular-Materials is used. ([Angular Material UI component library](https://material.angular.io/))
- The User is directly redirected to the posts-page after loggin in. The path of the posts page is added inside `src\app\app-routing.module.ts` and the redirection is managed throught the Router module in `src\app\pages\login\login.component.ts`
- When the User is logged in, the User-Object is safed in the local storage. This is implemented in the `login()`function`src\app\pages\login\login.component.ts` as well. This means, the user is still logged into his/her account, even after reloading the page.

### Logic of the logout:

- The `logout()` function in `src\app\componenents\topbar\topbar.component.ts`performes the logging out of an account. It makes sure the local Storage is cleared and the user can't see the Posts Page anymore.

### Logic of the Posts Page:

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

To post a picture I implemented a post() functions using typescript. It uploads the picture to a storage that is hosted by firebase (see [`src\app\services\post.service.ts`](src\app\services\post.service.ts)) for further explanation. 

### What is firebase?

A short explanaitionvideo:

[![Watch the video](https://user-images.githubusercontent.com/44570841/145325382-1db2526c-abbf-46da-a80b-d7132ab194bc.png)](https://youtu.be/iosNuIdQoy8)


## The dependencies of the App are shown in the follewing graphs:
*Any information required to understand the code and detailed structure of the code should be found in the comments of the code!*

This file is just to give an overview. 

### Components:

- ![componenents_overview](https://user-images.githubusercontent.com/44570841/145303211-8cb81e02-18c1-4e45-9660-399a3552748c.png)
### Pages

- ![pages_overview](https://user-images.githubusercontent.com/44570841/145303249-8edd30b4-fe43-4fb6-884e-ccc737d3185f.png)
### Services:

- ![services_overview](https://user-images.githubusercontent.com/44570841/145303289-8cb09d6a-468f-418f-bfd9-78f9e401e8cc.png)
### Overall overview (can be zoomed quite well):
- ![source_overview](https://user-images.githubusercontent.com/44570841/145303358-3f4d6038-fc27-4ea3-9ea9-1f147c5bb55e.png)

## Further information of Angular:
# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

# Further help or information about Angular

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
