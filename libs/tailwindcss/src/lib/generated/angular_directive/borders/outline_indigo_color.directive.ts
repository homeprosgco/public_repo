import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineIndigoColorType } from '../../tailwind_map_type/borders/outline_indigo_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineIndigoColor]',
    standalone: true
})
export class OutlineIndigoColorDirective extends BaseTailwindDirective {
  outlineIndigoColor = input<OutlineIndigoColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_INDIGO_COLOR: this.outlineIndigoColor(),
      });
    });
  }
}