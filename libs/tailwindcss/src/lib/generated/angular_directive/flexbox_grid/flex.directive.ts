import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { FlexType } from '../../tailwind_map_type/flexbox_grid/flex_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[flex]',
    standalone: true
})
export class FlexDirective extends BaseTailwindDirective {
  flex = input<FlexType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        FLEX: this.flex(),
      });
    });
  }
}