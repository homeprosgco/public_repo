import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeContentContextComponent } from '../../theme_content_context/theme_content_context.component';

@Component({
  imports: [CommonModule, ThemeContentContextComponent],
  selector: 'sg-admin-shell',
  templateUrl: './admin_shell.component.html',
  standalone: true,
})
export class AdminShellComponent {
  leftExpanded = true;
  rightExpanded = false;

  toggleLeft() {
    this.leftExpanded = !this.leftExpanded;
  }

  toggleRight() {
    this.rightExpanded = !this.rightExpanded;
  }
}
