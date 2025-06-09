import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TableLayoutType } from '../../tailwind_map_type/tables/table_layout_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[tableLayout]',
    standalone: true
})
export class TableLayoutDirective extends BaseTailwindDirective {
  tableLayout = input<TableLayoutType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TABLE_LAYOUT: this.tableLayout(),
      });
    });
  }
}