import { Component, OnInit } from '@angular/core';
import { jobInterface } from 'src/app/components/interfaces';
import { WorkBlockComponent } from 'src/app/components/workBlock/workBlock.component';

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.scss']
})
export class CvPageComponent implements OnInit {

  public jobs: jobInterface[] = [
    {
      title: 'Associate Software Engineer',
      company: 'S&P Global',
      experience: [
        'Created and implemented API endpoints using C#',
        'Developed in an agile scrum environment',
        'Utilized SonarQube to ensure high code standards met',
        'Micro services were hosted as docker containers and used kunernetes to access'
      ]
    },
    {
      title: 'Associate Software Engineer',
      company: 'IHS Markit',
      experience: [
        'Created angular storybook components using kendo web components',
        'Followed figma UI/UX spec sheet for design',
        'Created unit tests using Jasmine/karma',
        'Created npm packages using lerna for consumption in other micro services',
        'Developed in an agile scrum environment'
      ]
    },
    {
      title: 'Summer Intern Software Engineer',
      company: 'IHS Markit',
      experience: [
        'Used Vue Js to work on internal build radiator',
        "Utilized git API's to maintain correct data",
        'Created unit tests using Jest',
        'Contributed to HR project, reaching out to different members within the organisation to assemble a critical assessment report companies'
      ]
    },
    {
      title: 'Intern',
      company: 'codethink',
      experience: [
        'Discovered how teams tackles problems using agile methodology to find various solutions to real world problems',
        "Discovered the company's intranet which operated on linux",
        'Code reviewed commercial code'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
