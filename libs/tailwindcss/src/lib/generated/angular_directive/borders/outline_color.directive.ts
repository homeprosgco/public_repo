import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineColorType } from '../../tailwind_map_type/borders/outline_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineColor]',
    standalone: true
})
export class OutlineColorDirective extends BaseTailwindDirective {
  outlineColor = input<OutlineColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_COLOR: this.outlineColor(),
      });
    });
  }
}