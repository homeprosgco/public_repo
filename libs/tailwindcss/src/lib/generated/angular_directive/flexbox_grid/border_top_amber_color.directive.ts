import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopAmberColorType } from '../../tailwind_map_type/flexbox_grid/border_top_amber_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopAmberColor]',
    standalone: true
})
export class BorderTopAmberColorDirective extends BaseTailwindDirective {
  borderTopAmberColor = input<BorderTopAmberColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_AMBER_COLOR: this.borderTopAmberColor(),
      });
    });
  }
}