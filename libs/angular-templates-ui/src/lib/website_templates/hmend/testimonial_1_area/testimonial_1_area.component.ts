import { Component } from '@angular/core';
import { BackgroundDirective, BackgroundPositionDirective, BackgroundRepeatDirective, BoxSizingDirective, ColorDirective, FirstChildDirective, FontFamilyDirective, FontSizeDirective, FontWeightDirective, LastChildDirective, LineHeightDirective, MarginBottomDirective, MarginDirective, MarginLeftDirective, MarginRightDirective, MaxWidthDirective, NthChildDirective, NthOfTypeDirective, PaddingBottomDirective, PaddingLeftDirective, PaddingRightDirective, PaddingTopDirective, TextAlignDirective, TextTransformDirective, WidthDirective } from '@public-repo/angular_style_directives';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'sg-testimonial-1-area',
  templateUrl: './testimonial_1_area.component.html',
  standalone: true,
  imports: [BackgroundDirective, BackgroundPositionDirective, BackgroundRepeatDirective, BoxSizingDirective, ColorDirective, FirstChildDirective, FontFamilyDirective, FontSizeDirective, FontWeightDirective, LastChildDirective, LineHeightDirective, MarginBottomDirective, MarginDirective, MarginLeftDirective, MarginRightDirective, MaxWidthDirective, NgStyle, NthChildDirective, NthOfTypeDirective, PaddingBottomDirective, PaddingLeftDirective, PaddingRightDirective, PaddingTopDirective, TextAlignDirective, TextTransformDirective, WidthDirective]
})
export class Testimonial1AreaComponent {}