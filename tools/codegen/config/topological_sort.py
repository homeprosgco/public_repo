from collections import defaultdict
from config.directory_maps import SCALAR_MAP

def extract_dependencies(fields: dict) -> set[str]:
    deps = set()
    for gql_type in fields.values():
        base_type = gql_type.replace("!", "").replace("[", "").replace("]", "")
        if base_type not in SCALAR_MAP:
            deps.add(base_type)
    return deps

def build_dependency_graph(parsed_data: dict) -> dict[str, set[str]]:
    graph = defaultdict(set)
    for type_name, fields in parsed_data.items():
        graph[type_name] = extract_dependencies(fields)
    return graph

def topological_sort(graph: dict[str, set[str]]) -> list[str]:
    visited = set()
    result = []
    temp_mark = set()

    def visit(node):
        if node in temp_mark:
            print(f"⚠️  Circular dependency detected at {node} — skipping deep resolution.")
            return  # Skip instead of raising
        if node not in visited:
            temp_mark.add(node)
            for neighbor in graph.get(node, []):
                visit(neighbor)
            temp_mark.remove(node)
            visited.add(node)
            result.append(node)

    for node in graph:
        visit(node)

    return result
