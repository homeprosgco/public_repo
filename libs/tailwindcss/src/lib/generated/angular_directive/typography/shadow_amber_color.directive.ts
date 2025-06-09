import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowAmberColorType } from '../../tailwind_map_type/typography/shadow_amber_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowAmberColor]',
    standalone: true
})
export class ShadowAmberColorDirective extends BaseTailwindDirective {
  shadowAmberColor = input<ShadowAmberColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_AMBER_COLOR: this.shadowAmberColor(),
      });
    });
  }
}