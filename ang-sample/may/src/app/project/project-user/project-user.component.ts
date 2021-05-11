import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { User } from "src/app/model/user";
import { Project } from "src/app/model/project";
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-project-user',
  templateUrl: './project-user.component.html',
  styleUrls: ['./project-user.component.css']
})
export class ProjectUserComponent implements OnInit {

  users:User[] = [];
  projects:Project[] =[];

  selectedUser;

  constructor(private userservice:UserService , private projectService: ProjectService) { 
    this.users = this.userservice.getUserList();
    this.projects = this.projectService.getProjectList();

  }

  ngOnInit(): void {
  }

  onUserClicked(user) {
    this.selectedUser = user;
    console.log(this.selectedUser)
    this.projects = this.projectService.filteringProjectsByUserId(user.id);
    console.log(this.projects)

  }
}
