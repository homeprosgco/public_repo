import {
  Directive,
  ElementRef,
  Renderer2,
  input,
  OnInit,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[sgDisabledStyle]',
  standalone: true,
})
export class DisabledStyleDirective implements OnInit, OnDestroy {
  sgDisabledStyle = input<Record<string, string>>();
  private observer!: MutationObserver;
  private originalStyles: Record<string, string> = {};

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.applyIfDisabled();

    this.observer = new MutationObserver(() => {
      this.applyIfDisabled();
    });

    this.observer.observe(this.el.nativeElement, {
      attributes: true,
      attributeFilter: ['disabled']
    });
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

  private applyIfDisabled(): void {
    const el = this.el.nativeElement as HTMLInputElement | HTMLButtonElement;
    const styles = this.sgDisabledStyle?.() || {};

    if (el.disabled) {
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
