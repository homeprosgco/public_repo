// theme_builder.component.stories.ts
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ThemeBuilderComponent } from './theme_builder.component';
import { TailwindColorsDirective } from '@homeprosgco/angular_ui_components';
import { MockThemeBuilderService, ThemeBuilderService } from '../../../domain';

const meta: Meta<ThemeBuilderComponent> = {
  component: ThemeBuilderComponent,
  title: 'Builder/ThemeBuilderComponent',
  decorators: [
    moduleMetadata({
      imports: [TailwindColorsDirective],
      providers: [
        {
          provide: ThemeBuilderService,
          useClass: MockThemeBuilderService,
        },
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<ThemeBuilderComponent>;

export const Default: Story = {
  name: 'Default Theme',
};
