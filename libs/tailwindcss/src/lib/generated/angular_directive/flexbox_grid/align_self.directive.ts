import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AlignSelfType } from '../../tailwind_map_type/flexbox_grid/align_self_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[alignSelf]',
    standalone: true
})
export class AlignSelfDirective extends BaseTailwindDirective {
  alignSelf = input<AlignSelfType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ALIGN_SELF: this.alignSelf(),
      });
    });
  }
}