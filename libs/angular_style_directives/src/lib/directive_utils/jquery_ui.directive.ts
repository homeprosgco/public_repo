import { Directive, ElementRef, AfterViewInit } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[sgJqueryUi]',
})
export class JqueryUiDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.initJqueryUI();
  }

  private initJqueryUI(): void {
    const $el = $(this.el.nativeElement);

    // MeanMenu (scoped)
    $el.find('.main-menu nav').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: '991',
    });

    // Slider
    $el.find('.slider-active').owlCarousel({
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        767: { items: 1 },
        1000: { items: 1 },
      },
    });

    // // Counter
    // $el.find('.counter').counterUp({
    //   delay: 10,
    //   time: 1000,
    // });

    // // Testimonial
    // $el.find('.testimonial-active').owlCarousel({
    //   loop: true,
    //   nav: false,
    //   dots: true,
    //   margin: 30,
    //   responsive: {
    //     0: { items: 1 },
    //     600: { items: 1 },
    //     992: { items: 2 },
    //     1200: { items: 3 },
    //   },
    // });

    // // Testimonial 3
    // $el.find('.testimonial-3-active').owlCarousel({
    //     loop: true,
    //     nav: false,
    //     dots: false,
    //     autoplay: true,
    //     responsive: {
    //       0: { items: 1 },
    //       600: { items: 1 },
    //       1000: { items: 1 },
    //     },
    //   });

    // // Isotope filtering
    // $el.find('.grid').imagesLoaded(() => {
    //   const $grid = $el.find('.grid').isotope({
    //     itemSelector: '.grid-item',
    //     percentPosition: true,
    //     masonry: {
    //       columnWidth: '.grid-item',
    //     },
    //   });

    //   $el.find('.portfolio-area').on('click', 'button', (event: any) => {
    //     const filterValue = $(event.currentTarget).attr('data-filter');
    //     $grid.isotope({ filter: filterValue });
    //   });
    // });

    // $el
    //   .find('.portfolio-menu button')
    //   .on(
    //     'click',
    //     (event: { currentTarget: any; preventDefault: () => void }) => {
    //       const $button = $(event.currentTarget);
    //       $button.siblings('.active').removeClass('active');
    //       $button.addClass('active');
    //       event.preventDefault();
    //     }
    //   );

    // // Image popup
    // $el.find('.image-link').magnificPopup({
    //   type: 'image',
    //   gallery: { enabled: true },
    // });

    // // Brand carousel
    // $el.find('.brand-active').owlCarousel({
    //   loop: true,
    //   nav: false,
    //   autoplay: true,
    //   responsive: {
    //     0: { items: 2 },
    //     576: { items: 3 },
    //     768: { items: 3 },
    //     992: { items: 4 },
    //     1200: { items: 5 },
    //   },
    // });

    // // Project carousel
    // $el.find('.project-details-active').owlCarousel({
    //   loop: true,
    //   nav: true,
    //   autoplay: true,
    //   navText: [
    //     '<i class="fa fa-angle-left"></i>',
    //     '<i class="fa fa-angle-right"></i>',
    //   ],
    //   responsive: {
    //     0: { items: 1 },
    //     450: { items: 1 },
    //     768: { items: 1 },
    //     1000: { items: 1 },
    //   },
    // });

    // // Blog carousel
    // $el.find('.blog-thumb-active').owlCarousel({
    //   loop: true,
    //   nav: true,
    //   autoplay: true,
    //   navText: [
    //     '<i class="fa fa-angle-left"></i>',
    //     '<i class="fa fa-angle-right"></i>',
    //   ],
    //   responsive: {
    //     0: { items: 1 },
    //     450: { items: 1 },
    //     768: { items: 1 },
    //     1000: { items: 1 },
    //   },
    // });

    // // Scroll Up (this is global — jQuery scrollUp affects entire page)
    // $.scrollUp({
    //   easingType: 'linear',
    //   scrollSpeed: 900,
    //   animation: 'fade',
    //   scrollText: '<i class="fa fa-angle-up"></i>',
    // });

    // // Video Popup
    // $el.find('.video-popup').magnificPopup({
    //   type: 'iframe',
    // });
  }
}
