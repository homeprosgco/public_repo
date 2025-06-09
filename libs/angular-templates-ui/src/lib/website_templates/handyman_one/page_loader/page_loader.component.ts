import { Component } from '@angular/core';
import { ColorOrangeDirective, WidthDirective, HeightDirective, FontSizeDirective, FontFamilyDirective, AlignItemsDirective, TopDirective, JustifyContentDirective, PositionDirective, TextTransformDirective, FontStyleDirective, VerticalAlignDirective, ZIndexDirective, FlexDirectionDirective, ColumnGapDirective, DisplayDirective, OverflowDirective, LeftDirective, RowGapDirective, BackgroundColorDirective, FontWeightDirective } from '@public-repo/tailwindcss';

@Component({
  selector: 'sg-page_loader',
  templateUrl: './page_loader.component.html',
  standalone: true,
  imports: [ColorOrangeDirective, WidthDirective, HeightDirective, FontSizeDirective, FontFamilyDirective, AlignItemsDirective, TopDirective, JustifyContentDirective, PositionDirective, TextTransformDirective, FontStyleDirective, VerticalAlignDirective, ZIndexDirective, FlexDirectionDirective, ColumnGapDirective, DisplayDirective, OverflowDirective, LeftDirective, RowGapDirective, BackgroundColorDirective, FontWeightDirective]
})
export class PageLoaderComponent {}