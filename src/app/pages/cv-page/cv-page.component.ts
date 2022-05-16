import { Component, OnInit } from '@angular/core';
import { jobInterface } from 'src/app/components/interfaces';
import { WorkBlockComponent } from 'src/app/components/workBlock/workBlock.component';
import { EmploymentService } from 'src/app/services/employment.service';

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.scss']
})
export class CvPageComponent implements OnInit {

  public jobs: jobInterface[] = [];

  constructor(private __employment: EmploymentService) { }

  ngOnInit(): void {
    this.jobs = this.__employment.getJobs();
  }

}
