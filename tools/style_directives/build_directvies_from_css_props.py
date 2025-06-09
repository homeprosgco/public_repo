from pathlib import Path
import os
import pandas as pd

# Directory where the directives will be saved
output_dir = Path("libs/angular_style_directives/src/lib")
output_dir.mkdir(parents=True, exist_ok=True)

# Read CSS properties (you would paste this list into a multi-line string here)
css_properties = """
accent-color
align-content
align-items
align-self
all
animation
animation-delay
animation-direction
animation-duration
animation-fill-mode
animation-iteration-count
animation-name
animation-play-state
animation-timing-function
appearance
aspect-ratio
backdrop-filter
backface-visibility
background
background-attachment
background-blend-mode
background-clip
background-color
background-image
background-origin
background-position
background-position-x
background-position-y
background-repeat
background-size
block-size
border
border-block
border-block-color
border-block-end
border-block-end-color
border-block-end-style
border-block-end-width
border-block-start
border-block-start-color
border-block-start-style
border-block-start-width
border-block-style
border-block-width
border-bottom
border-bottom-color
border-bottom-left-radius
border-bottom-right-radius
border-bottom-style
border-bottom-width
border-collapse
border-color
border-end-end-radius
border-end-start-radius
border-image
border-image-outset
border-image-repeat
border-image-slice
border-image-source
border-image-width
border-inline
border-inline-color
border-inline-end
border-inline-end-color
border-inline-end-style
border-inline-end-width
border-inline-start
border-inline-start-color
border-inline-start-style
border-inline-start-width
border-inline-style
border-inline-width
border-left
border-left-color
border-left-style
border-left-width
border-radius
border-right
border-right-color
border-right-style
border-right-width
border-spacing
border-start-end-radius
border-start-start-radius
border-style
border-top
border-top-color
border-top-left-radius
border-top-right-radius
border-top-style
border-top-width
border-width
bottom
box-decoration-break
box-reflect
box-shadow
box-sizing
break-after
break-before
break-inside
caption-side
caret-color
clear
clip
clip-path
color
color-scheme
column-count
column-fill
column-gap
column-rule
column-rule-color
column-rule-style
column-rule-width
column-span
column-width
columns
content
counter-increment
counter-reset
counter-set
cursor
direction
display
empty-cells
filter
flex
flex-basis
flex-direction
flex-flow
flex-grow
flex-shrink
flex-wrap
float
font
font-family
font-feature-settings
font-kerning
font-size
font-size-adjust
font-stretch
font-style
font-variant
font-variant-caps
font-variant-numeric
font-weight
gap
grid
grid-area
grid-auto-columns
grid-auto-flow
grid-auto-rows
grid-column
grid-column-end
grid-column-start
grid-row
grid-row-end
grid-row-start
grid-template
grid-template-areas
grid-template-columns
grid-template-rows
hanging-punctuation
height
hyphens
hyphenate-character
image-rendering
initial-letter
inline-size
inset
inset-block
inset-block-end
inset-block-start
inset-inline
inset-inline-end
inset-inline-start
isolation
justify-content
justify-items
justify-self
left
letter-spacing
line-height
list-style
list-style-image
list-style-position
list-style-type
margin
margin-block
margin-block-end
margin-block-start
margin-bottom
margin-inline
margin-inline-end
margin-inline-start
margin-left
margin-right
margin-top
marker
marker-end
marker-mid
marker-start
mask
mask-clip
mask-composite
mask-image
mask-mode
mask-origin
mask-position
mask-repeat
mask-size
mask-type
max-block-size
max-height
max-inline-size
max-width
min-block-size
min-inline-size
min-height
min-width
mix-blend-mode
object-fit
object-position
offset
offset-anchor
offset-distance
offset-path
offset-position
offset-rotate
opacity
order
orphans
outline
outline-color
outline-offset
outline-style
outline-width
overflow
overflow-anchor
overflow-wrap
overflow-x
overflow-y
overscroll-behavior
overscroll-behavior-block
overscroll-behavior-inline
overscroll-behavior-x
overscroll-behavior-y
padding
padding-block
padding-block-end
padding-block-start
padding-bottom
padding-inline
padding-inline-end
padding-inline-start
padding-left
padding-right
padding-top
page-break-after
page-break-before
page-break-inside
paint-order
perspective
perspective-origin
place-content
place-items
place-self
pointer-events
position
quotes
resize
right
rotate
row-gap
scale
scroll-behavior
scroll-margin
scroll-margin-block
scroll-margin-block-end
scroll-margin-block-start
scroll-margin-bottom
scroll-margin-inline
scroll-margin-inline-end
scroll-margin-inline-start
scroll-margin-left
scroll-margin-right
scroll-margin-top
scroll-padding
scroll-padding-block
scroll-padding-block-end
scroll-padding-block-start
scroll-padding-bottom
scroll-padding-inline
scroll-padding-inline-end
scroll-padding-inline-start
scroll-padding-left
scroll-padding-right
scroll-padding-top
scroll-snap-align
scroll-snap-stop
scroll-snap-type
scrollbar-color
shape-outside
tab-size
table-layout
text-align
text-rendering
text-align-last
text-decoration
text-decoration-color
text-decoration-line
text-decoration-style
text-decoration-thickness
text-emphasis
text-emphasis-color
text-emphasis-position
text-emphasis-style
text-indent
text-justify
text-orientation
text-overflow
text-shadow
text-transform
text-underline-offset
text-underline-position
text-wrap
top
transform
transform-origin
transform-style
transition
transition-delay
transition-duration
transition-property
transition-timing-function
translate
touch-action
unicode-bidi
user-select
vertical-align
visibility
white-space
widows
width
will-change
word-break
word-spacing
word-wrap
writing-mode
z-index
zoom
"""

