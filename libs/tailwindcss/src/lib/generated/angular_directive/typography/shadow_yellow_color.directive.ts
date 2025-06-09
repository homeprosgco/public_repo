import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowYellowColorType } from '../../tailwind_map_type/typography/shadow_yellow_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowYellowColor]',
    standalone: true
})
export class ShadowYellowColorDirective extends BaseTailwindDirective {
  shadowYellowColor = input<ShadowYellowColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_YELLOW_COLOR: this.shadowYellowColor(),
      });
    });
  }
}