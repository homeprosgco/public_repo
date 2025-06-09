import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineWidthType } from '../../tailwind_map_type/borders/outline_width_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineWidth]',
    standalone: true
})
export class OutlineWidthDirective extends BaseTailwindDirective {
  outlineWidth = input<OutlineWidthType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_WIDTH: this.outlineWidth(),
      });
    });
  }
}