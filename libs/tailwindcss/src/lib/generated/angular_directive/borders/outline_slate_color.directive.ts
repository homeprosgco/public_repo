import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineSlateColorType } from '../../tailwind_map_type/borders/outline_slate_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineSlateColor]',
    standalone: true
})
export class OutlineSlateColorDirective extends BaseTailwindDirective {
  outlineSlateColor = input<OutlineSlateColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_SLATE_COLOR: this.outlineSlateColor(),
      });
    });
  }
}