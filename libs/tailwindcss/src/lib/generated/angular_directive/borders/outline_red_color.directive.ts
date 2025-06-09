import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineRedColorType } from '../../tailwind_map_type/borders/outline_red_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineRedColor]',
    standalone: true
})
export class OutlineRedColorDirective extends BaseTailwindDirective {
  outlineRedColor = input<OutlineRedColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_RED_COLOR: this.outlineRedColor(),
      });
    });
  }
}