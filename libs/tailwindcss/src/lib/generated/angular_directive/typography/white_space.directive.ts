import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { WhiteSpaceType } from '../../tailwind_map_type/typography/white_space_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[whiteSpace]',
    standalone: true
})
export class WhiteSpaceDirective extends BaseTailwindDirective {
  whiteSpace = input<WhiteSpaceType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        WHITE_SPACE: this.whiteSpace(),
      });
    });
  }
}