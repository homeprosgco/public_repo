import {
  Directive,
  ElementRef,
  Renderer2,
  input,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[sgRequiredStyle]',
  standalone: true,
})
export class RequiredStyleDirective implements OnInit, OnDestroy {
  sgRequiredStyle = input<Record<string, string>>();
  private originalStyles: Record<string, string> = {};
  private observer!: MutationObserver;

  constructor(
    private el: ElementRef<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.updateRequiredStyle();

    // Observe for dynamic attribute changes
    this.observer = new MutationObserver(() => {
      this.updateRequiredStyle();
    });

    this.observer.observe(this.el.nativeElement, {
      attributes: true,
      attributeFilter: ['required'],
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private updateRequiredStyle(): void {
    const el = this.el.nativeElement;
    const isRequired = el.required;
    const styles = this.sgRequiredStyle?.() || {};

    if (isRequired) {
      for (const [prop, value] of Object.entries(styles)) {
        this.originalStyles[prop] = el.style.getPropertyValue(prop) || '';
        this.renderer.setStyle(el, prop, value);
      }
    } else {
      for (const [prop, value] of Object.entries(this.originalStyles)) {
        this.renderer.setStyle(el, prop, value || null);
      }
    }
  }
}
