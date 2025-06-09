import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopNeutralColorType } from '../../tailwind_map_type/flexbox_grid/border_top_neutral_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopNeutralColor]',
    standalone: true
})
export class BorderTopNeutralColorDirective extends BaseTailwindDirective {
  borderTopNeutralColor = input<BorderTopNeutralColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_NEUTRAL_COLOR: this.borderTopNeutralColor(),
      });
    });
  }
}