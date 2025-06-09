import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeContentContextComponent } from '../../theme_content_context/theme_content_context.component';

@Component({
  standalone: true,
  selector: 'sg-website-shell',
  imports: [CommonModule, RouterOutlet, ThemeContentContextComponent],
  templateUrl: './website-shell.component.html',
})
export class WebsiteShellComponent {}
