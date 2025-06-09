import {
  Directive,
  input,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[sgHoverStyle]',
  standalone: true,
})
export class HoverStyleDirective {
  sgHoverStyle = input<Record<string, string>>();
  private originalStyles: Record<string, string> = {};
  private isHovered = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.isHovered) return;
    this.isHovered = true;

    const styles = this.sgHoverStyle?.() || {};
    for (const [prop, value] of Object.entries(styles)) {
      this.originalStyles[prop] =
        this.el.nativeElement.style.getPropertyValue(prop) || '';
      this.renderer.setStyle(this.el.nativeElement, prop, value);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (!this.isHovered) return;
    this.isHovered = false;

    for (const prop of Object.keys(this.originalStyles)) {
      this.renderer.setStyle(
        this.el.nativeElement,
        prop,
        this.originalStyles[prop] || null
      );
    }
  }
}
