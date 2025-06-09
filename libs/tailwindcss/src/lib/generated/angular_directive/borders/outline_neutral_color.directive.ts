import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineNeutralColorType } from '../../tailwind_map_type/borders/outline_neutral_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineNeutralColor]',
    standalone: true
})
export class OutlineNeutralColorDirective extends BaseTailwindDirective {
  outlineNeutralColor = input<OutlineNeutralColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_NEUTRAL_COLOR: this.outlineNeutralColor(),
      });
    });
  }
}