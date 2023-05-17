import { Component } from '@angular/core';
import { ModalService } from '../_services/modal.service';
@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css'],
})
export class Section2Component {
  bodyText = 'This text can be updated in modal 1';
  constructor(protected modalService: ModalService) { }
}
