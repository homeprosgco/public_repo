COMPONENT_RULES = {
    "Center": {
        "requires_all": {
            "display": "flex"
        },
        "requires_any": {
            "justify-content": "center",
            "justify-items": "center",
            "place-content": "center",
            "place-items": "center",
            "align-content": "center",
            "align-items": "center"
        },
        "min_match": 3 
    },
    "Container": {
        "requires_all": {
            "margin-left": "auto",
            "margin-right": "auto",
            "width": "100%",
            "max-width": None
        },
        "media_required": True,
        "min_match": 4
    },
    "FlexLayout": {
        "requires_all": {
            "flex-wrap": "wrap"
        },
        "requires_any": [
            "display:flex",
            "flex-wrap",
            "flex-direction",
            "margin-left",
            "margin-right"
        ],
        "min_match": 2
    },
    "FlexItem": {
        "requires_any": [
            "flex",
            "width",
            "max-width",
            "flex-grow",
            "flex-shrink",
            "flex-basis",
            "align-self",
            "justify-self"
            "margin-left",
            "margin-right",
        ],
        "media_required": True,
        "min_match": 2
    },
    "HFlex": {
        "requires_all": {
            "display": "flex",
            "flex-direction": ["row", "row-reverse"]
        },
        "min_match": 2
    },
    "VFlex": {
        "requires_all": {
            "display": "flex",
            "flex-direction": ["column", "column-reverse"]
        },
        "min_match": 2
    },
    "Grid": {
        "requires_any": [
            "display:grid",
            "grid-template",
            "grid-template-columns",
            "grid-template-rows",
            "grid-area",
            "grid-auto-flow"
        ],
        "min_match": 2
    },
    "GridItem": {
        "requires_any": [
            "grid-area",
            "grid-column",
            "grid-column-end",
            "grid-column-start",
            "grid-row",
            "grid-row-end",
            "grid-row-start",
            "order"
        ],
        "min_match": 2
    },
    "Box": {
        "requires_any": [
            "border",
            "margin",
            "padding",
            "display",
            "position",
            "overflow",
            "inset",
            "top",
            "left",
            "right",
            "bottom",
            "background",
            "width"
        ],
        "min_match": 3
    },
    "Background": {
        "requires_any": [
            "background",
            "background-attachment",
            "background-blend-mode",
            "background-clip",
            "background-color",
            "background-image",
            "background-origin",
            "background-position",
            "background-position-x",
            "background-position-y",
            "background-repeat",
            "background-size"
        ],
        "min_match": 2
    },
    "Link": {
        "tag": "a",
        "priority_boost": 0.25
    },
    "Button": {
        "tag": "button"
    },
    "TextInput": {
        "tag": "input",
        "type": ["text"]
    },
    "NumberInput": {
        "tag": "input",
        "type": ["number"]
    },
    "PasswordInput": {
        "tag": "input",
        "type": ["password"]
    },
    "Textarea": {
        "tag": "textarea"
    },
    "Select": {
        "tag": "select"
    },
    "Radio": {
        "tag": "input",
        "type": ["radio"]
    },
    "Checkbox": {
        "tag": "input",
        "type": ["checkbox"]
    },
    "FileInput": {
        "tag": "input",
        "type": ["file"]
    },
    "Input": {
        "tag": "input",
        "type": ["text", "email", "tel"]
    },
    "Image": {
        "tag": "img"
    },
    "BodyText": {
        "tag": "p"
    },
    "Icon": {
        "tag": "i"
    },
    "PrimaryTitle": {
        "tag": "h4",
        "priority_boost": 0.25
    },
    "BodyTitle": {
        "tag": "h5",
        "priority_boost": 0.25
    },
    "Label": {
        "tag": "h6",
        "priority_boost": 0.25
    },
    "PageHeading": {
        "tag": "h1",
        "priority_boost": 0.25
    },
    "SectionHeading": {
        "tag": "h2",
        "priority_boost": 0.25
    },
    "Headline": {
        "tag": "h3",
        "priority_boost": 0.25
    },
    "Header": {
        "tag": "header"
    },
    "Footer": {
        "tag": "footer"
    },
    "Text": {
        "requires_any": [
            "font",
            "font-family",
            "font-size",
            "color",
            "line-height",
            "font-weight"
        ],
        "min_match": 2
    }
}