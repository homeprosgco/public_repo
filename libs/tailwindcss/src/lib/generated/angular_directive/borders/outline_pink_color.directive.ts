import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlinePinkColorType } from '../../tailwind_map_type/borders/outline_pink_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlinePinkColor]',
    standalone: true
})
export class OutlinePinkColorDirective extends BaseTailwindDirective {
  outlinePinkColor = input<OutlinePinkColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_PINK_COLOR: this.outlinePinkColor(),
      });
    });
  }
}