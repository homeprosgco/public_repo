import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineOrangeColorType } from '../../tailwind_map_type/borders/outline_orange_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineOrangeColor]',
    standalone: true
})
export class OutlineOrangeColorDirective extends BaseTailwindDirective {
  outlineOrangeColor = input<OutlineOrangeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_ORANGE_COLOR: this.outlineOrangeColor(),
      });
    });
  }
}