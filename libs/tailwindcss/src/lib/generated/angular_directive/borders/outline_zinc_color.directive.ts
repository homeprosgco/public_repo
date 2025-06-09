import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineZincColorType } from '../../tailwind_map_type/borders/outline_zinc_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineZincColor]',
    standalone: true
})
export class OutlineZincColorDirective extends BaseTailwindDirective {
  outlineZincColor = input<OutlineZincColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_ZINC_COLOR: this.outlineZincColor(),
      });
    });
  }
}