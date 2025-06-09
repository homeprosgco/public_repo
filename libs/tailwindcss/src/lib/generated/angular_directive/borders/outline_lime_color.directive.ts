import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineLimeColorType } from '../../tailwind_map_type/borders/outline_lime_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineLimeColor]',
    standalone: true
})
export class OutlineLimeColorDirective extends BaseTailwindDirective {
  outlineLimeColor = input<OutlineLimeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_LIME_COLOR: this.outlineLimeColor(),
      });
    });
  }
}