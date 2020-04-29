import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SchedulerComponent} from './scheduler/scheduler.component'
import {ProjectsComponent} from './projects/projects.component'
const routes: Routes =
[
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'scheduler', component: SchedulerComponent},
  {path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
