import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CursorType } from '../../tailwind_map_type/interactivity/cursor_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[cursor]',
    standalone: true
})
export class CursorDirective extends BaseTailwindDirective {
  cursor = input<CursorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CURSOR: this.cursor(),
      });
    });
  }
}