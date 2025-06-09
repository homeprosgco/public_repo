import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AutoColsType } from '../../tailwind_map_type/flexbox_grid/auto_cols_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[autoCols]',
    standalone: true
})
export class AutoColsDirective extends BaseTailwindDirective {
  autoCols = input<AutoColsType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        AUTO_COLS: this.autoCols(),
      });
    });
  }
}