import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConectUsComponent } from './conect-us/conect-us.component';
import { MadridComponent } from './madrid/madrid.component';
import { OuProjectsComponent } from './ou-projects/ou-projects.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'connectUs', component: ConectUsComponent },
  { path: 'project', component: OuProjectsComponent },
  { path: 'club', component: MadridComponent },
  { path: "**", pathMatch: "full", redirectTo: "/aboutUs" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
