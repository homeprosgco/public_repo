from bs4 import BeautifulSoup
from pathlib import Path

current_dir = Path(__file__).resolve().parent
html_path = Path(current_dir / "css_properties.html")  # Replace with your actual HTML file
output_path = Path(current_dir / "css_properties.txt")

with html_path.open("r", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

# Find the target <div>
container = soup.find("div", class_="notranslate")
if not container:
    print("❌ <div class='notranslate'> not found.")
    exit()

# Extract <a> tag texts
anchor_texts = [a.get_text(strip=True) for a in container.find_all("a")]

# Write to file
with output_path.open("w", encoding="utf-8") as f:
    for text in anchor_texts:
        f.write(text + "\n")

print(f"✅ Extracted {len(anchor_texts)} entries to {output_path}")
