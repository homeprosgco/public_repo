import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeContentContextComponent } from '../../theme_content_context/theme_content_context.component';

@Component({
  imports: [CommonModule, ThemeContentContextComponent],
  selector: 'app-hadiman-template',
  templateUrl: './hadiman.component.html',
})
export class HadimanComponent {}
