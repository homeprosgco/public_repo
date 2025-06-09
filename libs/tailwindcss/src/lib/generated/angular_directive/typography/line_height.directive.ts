import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { LineHeightType } from '../../tailwind_map_type/typography/line_height_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[lineHeight]',
    standalone: true
})
export class LineHeightDirective extends BaseTailwindDirective {
  lineHeight = input<LineHeightType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        LINE_HEIGHT: this.lineHeight(),
      });
    });
  }
}