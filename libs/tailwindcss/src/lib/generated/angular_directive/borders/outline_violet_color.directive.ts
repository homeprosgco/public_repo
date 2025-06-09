import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineVioletColorType } from '../../tailwind_map_type/borders/outline_violet_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineVioletColor]',
    standalone: true
})
export class OutlineVioletColorDirective extends BaseTailwindDirective {
  outlineVioletColor = input<OutlineVioletColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_VIOLET_COLOR: this.outlineVioletColor(),
      });
    });
  }
}