import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TouchActionType } from '../../tailwind_map_type/interactivity/touch_action_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[touchAction]',
    standalone: true
})
export class TouchActionDirective extends BaseTailwindDirective {
  touchAction = input<TouchActionType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TOUCH_ACTION: this.touchAction(),
      });
    });
  }
}