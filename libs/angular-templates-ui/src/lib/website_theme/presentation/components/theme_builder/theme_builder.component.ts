import { Component, computed, inject } from '@angular/core';
import { ThemeBuilderService } from '../../../domain';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'app-theme-builder',
  templateUrl: './theme_builder.component.html',
  styleUrls: ['./theme_builder.component.scss'],
})
export class ThemeBuilderComponent {
  private themeBuilderService = inject(ThemeBuilderService);
  readonly computedTheme = computed(() => this.themeBuilderService.themeState());
}
