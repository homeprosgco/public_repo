import { WritableSignal, signal, Directive, ElementRef, Renderer2, effect } from '@angular/core';
import { generateTailwindClass } from '../generate_tailwind_class';

/**
 * Abstract directive for dynamically applying Tailwind classes
 * based on Angular signals.
 */
@Directive({
  standalone: true,
})
export abstract class BaseTailwindDirective {
  /**
   * Stores the computed class string for the element.
   */
  protected classSignal: WritableSignal<string> = signal('');

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Automatically apply class updates when the signal changes
    effect(() => {
      const classList = this.classSignal();
      // console.log('Updated classes:', classList);

      // Ensure the new class list is merged with existing classes
      const existingClasses = this.el.nativeElement.getAttribute('class') || '';
      const mergedClasses = [...new Set([...existingClasses.split(' '), ...classList.split(' ')])]
        .filter(Boolean)
        .join(' ');

      // Remove previous classes and apply the new ones
      this.renderer.setAttribute(this.el.nativeElement, 'class', mergedClasses);
    });
  }

  /**
   * Internal function to update the class signal.
   * @param classes Object where keys are the Tailwind map type, and values are the color values.
   */
  protected updateClasses<T>(classes: Record<string, T | undefined>) {
    // console.log('Updating Tailwind classes:', classes);
    const classList = Object.entries(classes)
      .map(([mapType, value]) =>
        value ? generateTailwindClass(value, mapType) : ''
      )
      .filter(Boolean)
      .join(' ');

    console.log(classList)

    this.classSignal.set(classList);
  }
}
