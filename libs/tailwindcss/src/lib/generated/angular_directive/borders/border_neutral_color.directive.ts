import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderNeutralColorType } from '../../tailwind_map_type/borders/border_neutral_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderNeutralColor]',
    standalone: true
})
export class BorderNeutralColorDirective extends BaseTailwindDirective {
  borderNeutralColor = input<BorderNeutralColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_NEUTRAL_COLOR: this.borderNeutralColor(),
      });
    });
  }
}