import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { UserSelectType } from '../../tailwind_map_type/interactivity/user_select_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[userSelect]',
    standalone: true
})
export class UserSelectDirective extends BaseTailwindDirective {
  userSelect = input<UserSelectType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        USER_SELECT: this.userSelect(),
      });
    });
  }
}