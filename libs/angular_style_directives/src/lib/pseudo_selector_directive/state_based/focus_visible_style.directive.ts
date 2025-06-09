import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  input,
  OnInit,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[sgFocusVisibleStyle]',
  standalone: true,
})
export class FocusVisibleStyleDirective implements OnInit, OnDestroy {
  sgFocusVisibleStyle = input<Record<string, string>>();
  private originalStyles: Record<string, string> = {};
  private isKeyboardInteraction = false;

  private removeKeydown!: () => void;
  private removeMousedown!: () => void;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    const keydown = () => (this.isKeyboardInteraction = true);
    const mousedown = () => (this.isKeyboardInteraction = false);

    document.addEventListener('keydown', keydown);
    document.addEventListener('mousedown', mousedown);

    this.removeKeydown = () => document.removeEventListener('keydown', keydown);
    this.removeMousedown = () => document.removeEventListener('mousedown', mousedown);
  }

  ngOnInit(): void {
    const el = this.el.nativeElement;
    if (
      !el.hasAttribute('tabindex') &&
      !['input', 'select', 'textarea', 'button', 'a'].includes(el.tagName.toLowerCase())
    ) {
      this.renderer.setAttribute(el, 'tabindex', '0');
    }
  }

  ngOnDestroy(): void {
    this.removeKeydown?.();
    this.removeMousedown?.();
  }

  @HostListener('focus')
  onFocus(): void {
    if (!this.isKeyboardInteraction) return;
    const styles = this.sgFocusVisibleStyle?.() || {};
    for (const [prop, value] of Object.entries(styles)) {
      this.originalStyles[prop] =
        this.el.nativeElement.style.getPropertyValue(prop) || '';
      this.renderer.setStyle(this.el.nativeElement, prop, value);
    }
  }

  @HostListener('blur')
  onBlur(): void {
    for (const [prop, original] of Object.entries(this.originalStyles)) {
      this.renderer.setStyle(this.el.nativeElement, prop, original || null);
    }
  }
}
