import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightAmberColorType } from '../../tailwind_map_type/flexbox_grid/border_right_amber_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightAmberColor]',
    standalone: true
})
export class BorderRightAmberColorDirective extends BaseTailwindDirective {
  borderRightAmberColor = input<BorderRightAmberColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_AMBER_COLOR: this.borderRightAmberColor(),
      });
    });
  }
}