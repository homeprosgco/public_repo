import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineStyleType } from '../../tailwind_map_type/borders/outline_style_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineStyle]',
    standalone: true
})
export class OutlineStyleDirective extends BaseTailwindDirective {
  outlineStyle = input<OutlineStyleType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_STYLE: this.outlineStyle(),
      });
    });
  }
}