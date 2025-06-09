import {
  Component,
  ContentChild,
  TemplateRef,
  computed,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeBuilderService } from '../website_theme';
import { WebsiteContentRepository } from '../website_content';

/**
 * Provides contextual access to both theme and content data via Angular signals.
 * 
 * This component is meant to wrap a `<ng-template>` and expose the current theme
 * and content objects to it via an implicit context object.
 * 
 * ### Example usage:
 * 
 * ```html
 * <sg-theme-content-context>
 *   <ng-template let-theme="theme" let-content="content">
 *     <div [ngStyle]="{ color: theme.primaryColor }">
 *       {{ content.title }}
 *     </div>
 *   </ng-template>
 * </sg-theme-content-context>
 * ```
 */
@Component({
  selector: 'sg-theme-content-context',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="vm$() as vm">
      <ng-container
        *ngTemplateOutlet="
          templateRef;
          context: { theme: vm.theme, content: vm.content }
        "
      ></ng-container>
    </ng-container>
  `,
})
export class ThemeContentContextComponent {
  /**
   * Injects the theme builder service which holds the reactive theme state.
   */
  private readonly themeBuilder = inject(ThemeBuilderService);

  /**
   * Injects the content repository which exposes site content reactively.
   */
  private readonly contentRepo = inject(WebsiteContentRepository);

  /**
   * Captures the projected <ng-template> to be rendered with context.
   */
  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;

  /**
   * Reactive signal of current theme state.
   */
  private readonly themeSignal = this.themeBuilder.themeState;

  /**
   * Reactive signal of current website content.
   */
  private readonly contentSignal = this.contentRepo.content;

  /**
   * Combines theme and content signals into a single view model signal.
   */
  readonly vm$ = computed(() => ({
    theme: this.themeSignal(),
    content: this.contentSignal(),
  }));
}
