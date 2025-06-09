import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  input,
} from '@angular/core';

@Directive({
  selector: '[sgActiveStyle]',
  standalone: true,
})
export class ActiveStyleDirective {
  sgActiveStyle = input<Record<string, string>>();
  private originalStyles: Record<string, string> = {};
  private isActive = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}


  @HostListener('mousedown')
  onMouseDown(): void {
    if (this.isActive) return;
    this.isActive = true;

    const styles = this.sgActiveStyle?.() || {};
    for (const [prop, value] of Object.entries(styles)) {
      this.originalStyles[prop] =
        this.el.nativeElement.style.getPropertyValue(prop) || '';
      this.renderer.setStyle(this.el.nativeElement, prop, value);
    }
  }

  @HostListener('mouseup')
  @HostListener('mouseleave')
  onMouseUp(): void {
    if (!this.isActive) return;
    this.isActive = false;

    for (const [prop, value] of Object.entries(this.originalStyles)) {
      this.renderer.setStyle(this.el.nativeElement, prop, value || null);
    }
  }
}
