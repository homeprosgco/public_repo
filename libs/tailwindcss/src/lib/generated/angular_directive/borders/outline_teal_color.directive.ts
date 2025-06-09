import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineTealColorType } from '../../tailwind_map_type/borders/outline_teal_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineTealColor]',
    standalone: true
})
export class OutlineTealColorDirective extends BaseTailwindDirective {
  outlineTealColor = input<OutlineTealColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_TEAL_COLOR: this.outlineTealColor(),
      });
    });
  }
}