# Jinja-style directive template
template = """import { Directive, ElementRef, inject, input, effect } from '@angular/core';
import { DirectiveUtils } from '../lib/directive_utils';
import { MediaQueryService } from '@public-repo/angular-utils';

@Directive({
  selector: '[{{ selector }}]',
  standalone: true
})
export class {{ class_name }}Directive {
  private el = inject(ElementRef);
  private utils = inject(DirectiveUtils);
  private media = inject(MediaQueryService);

  {{ style_property }} = input<string | { [media: string]: string }>();

  constructor() {
    effect(() => {
      const raw = this.{{ style_property }}() ?? '';
      const values = this.utils.parseResponsiveObject(raw ?? {});
      
      const base = values['base'];
      const entries = Object.entries(values)
      .filter(([k]) => k !== 'base')
      .map(([k, v]) => {
        const px = parseInt(k.match(/min-width:\s*(\d+)px/)?.[1] || '0', 10);
        return { query: k, value: v, minWidth: px };
      })
      .sort((a, b) => b.minWidth - a.minWidth);

      let applied = base;

      for (const entry of entries) {
        const cleaned = entry.query.replace('@media ', '');
        const signal = this.media.watch(cleaned);
        if (signal()) {
          applied = entry.value;
          break;
        }
      }

      this.el.nativeElement.style.{{ css_prop }} = applied ?? '';
      
    });
  }

}
"""

# Generate file per directive
for prop in css_properties.strip().splitlines():
    class_name = ''.join(word.capitalize() for word in prop.replace('-', ' ').split())  # e.g., background-color -> BackgroundColor
    file_name = f"{prop.replace('-', '_')}_directive.ts"
    css_prop = ''.join([part.capitalize() if i > 0 else part for i, part in enumerate(prop.split('-'))])
    content = template.replace("{{ selector }}", f"sg{class_name}")
    content = content.replace("{{ class_name }}", class_name)
    content = content.replace("{{ style_property }}", f"sg{class_name}")
    content = content.replace("{{ css_prop }}", css_prop)
 
    (output_dir / file_name).write_text(content)


directive_files = sorted(os.listdir(output_dir))

# Create DataFrame for displaying
df = pd.DataFrame({"Directives": directive_files})

# Local-friendly output
print(df.to_string(index=False))


barrel_lines = []

for file in directive_files:
    # Remove "_directive.ts" to get the base name
    base_name = file.replace("_directive.ts", "")
    class_name = ''.join(word.capitalize() for word in base_name.split('_'))  # PascalCase class name
    barrel_lines.append(f"export * from './{file.replace('.ts', '')}';")

# Write to index.ts in the same directory
barrel_path = output_dir / "index.ts"
barrel_path.write_text('\n'.join(barrel_lines))

# Show preview of barrel file content
print(f"📦 Barrel file created at: {barrel_path}\n")
print(barrel_path.read_text())