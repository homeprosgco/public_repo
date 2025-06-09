import { Component, OnInit, inject } from '@angular/core';
import { ScriptLoaderService, CssThemeVarUpdateService  } from '@public-repo/angular-utils';
import { HmendComponent } from './hmend.component';
import { m3Theme } from './tokens';

@Component({
  selector: 'sg-hmend-site-wrapper',
  template: '<sg-hmend></sg-hmend>',
  standalone: true,
  imports: [HmendComponent]
})
export class HmendSiteWrapperComponent implements OnInit {
  scriptLoader = inject(ScriptLoaderService);
  themeVarUpdate = inject(CssThemeVarUpdateService)
  
  ngOnInit() {
    this.themeVarUpdate.applyTheme(m3Theme);
    this.scriptLoader.loadScripts([
      'hmend/assets/js/vendor/modernizr-2.8.3.min.js',
      'hmend/assets/js/vendor/jquery.min.js',
      'hmend/assets/js/popper.min.js',
      'hmend/assets/js/bootstrap.min.js',
      'hmend/assets/js/headline.js',
      'hmend/assets/js/jquery.magnific-popup.min.js',
      'hmend/assets/js/jquery.scrollUp.min.js',
      'hmend/assets/js/isotope.pkgd.min.js',
      'hmend/assets/js/imagesloaded.pkgd.min.js',
      'hmend/assets/js/jquery.counterup.min.js',
      'hmend/assets/js/waypoints.min.js',
      'hmend/assets/js/jquery.parallax-1.1.3.js',
      'hmend/assets/js/owl.carousel.min.js',
      'hmend/assets/js/jquery.meanmenu.js',
      'hmend/assets/js/ajax-mail.js',
      'hmend/assets/js/plugins.js',
      'hmend/assets/js/main.js'
    ])
    .then(() => console.log('Scripts loaded for hmend!'))
    .catch(err => console.error(err, 'Error loading scripts for hmend'));
  }
}
