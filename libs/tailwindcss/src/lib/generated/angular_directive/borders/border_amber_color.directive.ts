import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderAmberColorType } from '../../tailwind_map_type/borders/border_amber_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderAmberColor]',
    standalone: true
})
export class BorderAmberColorDirective extends BaseTailwindDirective {
  borderAmberColor = input<BorderAmberColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_AMBER_COLOR: this.borderAmberColor(),
      });
    });
  }
}