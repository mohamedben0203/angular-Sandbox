import { TestBed } from '@angular/core/testing';
import { jobInterface } from '../components/interfaces';

import { EmploymentService } from './employment.service';

describe('EmploymentService', () => {
  let service: EmploymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return array of 4 objects', () => {
    const jobs: jobInterface[] = service.getJobs();
    expect(jobs.length).toBe(4);
  });

  it('should return array of jobInterface objects', () => {
    const jobs: jobInterface[] = service.getJobs();
    for(let job of jobs){
      expect(job.title).toBeTruthy();
      expect(job.company).toBeTruthy();
      expect(job.experience).toBeTruthy();
    }
  });
});
