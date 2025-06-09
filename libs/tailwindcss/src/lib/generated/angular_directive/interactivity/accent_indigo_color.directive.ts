import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentIndigoColorType } from '../../tailwind_map_type/interactivity/accent_indigo_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentIndigoColor]',
    standalone: true
})
export class AccentIndigoColorDirective extends BaseTailwindDirective {
  accentIndigoColor = input<AccentIndigoColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_INDIGO_COLOR: this.accentIndigoColor(),
      });
    });
  }
}