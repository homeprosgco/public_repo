import { Component } from '@angular/core';
import { BackgroundDirective, BorderBottomDirective, BorderDirective, BorderRadiusDirective, BottomDirective, BoxSizingDirective, ColorDirective, DisplayDirective, FirstChildDirective, FlexDirective, FontFamilyDirective, FontSizeDirective, FontWeightDirective, LastChildDirective, LineHeightDirective, MarginBottomDirective, MarginDirective, MarginLeftDirective, MarginRightDirective, MarginTopDirective, NthChildDirective, NthOfTypeDirective, OpacityDirective, OutlineDirective, OverflowDirective, PaddingBottomDirective, PaddingDirective, PaddingLeftDirective, PaddingRightDirective, PaddingTopDirective, PositionDirective, TextAlignDirective, TextDecorationDirective, TextTransformDirective, TransitionDirective, VerticalAlignDirective, WidthDirective } from '@public-repo/angular_style_directives';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'sg-portfolio-area',
  templateUrl: './portfolio_area.component.html',
  standalone: true,
  imports: [BackgroundDirective, BorderBottomDirective, BorderDirective, BorderRadiusDirective, BottomDirective, BoxSizingDirective, ColorDirective, DisplayDirective, FirstChildDirective, FlexDirective, FontFamilyDirective, FontSizeDirective, FontWeightDirective, LastChildDirective, LineHeightDirective, MarginBottomDirective, MarginDirective, MarginLeftDirective, MarginRightDirective, MarginTopDirective, NgStyle, NthChildDirective, NthOfTypeDirective, OpacityDirective, OutlineDirective, OverflowDirective, PaddingBottomDirective, PaddingDirective, PaddingLeftDirective, PaddingRightDirective, PaddingTopDirective, PositionDirective, TextAlignDirective, TextDecorationDirective, TextTransformDirective, TransitionDirective, VerticalAlignDirective, WidthDirective]
})
export class PortfolioAreaComponent {}