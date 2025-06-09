import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BoxDecorationBreakType } from '../../tailwind_map_type/layout/box_decoration_break_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[boxDecorationBreak]',
    standalone: true
})
export class BoxDecorationBreakDirective extends BaseTailwindDirective {
  boxDecorationBreak = input<BoxDecorationBreakType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BOX_DECORATION_BREAK: this.boxDecorationBreak(),
      });
    });
  }
}