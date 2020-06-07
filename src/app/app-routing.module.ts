import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './content/about/about.component';
import { SkillsComponent } from './content/skills/skills.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { ContactComponent } from './content/contact/contact.component';
import { EducationComponent } from './content/education/education.component';
import { HeaderComponent } from './content/header/header.component';


const routes: Routes = [
  {
    path: '',
    component : ContentComponent,
  },
  {
    path : 'home',
    component : HeaderComponent
  },
 {
   path : '',
   redirectTo : '/home',
   pathMatch : 'full'
 },
//  {
//   path : 'about',
//   component : AboutComponent
// },
// {
//   path : 'experience',
//   component : ExperienceComponent
// },
// {
//   path : 'projects',
//   component : ProjectsComponent
// },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
