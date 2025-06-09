import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretSlateColorType } from '../../tailwind_map_type/interactivity/caret_slate_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretSlateColor]',
    standalone: true
})
export class CaretSlateColorDirective extends BaseTailwindDirective {
  caretSlateColor = input<CaretSlateColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_SLATE_COLOR: this.caretSlateColor(),
      });
    });
  }
}