import { Component } from '@angular/core';
import { TransitionTimingFunctionDirective, VerticalAlignDirective, TransitionDurationDirective, BorderRadiusDirective, BackgroundOrangeColorDirective, BorderWidthDirective, FontFamilyDirective, WidthDirective, CursorDirective, RightDirective, RotateDirective, BottomDirective, PositionDirective, ZIndexDirective, TextTransformDirective, HeightDirective } from '@public-repo/tailwindcss';

@Component({
  selector: 'sg-bottom_top_button',
  templateUrl: './bottom_top_button.component.html',
  standalone: true,
  imports: [TransitionTimingFunctionDirective, VerticalAlignDirective, TransitionDurationDirective, BorderRadiusDirective, BackgroundOrangeColorDirective, BorderWidthDirective, FontFamilyDirective, WidthDirective, CursorDirective, RightDirective, RotateDirective, BottomDirective, PositionDirective, ZIndexDirective, TextTransformDirective, HeightDirective]
})
export class BottomTopButtonComponent {}