import { Component, Input } from '@angular/core';
import { jobInterface } from '../interfaces';

@Component({
  selector: 'workBlock',
  templateUrl: './workBlock.component.html',
  styleUrls: ['./workBlock.component.scss']
})
export class WorkBlockComponent {
  @Input()
  public jobObject!: jobInterface;

}
