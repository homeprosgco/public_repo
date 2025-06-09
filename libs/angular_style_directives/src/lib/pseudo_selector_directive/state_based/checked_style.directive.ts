import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[sgCheckedStyle]',
  standalone: true
})
export class CheckedStyleDirective implements OnInit {
  sgCheckedStyle = input<Record<string, string>>();
  private originalStyles: Record<string, string> = {};

  constructor(
    private el: ElementRef<HTMLInputElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const inputEl = this.el.nativeElement;
    if (inputEl.checked) {
      this.applyStyles();
    }
  }

  @HostListener('change')
  onChange(): void {
    const inputEl = this.el.nativeElement;
    if (!inputEl || !['checkbox', 'radio'].includes(inputEl.type)) return;

    inputEl.checked ? this.applyStyles() : this.resetStyles();
  }

  private applyStyles(): void {
    const inputEl = this.el.nativeElement;
    const styles = this.sgCheckedStyle?.() || {};

    for (const [prop, value] of Object.entries(styles)) {
      this.originalStyles[prop] = inputEl.style.getPropertyValue(prop) || '';
      this.renderer.setStyle(inputEl, prop, value);
    }
  }

  private resetStyles(): void {
    const inputEl = this.el.nativeElement;
    for (const [prop, value] of Object.entries(this.originalStyles)) {
      this.renderer.setStyle(inputEl, prop, value || null);
    }
  }
}
