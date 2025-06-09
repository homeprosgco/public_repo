import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentAmberColorType } from '../../tailwind_map_type/interactivity/accent_amber_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentAmberColor]',
    standalone: true
})
export class AccentAmberColorDirective extends BaseTailwindDirective {
  accentAmberColor = input<AccentAmberColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_AMBER_COLOR: this.accentAmberColor(),
      });
    });
  }
}