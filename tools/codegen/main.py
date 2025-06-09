import os
import argparse
from generators.generate_angular_lib import run_nx_angular_generate, generate_ng_lib
from generators.generate_flutter_lib import run_flutter_package
from generators.graphql_parser import parse_graphql_file, parse_graphql_directory
from collections import defaultdict
from config.topological_sort import build_dependency_graph, extract_dependencies, topological_sort

# --- Main Runner ---
def main():
    parser = argparse.ArgumentParser()
    parser.add_argument(
      "--only_one",
      action="store_true",
      help="Only process the first type in topological sort (for testing purposes)"
    )
    parser.add_argument(
      "--check",
      action="store_true",
      help="Only check for unmapped GraphQL types in FOLDER_MAP"
    )
    args = parser.parse_args()

    # Load parsed types from GraphQL schema
    GRAPHQL_DIR = os.path.abspath(
        os.path.join(os.getcwd(), "../graphql/amplify_model_to_graphql_schema/graphql")
    )
    parsed_data = parse_graphql_directory(GRAPHQL_DIR)

    if args.check:
      from utils.graphql_type_to_folder_map_check import find_missing_folder_map_types
      find_missing_folder_map_types(GRAPHQL_DIR)
      return

    graph = build_dependency_graph(parsed_data)
    sorted_types = topological_sort(graph)  # ✅ Now it's defined
    parsed_type_set = set(parsed_data.keys())
    safe_sorted_types = [t for t in sorted_types if t in parsed_type_set]
    BASE_OUTPUT_DIR = "homeprosgco_graphql_cloud_server"

    if args.only_one:
        type_name = safe_sorted_types[0]
        fields, enums = parsed_data[type_name]
        print(f"\n🔹 [TEST ONLY] Processing first GraphQL type: {type_name}")
        # run_nx_angular_generate(type_name, parent_folder="feature")
        # generate_ng_lib(type_name, fields, enums, parsed_data, GRAPHQL_DIR)
        # run_flutter_package(type_name, parent_folder="feature")
        generate_flutter_lib(type_name, fields, enums, parsed_data, GRAPHQL_DIR)
    else:
        for type_name in sorted_types:
            fields = parsed_data[type_name]
            print(f"\n🔹 Processing GraphQL type: {type_name}")
            run_nx_angular_generate(type_name, fields, parent_folder="feature")
            # run_flutter_package(type_name, parent_folder="feature")

if __name__ == "__main__":
    main()

# Type: Job
#   id: ID!
#   tenant: Tenant
#   estimate: Estimate
#   proposal: Proposal
#   expenses: [Expense]
#   project: Project
#   contracts: Contract
#   assignedTo: TeamMember
#   warranty: Warranty
#   invoice: Invoice
#   files: [File]
#   scope: String
#   actualHours: Float
#   completionDate: AWSDateTime
#   estimatedHours: Float
#   manager: TeamMember
#   notes: String
#   pricingModel: JobPricingModel
#   priority: JobPriority
#   scheduledDate: AWSDateTime
#   startDate: AWSDateTime
#   status: JobStatus
#   tasks: [AWSJSON]
#   service: [AWSJSON]
#   lineItems: [AWSJSON]
#   title: String
#   requirements: [String]
#   created: AWSDateTime
#   updated: AWSDateTime
#   payment: Payment
#   isDeleted: Boolean!
