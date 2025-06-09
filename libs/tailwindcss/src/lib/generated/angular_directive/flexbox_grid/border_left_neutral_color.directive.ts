import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftNeutralColorType } from '../../tailwind_map_type/flexbox_grid/border_left_neutral_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftNeutralColor]',
    standalone: true
})
export class BorderLeftNeutralColorDirective extends BaseTailwindDirective {
  borderLeftNeutralColor = input<BorderLeftNeutralColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_NEUTRAL_COLOR: this.borderLeftNeutralColor(),
      });
    });
  }
}