import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";


@Component({
  selector: 'ngCl-button',
  templateUrl: 'button.component.html',
  imports:[CommonModule],
  standalone:true
})
export class NgClButtonComponent {
  @Input() label: string | undefined;

}

