import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { FlexGrowType } from '../../tailwind_map_type/flexbox_grid/flex_grow_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[flexGrow]',
    standalone: true
})
export class FlexGrowDirective extends BaseTailwindDirective {
  flexGrow = input<FlexGrowType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        FLEX_GROW: this.flexGrow(),
      });
    });
  }
}