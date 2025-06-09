import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { FlexDirectionType } from '../../tailwind_map_type/flexbox_grid/flex_direction_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[flexDirection]',
    standalone: true
})
export class FlexDirectionDirective extends BaseTailwindDirective {
  flexDirection = input<FlexDirectionType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        FLEX_DIRECTION: this.flexDirection(),
      });
    });
  }
}