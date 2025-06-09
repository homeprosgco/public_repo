import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineCyanColorType } from '../../tailwind_map_type/borders/outline_cyan_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineCyanColor]',
    standalone: true
})
export class OutlineCyanColorDirective extends BaseTailwindDirective {
  outlineCyanColor = input<OutlineCyanColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_CYAN_COLOR: this.outlineCyanColor(),
      });
    });
  }
}