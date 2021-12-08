# Webengineering Project 2021

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4. So for the installation of  Angular please look at https://angular.io/guide/setup-local 

## Running the project on the development server

For running the web-app on the the local development server you need to start the json server on **http://localhost:3000/** so it is reqired to open a terminal and type **json-server mock-api/data.json** at the SAME LOCATION where project is safed so at ../WebengineeringProjectSocialNetwork. The posts and login data will be safed at this locaion
A working copy of the project can be created by downloadig the project as `zip`. 
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


# the layout

For the layout I used Css and flexbox to make the page responsive (apart from the text). The three different pages each hava a Css file [`src\app\pages\posts\posts.component.css`](src\app\pages\posts\posts.component.css) , [`src\app\pages\login\login.component.css`](src\app\pages\login\login.component.css) and [`src\app\pages\create-account\create-account.component.css`](src\app\pages\create-account\create-account.component.css)

# the structure
The Project is constructed out of three components
- the [`src`](src) folder which contains the app and the environments folder. Furthermore it contains a [`main.ts`](main.ts)[`style.css`](style.css)and [`index.html`](index.html) that configure some general configurations for the whole project. I also created a favoricon for the app :). 
- the mock-api folder that conatins the [`mock-api\data.json`](mock-api\data.json) file. here the user credentials for logging in are safed and the posts(apart fro the images of course) are safed. This needs to be run with **json-server mock-api/data.json**
- the node_modules folder containing all the modules for Anular

The app uses the following moules from Angular:

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

## The dependencies of the App are shown in the folloewing graphs:
### Components:
- ![componenents_overview](https://user-images.githubusercontent.com/44570841/145303211-8cb81e02-18c1-4e45-9660-399a3552748c.png)
### Pages
- ![pages_overview](https://user-images.githubusercontent.com/44570841/145303249-8edd30b4-fe43-4fb6-884e-ccc737d3185f.png)
### Services:
- ![services_overview](https://user-images.githubusercontent.com/44570841/145303289-8cb09d6a-468f-418f-bfd9-78f9e401e8cc.png)
### Overall overview (can be zoomed quite well):
- ![source_overview](https://user-images.githubusercontent.com/44570841/145303358-3f4d6038-fc27-4ea3-9ea9-1f147c5bb55e.png)

##Further information of Angular:
# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

# Further help or information about Angular

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
