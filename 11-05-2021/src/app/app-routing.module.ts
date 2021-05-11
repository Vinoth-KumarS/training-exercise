import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { ProjectDashboardComponent } from "./project/project-dashboard/project-dashboard.component";
import { ProjectReactiveformAddComponent } from "./project/project-reactiveform-add/project-reactiveform-add.component";
import { ProjectUserComponent } from './project/project-user/project-user.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/projects', pathMatch: 'full' },
    { path: 'users', component: UserListComponent },
    { path: 'projects', component: ProjectDashboardComponent },
    { path: 'userproject' , component:ProjectUserComponent},
    { path: 'projects/reactive-form-add', component: ProjectReactiveformAddComponent },
    { path: 'projects/:id' , component: ProjectDetailsComponent},

];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutesModule {
}
