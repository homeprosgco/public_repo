import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftAmberColorType } from '../../tailwind_map_type/flexbox_grid/border_left_amber_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftAmberColor]',
    standalone: true
})
export class BorderLeftAmberColorDirective extends BaseTailwindDirective {
  borderLeftAmberColor = input<BorderLeftAmberColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_AMBER_COLOR: this.borderLeftAmberColor(),
      });
    });
  }
}