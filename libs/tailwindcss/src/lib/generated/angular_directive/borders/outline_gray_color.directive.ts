import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineGrayColorType } from '../../tailwind_map_type/borders/outline_gray_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineGrayColor]',
    standalone: true
})
export class OutlineGrayColorDirective extends BaseTailwindDirective {
  outlineGrayColor = input<OutlineGrayColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_GRAY_COLOR: this.outlineGrayColor(),
      });
    });
  }
}