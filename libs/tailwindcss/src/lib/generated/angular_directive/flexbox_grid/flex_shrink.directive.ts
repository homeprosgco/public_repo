import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { FlexShrinkType } from '../../tailwind_map_type/flexbox_grid/flex_shrink_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[flexShrink]',
    standalone: true
})
export class FlexShrinkDirective extends BaseTailwindDirective {
  flexShrink = input<FlexShrinkType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        FLEX_SHRINK: this.flexShrink(),
      });
    });
  }
}