import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';


const routes: Routes = [
	// Always redirectig to the login page
	{path: '', redirectTo:'login', pathMatch:'full'},
	// Adding the Login Page
	{path:'login', component: LoginComponent},
	// Adding the Create-Acount Page 
	{path:'create-account', component: CreateAccountComponent},
	{path:'posts', component:PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
