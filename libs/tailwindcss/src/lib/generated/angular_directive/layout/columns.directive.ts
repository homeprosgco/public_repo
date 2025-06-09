import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColumnsType } from '../../tailwind_map_type/layout/columns_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[columns]',
    standalone: true
})
export class ColumnsDirective extends BaseTailwindDirective {
  columns = input<ColumnsType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLUMNS: this.columns(),
      });
    });
  }
}