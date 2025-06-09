import {
  Directive,
  ElementRef,
  Renderer2,
  input,
  OnInit,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[sgInvalidStyle]',
  standalone: true,
})
export class InvalidStyleDirective implements OnInit {
  sgInvalidStyle = input<Record<string, string>>();
  private originalStyles: Record<string, string> = {};
  private applied = false;

  constructor(
    private el: ElementRef<HTMLInputElement | HTMLTextAreaElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.updateInvalidStyles();
  }

  @HostListener('input')
  @HostListener('change')
  onInput(): void {
    this.updateInvalidStyles();
  }

  private updateInvalidStyles(): void {
    const inputEl = this.el.nativeElement;
    const styles = this.sgInvalidStyle?.() || {};

    if (!inputEl.checkValidity()) {
      // Apply invalid styles
      for (const [prop, value] of Object.entries(styles)) {
        this.originalStyles[prop] = inputEl.style.getPropertyValue(prop) || '';
        this.renderer.setStyle(inputEl, prop, value);
      }
      this.applied = true;
    } else if (this.applied) {
      // Revert to original styles
      for (const [prop, original] of Object.entries(this.originalStyles)) {
        this.renderer.setStyle(inputEl, prop, original || null);
      }
      this.applied = false;
    }
  }
}
