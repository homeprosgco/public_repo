import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineEmeraldColorType } from '../../tailwind_map_type/borders/outline_emerald_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineEmeraldColor]',
    standalone: true
})
export class OutlineEmeraldColorDirective extends BaseTailwindDirective {
  outlineEmeraldColor = input<OutlineEmeraldColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_EMERALD_COLOR: this.outlineEmeraldColor(),
      });
    });
  }
}