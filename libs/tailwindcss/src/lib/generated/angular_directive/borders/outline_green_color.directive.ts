import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineGreenColorType } from '../../tailwind_map_type/borders/outline_green_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineGreenColor]',
    standalone: true
})
export class OutlineGreenColorDirective extends BaseTailwindDirective {
  outlineGreenColor = input<OutlineGreenColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_GREEN_COLOR: this.outlineGreenColor(),
      });
    });
  }
}