from evolve.generate_evolve_proposal import extract_proposal_data_from_files
from generators.render_proposal import render_proposal  # Assuming you moved render logic here
import os
from build_tailwind_css import build_tailwind_css

base_dir = os.path.dirname(os.path.abspath(__file__))
estimate_requests_dir = os.path.join(base_dir, "evolve", "estimate_requests")

def main():
    evolve_id = input("Enter Evolve ID: ").strip()
    member_name = input("Enter Member Name (e.g., MARAIN ATHERTON): ").strip().lower()

    # Extract data from files
    context = extract_proposal_data_from_files(evolve_id, member_name)

    print("\n--- Context Extracted ---")
    print(context)

    safe_member_name = context["client_name"].replace(" ", "_").lower()
    filename_base = f"{context['evolve_id']}_{safe_member_name}"
    
    output_dir = f"{estimate_requests_dir}/{filename_base}"
    os.makedirs(output_dir, exist_ok=True)
    
    output_path = os.path.join(output_dir, f"{filename_base}.generated.html")
    output_pdf_path = os.path.join(output_dir, f"{filename_base}.proposal.pdf")

    build_tailwind_css()
    # Render to HTML
    render_proposal(
        context=context,
        output_path=output_path,
        template_name='proposal_template.html.j2',
    )

    print(f"\n✅ Proposal rendered to: {output_path}")

if __name__ == "__main__":
    main()
    
