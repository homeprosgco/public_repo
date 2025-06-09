import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { FlexWrapType } from '../../tailwind_map_type/flexbox_grid/flex_wrap_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[flexWrap]',
    standalone: true
})
export class FlexWrapDirective extends BaseTailwindDirective {
  flexWrap = input<FlexWrapType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        FLEX_WRAP: this.flexWrap(),
      });
    });
  }
}