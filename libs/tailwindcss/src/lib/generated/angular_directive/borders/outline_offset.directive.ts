import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineOffsetType } from '../../tailwind_map_type/borders/outline_offset_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineOffset]',
    standalone: true
})
export class OutlineOffsetDirective extends BaseTailwindDirective {
  outlineOffset = input<OutlineOffsetType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_OFFSET: this.outlineOffset(),
      });
    });
  }
}