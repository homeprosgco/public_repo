import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineBlueColorType } from '../../tailwind_map_type/borders/outline_blue_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineBlueColor]',
    standalone: true
})
export class OutlineBlueColorDirective extends BaseTailwindDirective {
  outlineBlueColor = input<OutlineBlueColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_BLUE_COLOR: this.outlineBlueColor(),
      });
    });
  }
}