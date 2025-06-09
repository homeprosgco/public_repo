import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { FlexBasisType } from '../../tailwind_map_type/flexbox_grid/flex_basis_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[flexBasis]',
    standalone: true
})
export class FlexBasisDirective extends BaseTailwindDirective {
  flexBasis = input<FlexBasisType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        FLEX_BASIS: this.flexBasis(),
      });
    });
  }
}