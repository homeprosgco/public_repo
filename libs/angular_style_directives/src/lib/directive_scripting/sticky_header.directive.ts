import {
    Directive,
    ElementRef,
    HostListener,
    Renderer2,
    OnInit
  } from '@angular/core';
  
  @Directive({
    selector: '[sgStickyHeader]'
  })
  export class StickyHeaderDirective implements OnInit {
    private scrollThreshold = 245;
    private isSticky = false;
  
    constructor(private el: ElementRef, private renderer: Renderer2) {}
  
    ngOnInit(): void {
      this.setBaseStyles(); // basic structure styles
    }
  
    @HostListener('window:scroll', [])
    onWindowScroll(): void {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
  
      if (scrollTop >= this.scrollThreshold && !this.isSticky) {
        this.applyStickyStyles();
      } else if (scrollTop < this.scrollThreshold && this.isSticky) {
        this.applyFadeOut();
      }
    }
  
    private setBaseStyles(): void {
      this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
      this.renderer.setStyle(this.el.nativeElement, 'left', '0');
      this.renderer.setStyle(this.el.nativeElement, 'top', '0');
      this.renderer.setStyle(this.el.nativeElement, 'z-index', '99999');
    }
  
    private applyStickyStyles(): void {
      this.isSticky = true;
  
      // Reset animation in case fadeOutUp was recently applied
      this.renderer.removeStyle(this.el.nativeElement, 'animation');
  
      // Apply fadeInDown animation
      this.renderer.setStyle(this.el.nativeElement, 'animation', 'fadeInDown 300ms ease-in-out');
  
      // Sticky styles
      this.renderer.setStyle(this.el.nativeElement, 'background', '#ffffff none repeat scroll 0 0');
      this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 5px 0 rgba(0, 0, 0, 0.2)');
      this.renderer.setStyle(this.el.nativeElement, 'position', 'fixed');
    }
  
    private applyFadeOut(): void {
      this.isSticky = false;
  
      // Apply fadeOutUp animation
      this.renderer.setStyle(this.el.nativeElement, 'animation', 'fadeOutUp 500ms ease-in');
  
      // After animation ends (300ms), remove sticky styles
      setTimeout(() => {
        this.removeStickyStyles();
      }, 300);
    }
  
    private removeStickyStyles(): void {
      this.renderer.removeStyle(this.el.nativeElement, 'animation');
      this.renderer.removeStyle(this.el.nativeElement, 'background');
      this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
      this.renderer.removeStyle(this.el.nativeElement, 'position');
    }
  }
  