import { Component } from '@angular/core';
import { BackgroundDirective, BackgroundPositionDirective, BackgroundSizeDirective, BorderBottomDirective, BoxSizingDirective, ColorDirective, DisplayDirective, FirstChildDirective, FlexDirective, FlexShrinkDirective, FlexWrapDirective, FontFamilyDirective, FontSizeDirective, FontWeightDirective, LastChildDirective, LineHeightDirective, MarginBottomDirective, MarginDirective, MarginLeftDirective, MarginRightDirective, MarginTopDirective, MaxWidthDirective, NthChildDirective, NthOfTypeDirective, OverflowDirective, PaddingBottomDirective, PaddingDirective, PaddingLeftDirective, PaddingRightDirective, PositionDirective, WidthDirective } from '@public-repo/angular_style_directives';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'sg-home-service-area',
  templateUrl: './home_service_area.component.html',
  standalone: true,
  imports: [BackgroundDirective, BackgroundPositionDirective, BackgroundSizeDirective, BorderBottomDirective, BoxSizingDirective, ColorDirective, DisplayDirective, FirstChildDirective, FlexDirective, FlexShrinkDirective, FlexWrapDirective, FontFamilyDirective, FontSizeDirective, FontWeightDirective, LastChildDirective, LineHeightDirective, MarginBottomDirective, MarginDirective, MarginLeftDirective, MarginRightDirective, MarginTopDirective, MaxWidthDirective, NgStyle, NthChildDirective, NthOfTypeDirective, OverflowDirective, PaddingBottomDirective, PaddingDirective, PaddingLeftDirective, PaddingRightDirective, PositionDirective, WidthDirective]
})
export class HomeServiceAreaComponent {}