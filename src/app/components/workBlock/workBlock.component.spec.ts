import { ComponentFixture, TestBed } from '@angular/core/testing';
import { jobInterface } from '../interfaces';

import { WorkBlockComponent } from './workBlock.component';

describe('WorkBlockComponent', () => {
  let component: WorkBlockComponent;
  let fixture: ComponentFixture<WorkBlockComponent>;

  const jobs: jobInterface = {
    title: 'test',
    company: 'test',
    experience: ['test']
  }; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkBlockComponent);
    component = fixture.componentInstance;
    component.jobObject = jobs;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
