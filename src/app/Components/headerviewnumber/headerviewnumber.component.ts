import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-headerviewnumber',
  standalone: true,
  imports: [],
  templateUrl: './headerviewnumber.component.html',
  styleUrl: './headerviewnumber.component.scss'
})
export class HeaderviewnumberComponent {

  @Output() closeEvent = new EventEmitter<void>();

  closeView() {
    this.closeEvent.emit(); 
  }
}
