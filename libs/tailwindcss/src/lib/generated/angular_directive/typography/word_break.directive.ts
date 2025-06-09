import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { WordBreakType } from '../../tailwind_map_type/typography/word_break_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[wordBreak]',
    standalone: true
})
export class WordBreakDirective extends BaseTailwindDirective {
  wordBreak = input<WordBreakType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        WORD_BREAK: this.wordBreak(),
      });
    });
  }
}