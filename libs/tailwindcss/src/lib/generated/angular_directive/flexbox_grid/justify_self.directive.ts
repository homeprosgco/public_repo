import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { JustifySelfType } from '../../tailwind_map_type/flexbox_grid/justify_self_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[justifySelf]',
    standalone: true
})
export class JustifySelfDirective extends BaseTailwindDirective {
  justifySelf = input<JustifySelfType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        JUSTIFY_SELF: this.justifySelf(),
      });
    });
  }
}