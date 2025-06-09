from jinja2 import Environment, FileSystemLoader
import os

base_dir = os.path.dirname(os.path.abspath(__file__))
# Register custom Jinja2 environment
template_dir = os.path.abspath(os.path.join(base_dir, "jinja_template"))
env = Environment(loader=FileSystemLoader(template_dir))

# Optional: add any global functions or filters
def with_linebreaks(text: str) -> str:
    return text.replace("\n", "<br>")

env.globals['with_linebreaks'] = with_linebreaks

# Register custom filter
def linebreaksbr(value: str) -> str:
    return value.replace('\n', '<br>\n')

env.filters['linebreaksbr'] = linebreaksbr

def render_proposal(
    context: dict,
    output_path: str,
    template_name: str = 'proposal_template.html.j2',
):
    """
    Renders a proposal template with given context and writes to output_path.
    
    :param template_name: Template filename (e.g., "proposal.html")
    :param context: Dictionary containing all render variables
    :param output_path: Destination file path
    """
    template = env.get_template(template_name)
    html = template.render(**context)
    
    with open(output_path, "w") as f:
        f.write(html)
    return output_path
