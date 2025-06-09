import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlinePurpleColorType } from '../../tailwind_map_type/borders/outline_purple_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlinePurpleColor]',
    standalone: true
})
export class OutlinePurpleColorDirective extends BaseTailwindDirective {
  outlinePurpleColor = input<OutlinePurpleColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_PURPLE_COLOR: this.outlinePurpleColor(),
      });
    });
  }
}