import {
  Directive,
  ElementRef,
  Renderer2,
  input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[sgVisitedStyle]',
  standalone: true,
})
export class VisitedStyleDirective implements OnInit {
  sgVisitedStyle = input<Record<string, string>>();
  private hasBeenVisited = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;
    if (!element.hasAttribute('tabindex')) {
      this.renderer.setAttribute(element, 'tabindex', '0');
    }
    if (!element.hasAttribute('role')) {
      this.renderer.setAttribute(element, 'role', 'link');
    }

    element.addEventListener('click', () => {
      this.applyVisitedStyle();
    });
  }

  private applyVisitedStyle(): void {
    if (this.hasBeenVisited) return;

    const styles = this.sgVisitedStyle?.() || {};
    for (const [prop, value] of Object.entries(styles)) {
      this.renderer.setStyle(this.el.nativeElement, prop, value);
    }

    this.hasBeenVisited = true;
  }
}
