import { Component } from '@angular/core';
import { BoxShadowDirective, BoxSizingDirective, ColorDirective, DisplayDirective, FirstChildDirective, FlexDirective, FlexShrinkDirective, FlexWrapDirective, FloatDirective, FontDirective, FontFamilyDirective, FontSizeDirective, FontWeightDirective, LastChildDirective, LineHeightDirective, MarginBottomDirective, MarginDirective, MarginLeftDirective, MarginRightDirective, MarginTopDirective, MaxWidthDirective, NthChildDirective, NthOfTypeDirective, OverflowDirective, PaddingBottomDirective, PaddingDirective, PaddingLeftDirective, PaddingRightDirective, PaddingTopDirective, TextAlignDirective, TextDecorationDirective, TextRenderingDirective, TextTransformDirective, TransitionDirective, VerticalAlignDirective, WidthDirective } from '@public-repo/angular_style_directives';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'sg-blog-area',
  templateUrl: './blog_area.component.html',
  standalone: true,
  imports: [BoxShadowDirective, BoxSizingDirective, ColorDirective, DisplayDirective, FirstChildDirective, FlexDirective, FlexShrinkDirective, FlexWrapDirective, FloatDirective, FontDirective, FontFamilyDirective, FontSizeDirective, FontWeightDirective, LastChildDirective, LineHeightDirective, MarginBottomDirective, MarginDirective, MarginLeftDirective, MarginRightDirective, MarginTopDirective, MaxWidthDirective, NgStyle, NthChildDirective, NthOfTypeDirective, OverflowDirective, PaddingBottomDirective, PaddingDirective, PaddingLeftDirective, PaddingRightDirective, PaddingTopDirective, TextAlignDirective, TextDecorationDirective, TextRenderingDirective, TextTransformDirective, TransitionDirective, VerticalAlignDirective, WidthDirective]
})
export class BlogAreaComponent {}