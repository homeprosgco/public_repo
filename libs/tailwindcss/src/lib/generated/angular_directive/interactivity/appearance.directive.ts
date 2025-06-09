import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AppearanceType } from '../../tailwind_map_type/interactivity/appearance_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[appearance]',
    standalone: true
})
export class AppearanceDirective extends BaseTailwindDirective {
  appearance = input<AppearanceType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        APPEARANCE: this.appearance(),
      });
    });
  }
}