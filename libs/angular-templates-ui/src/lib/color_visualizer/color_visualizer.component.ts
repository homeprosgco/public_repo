import {
  Component,
  inject,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { ThemeBuilderService } from '../website_theme';
import { AssetsService } from '@public-repo/angular-utils';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  selector: 'app-color-visualizer',
  templateUrl: './color_visualizer.component.html',
  styleUrls: ['./color_visualizer.component.scss'],
})
export class ColorVisualizerComponent implements OnInit {
  isBrowser = false;

  themeName: string = 'my_theme'; // Default value

  colorOptions: string[] = [];
  themeKeys: string[] = [
    'primary',
    'onPrimary',
    'primaryContainer',
    'onPrimaryContainer',
    'secondary',
    'onSecondary',
    'secondaryContainer',
    'onSecondaryContainer',
    'tertiary',
    'onTertiary',
    'tertiaryContainer',
    'onTertiaryContainer',
    'error',
    'onError',
    'errorContainer',
    'onErrorContainer',
    'primaryFixed',
    'primaryFixedDim',
    'onPrimaryFixed',
    'onPrimaryFixedVariant',
    'secondaryFixed',
    'secondaryFixedDim',
    'onSecondaryFixed',
    'onSecondaryFixedVariant',
    'tertiaryFixed',
    'tertiaryFixedDim',
    'onTertiaryFixed',
    'onTertiaryFixedVariant',
    'surfaceDim',
    'surface',
    'surfaceBright',
    'surfaceContainerLowest',
    'surfaceContainerLow',
    'surfaceContainer',
    'surfaceContainerHigh',
    'surfaceContainerHighest',
    'onSurface',
    'onSurfaceVariant',
    'outline',
    'outlineVariant',
    'inverseSurface',
    'inverseOnSurface',
    'inversePrimary',
    'scrim',
    'shadow',
  ];

  themeForm!: FormGroup;

  public colorData: { color: string; count: number; properties: string[] }[] =
    [];

  private assests = inject(AssetsService);

  constructor(
    private fb: FormBuilder,
    private themeBuilderService: ThemeBuilderService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.themeForm = this.fb.group({});
    if (!this.isBrowser) return;
    this.assests
      .get<{ color: string; count: number; properties: string[] }[]>(
        '/assets/color_palettes/hadiman_color_palette.json'
      )
      .subscribe((data) => {
        console.log(data);
        this.colorOptions = data.map((d) => d.color);
        this.colorData = data;

        this.colorData.forEach((color) => {
          this.themeForm.addControl(color.color, new FormControl<string[]>([]));
        });

        this.themeForm.valueChanges.subscribe((value) => {
          const flipped: { [key: string]: string } = {};
          for (const color of Object.keys(value)) {
            for (const role of value[color]) {
              flipped[role] = color;
            }
          }
          console.log(flipped);
          this.themeBuilderService.setThemeColors(flipped);
        });

      });
  }

  exportTheme(): void {
    console.log('🎨 Theme assignments by color:', this.themeForm);
    alert('Open console to see the color-to-theme mapping!');
  }

  downloadThemeAsJson(): void {
    const theme = this.themeBuilderService.getThemeSnapshot();
    const fileName = `${this.themeName || 'theme'}.json`;
    const blob = new Blob([JSON.stringify({ colors: theme }, null, 2)], {
      type: 'application/json',
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  }

}
