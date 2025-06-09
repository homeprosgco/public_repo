import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineRoseColorType } from '../../tailwind_map_type/borders/outline_rose_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineRoseColor]',
    standalone: true
})
export class OutlineRoseColorDirective extends BaseTailwindDirective {
  outlineRoseColor = input<OutlineRoseColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_ROSE_COLOR: this.outlineRoseColor(),
      });
    });
  }
}