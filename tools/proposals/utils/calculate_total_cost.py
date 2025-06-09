import re

def calculate_total_cost(cost_breakdown: list[dict[str, str]]) -> str:
    """
    Takes a list of cost items with string costs like "$1,050" and returns the total formatted as a string.
    
    Args:
        cost_breakdown (list): List of dicts with 'cost' fields like "$1,050"

    Returns:
        str: Total cost formatted as a dollar string, e.g., "$5,500"
    """
    total = 0.0
    for item in cost_breakdown:
        cost_str = item["cost"]
        # Remove $ and commas, convert to float
        numeric_value = float(re.sub(r"[^\d.]", "", cost_str))
        total += numeric_value

    return f"${total:,.2f}"