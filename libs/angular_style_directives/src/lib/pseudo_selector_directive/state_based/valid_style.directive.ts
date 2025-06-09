import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[sgValidStyle]',
  standalone: true,
})
export class ValidStyleDirective implements OnInit {
  sgValidStyle = input<Record<string, string>>();
  private applied = false;

  constructor(
    private el: ElementRef<HTMLInputElement | HTMLTextAreaElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.applyIfValid(); // initial
  }

  @HostListener('input')
  @HostListener('change')
  onInputChange(): void {
    this.applyIfValid();
  }

  private applyIfValid(): void {
    const el = this.el.nativeElement;
    const styles = this.sgValidStyle?.() || {};

    if (el.checkValidity()) {
      for (const [prop, value] of Object.entries(styles)) {
        this.renderer.setStyle(el, prop, value);
      }
      this.applied = true;
    } else if (this.applied) {
      // Optional: remove styles if invalid again
      for (const prop of Object.keys(styles)) {
        this.renderer.removeStyle(el, prop);
      }
      this.applied = false;
    }
  }
}
