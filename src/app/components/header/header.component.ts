import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


/**
 * HeaderComponent is a standalone Angular component that represents the header section of the application.
 * The appropriate content to be passed is a button for user actions.
 * 
 * @selector 'app-header'
 * @standalone true
 * @imports [CommonModule]
 * @templateUrl './header.component.html'
 * @styleUrl './header.component.scss'
 * 
 * @property {string} header - The header text to be displayed. This input is required.
 * @property {'xl' | 'lg'} size - The size of the header. It can be either 'xl' (extra large) or 'lg' (large). The default value is 'xl'.
 * 
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input({required: true}) header: string | undefined = '';
  @Input() size: 'xl' | 'lg' = 'xl';
}
