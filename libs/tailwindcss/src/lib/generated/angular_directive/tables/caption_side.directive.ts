import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaptionSideType } from '../../tailwind_map_type/tables/caption_side_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[captionSide]',
    standalone: true
})
export class CaptionSideDirective extends BaseTailwindDirective {
  captionSide = input<CaptionSideType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CAPTION_SIDE: this.captionSide(),
      });
    });
  }
}