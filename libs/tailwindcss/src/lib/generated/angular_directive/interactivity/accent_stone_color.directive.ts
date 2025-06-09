import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentStoneColorType } from '../../tailwind_map_type/interactivity/accent_stone_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentStoneColor]',
    standalone: true
})
export class AccentStoneColorDirective extends BaseTailwindDirective {
  accentStoneColor = input<AccentStoneColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_STONE_COLOR: this.accentStoneColor(),
      });
    });
  }
}