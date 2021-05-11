import { Component, OnInit, Input } from '@angular/core';
import { Project } from "../../model/project";
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  @Input() project:Project;

  constructor(private projectService: ProjectService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let projectId = +params['id'];
      
      this.project = this.projectService.findProjectById(projectId);
    });
  }


}
