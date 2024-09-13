import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  @Input({required: true}) message = '';
  @Output() clickCancel = new EventEmitter();
  @Output() clickConfirm = new EventEmitter();

  cancel(): void {
    this.clickCancel.emit();
  }

  confirm(): void {
    this.clickConfirm.emit();
  }
}
