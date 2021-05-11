import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProjectType } from "../../model/project.type";
import { ProjectStatus } from "../../model/project.status";
import { UserService } from "../../user/user.service";
import { Project } from "../../model/project";
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-project-reactiveform-add',
  templateUrl: './project-reactiveform-add.component.html',
  styleUrls: ['./project-reactiveform-add.component.css']
})
export class ProjectReactiveformAddComponent implements OnInit {

    projectCreationForm: FormGroup;
    submitted = false;

    projectTypeOptions;
    projectStatusOptions;
    userOptions;

    projects: Project[] = [];

    constructor(private formBuilder: FormBuilder, private userService: UserService ,private router:Router, private projectService:ProjectService) {
        this.projectTypeOptions = ProjectType;
        this.projectStatusOptions = ProjectStatus;
        this.userOptions = this.userService.getUserList();
    }

    ngOnInit() {
        this.projectCreationForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(6)]],
            description: ['', Validators.required],
            type: ['', [Validators.required]],
            owner: ['', [Validators.required]],
            status:['' , [Validators.required]]
        });
    }

    // convenience getter for easy access to form fields
    get controls() { return this.projectCreationForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.projectCreationForm.invalid) {
            return;
        }
        let newProject = {
            ...this.projectCreationForm.value,
            //  id: this.generateId(),
            };
        this.projectService.createNewProject(newProject);
        this.projectCreationForm.reset();
        this.router.navigateByUrl('/projects');
   
     }
     generateId() {
       return Math.floor(Math.random() * 100);
     }

}
