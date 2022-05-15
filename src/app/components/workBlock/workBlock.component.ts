import { Component, Input } from '@angular/core';

@Component({
  selector: 'workBlock',
  templateUrl: './workBlock.component.html',
  styleUrls: ['./workBlock.component.scss']
})
export class WorkBlockComponent {
  @Input()
  public jobTitle: string ='';

  @Input()
  public company: string = '';

  @Input()
  public content: string = '';

}
