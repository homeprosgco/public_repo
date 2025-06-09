import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackdropSepiaType } from '../../tailwind_map_type/filters/backdrop_sepia_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backdropSepia]',
    standalone: true
})
export class BackdropSepiaDirective extends BaseTailwindDirective {
  backdropSepia = input<BackdropSepiaType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKDROP_SEPIA: this.backdropSepia(),
      });
    });
  }
}