import subprocess
import os

def build_tailwind_css():
    # Define the base directory relative to this script
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))  # adjust if deeper
    cli_path = os.path.join(base_dir, "node_modules", ".bin", "tailwindcss")

    input_css = os.path.join(base_dir, "tools", "proposals", "assets", "css", "input.css")
    output_css = os.path.join(base_dir, "tools", "proposals", "static", "output.css")
    config_path = os.path.join(base_dir, "tools", "proposals", "tailwind.config.js")

    # Make sure the output directory exists
    os.makedirs(os.path.dirname(output_css), exist_ok=True)

    # Run the Tailwind CLI command
    result = subprocess.run([
        cli_path,
        "-i", input_css,
        "-o", output_css,
        "--minify",
        "--config", config_path
    ], cwd=base_dir)

    if result.returncode == 0:
        print("✅ Tailwind CSS compiled successfully.")
    else:
        raise RuntimeError("❌ Tailwind build failed.")
