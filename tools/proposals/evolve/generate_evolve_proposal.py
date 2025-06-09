import re
from datetime import datetime
from utils.calculate_total_cost import calculate_total_cost
from context.company_context import company_context
import os
import json

base_dir = os.path.dirname(os.path.abspath(__file__))
estimate_requests = os.path.join(base_dir, "estimate_requests")

def extract_proposal_data_from_files(evolve_id: str, member_name: str) -> dict:
    # Normalize folder name
    folder_name = f"{evolve_id}_{member_name.replace(' ', '_')}"
    folder_path = os.path.join(estimate_requests, folder_name)

    # File paths
    email_file = os.path.join(folder_path, f"{folder_name}_email.py")
    cost_file = os.path.join(folder_path, f"{folder_name}_cost_breakdown_items.json")
    images_dir = os.path.join(folder_path, "images")

    # Read email text
    with open(email_file, "r") as f:
        email_body = f.read()

    def extract(key, default=""):
        match = re.search(rf"{key}:\s*(.+)", email_body)
        return match.group(1).strip() if match else default

    # Address
    address = extract("Address")
    city = extract("City")
    state = extract("State")
    zip_code = extract("Zip Code")
    full_address = f"{address}\n{city}, {state}\n{zip_code}"

    # Scope of Work
    scope_match = re.search(r"Requested Scope of Work:\s*(.*?)\n\n", email_body, re.DOTALL)
    scope_text = scope_match.group(1).strip() if scope_match else ""

    # Cost Breakdown
    cost_breakdown = []
    if os.path.exists(cost_file):
        with open(cost_file, "r") as f:
            cost_breakdown = json.load(f)

    # Images
    images = []
    if os.path.exists(images_dir):
        for file in sorted(os.listdir(images_dir)):
            if file.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
                images.append(f"images/{file}")

    # Build context
    return {
        **company_context,
        "page_title": f"{evolve_id} {extract('Name')} Proposal",
        "proposal_date": datetime.now().strftime("%m/%d/%Y"),
        "evolve_id": evolve_id,
        "client_name": extract("Name"),
        "client_address": "Evolve Emod\n5965 S 900 E Suite 255\nSalt Lake City, UT\n84121",
        "job_address": full_address,
        "scope_of_work": scope_text,
        "acceptance_scope": scope_text.split(".")[0],
        "cost_breakdown": cost_breakdown,
        "total_cost": calculate_total_cost(cost_breakdown),
        "images": images,
    }
