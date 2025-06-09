import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[sgFocusStyle]',
  standalone: true,
})
export class FocusStyleDirective implements OnInit {
  sgFocusStyle = input<Record<string, string>>();
  private originalStyles: Record<string, string> = {};
  private isFocused = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const el = this.el.nativeElement;
    if (
      !el.hasAttribute('tabindex') &&
      !['input', 'select', 'textarea', 'button', 'a'].includes(el.tagName.toLowerCase())
    ) {
      this.renderer.setAttribute(el, 'tabindex', '0');
    }
  }

  @HostListener('focus')
  onFocus(): void {
    if (this.isFocused) return;
    this.isFocused = true;

    const styles = this.sgFocusStyle?.() || {};
    for (const [prop, value] of Object.entries(styles)) {
      this.originalStyles[prop] =
        this.el.nativeElement.style.getPropertyValue(prop) || '';
      this.renderer.setStyle(this.el.nativeElement, prop, value);
    }
  }

  @HostListener('blur')
  onBlur(): void {
    if (!this.isFocused) return;
    this.isFocused = false;

    for (const [prop, original] of Object.entries(this.originalStyles)) {
      this.renderer.setStyle(this.el.nativeElement, prop, original || null);
    }
  }
}
