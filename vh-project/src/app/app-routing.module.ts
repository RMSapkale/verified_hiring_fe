import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationDetailsComponent } from './education-details/education-details.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/education', pathMatch: 'full' }, 
  { path: 'education', component: EducationDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
