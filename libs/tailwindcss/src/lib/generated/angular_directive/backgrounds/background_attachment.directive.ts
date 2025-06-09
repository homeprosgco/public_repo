import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundAttachmentType } from '../../tailwind_map_type/backgrounds/background_attachment_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundAttachment]',
    standalone: true
})
export class BackgroundAttachmentDirective extends BaseTailwindDirective {
  backgroundAttachment = input<BackgroundAttachmentType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_ATTACHMENT: this.backgroundAttachment(),
      });
    });
  }
}