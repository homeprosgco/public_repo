import { Component } from '@angular/core';
import { BackgroundColorDirective, BottomDirective, BoxSizingDirective, ColorDirective, DisplayDirective, FirstChildDirective, FontDirective, FontSizeDirective, HeightDirective, LastChildDirective, LineHeightDirective, NthChildDirective, NthOfTypeDirective, RightDirective, TextAlignDirective, TextDecorationDirective, TextRenderingDirective, TransitionDirective, WidthDirective } from '@public-repo/angular_style_directives';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'sg-hmend-a',
  templateUrl: './hmend_a.component.html',
  standalone: true,
  imports: [BackgroundColorDirective, BottomDirective, BoxSizingDirective, ColorDirective, DisplayDirective, FirstChildDirective, FontDirective, FontSizeDirective, HeightDirective, LastChildDirective, LineHeightDirective, NgStyle, NthChildDirective, NthOfTypeDirective, RightDirective, TextAlignDirective, TextDecorationDirective, TextRenderingDirective, TransitionDirective, WidthDirective]
})
export class HmendAComponent {}