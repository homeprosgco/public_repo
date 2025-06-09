import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineAmberColorType } from '../../tailwind_map_type/borders/outline_amber_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineAmberColor]',
    standalone: true
})
export class OutlineAmberColorDirective extends BaseTailwindDirective {
  outlineAmberColor = input<OutlineAmberColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_AMBER_COLOR: this.outlineAmberColor(),
      });
    });
  }
}