const { JSDOM } = require("jsdom");

function generateTailwindColorsFromHTML(html) {
  // Parse the HTML using jsdom
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Extract rows and columns
  const rows = document.querySelectorAll("tbody tr");

  // Prepare color object
  const colors = {};

  // Process each row
  rows.forEach((row, rowIndex) => {
    const cells = row.querySelectorAll("td.hex-color");
    cells.forEach((cell, colIndex) => {
      const hexColor = cell.getAttribute("data-clipboard-text");
      if (hexColor) {
        const tone = `${rowIndex}-${colIndex}`; // Use rowIndex and colIndex to differentiate colors
        colors[`color-${tone}`] = `#${hexColor.toLowerCase()}`;
      }
    });
  });

  // Create Tailwind config
  const tailwindConfig = {
    theme: {
      extend: {
        colors,
      },
    },
  };

  return tailwindConfig;
}

// Example usage
const htmlString = `
<!-- Paste your HTML string here -->
`;

const config = generateTailwindColorsFromHTML(htmlString);

console.log(JSON.stringify(config, null, 2));
