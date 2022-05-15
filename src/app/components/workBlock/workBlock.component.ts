import { Component } from '@angular/core';

@Component({
  selector: 'app-workBlock',
  templateUrl: './workBlock.component.html',
  styleUrls: ['./workBlock.component.scss']
})
export class WorkBlockComponent {

  public jobTitle: string ='';
  public company: string = '';
  public content: string = '';

}
