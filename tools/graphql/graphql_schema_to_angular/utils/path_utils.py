from config.directory_maps import FOLDER_MAP

def get_output_directory(BASE_OUTPUT_DIR, type_name):
    """
    Determines the correct directory for a given GraphQL type.
    Throws an error if the type is not found in FOLDER_MAP.
    """
    if type_name not in FOLDER_MAP:
        raise ValueError(f"❌ Unknown type '{type_name}' – not found in FOLDER_MAP.")
    
    return f"{BASE_OUTPUT_DIR}/{FOLDER_MAP[type_name]}"

def get_module_from_folder_map(graphql_type):
    """Retrieve the parent module from the FOLDER_MAP."""
    if graphql_type in FOLDER_MAP:
        # Extract top-level directory from the mapped path
        return FOLDER_MAP[graphql_type].split("/")[0]  # Get first directory
    return None  # Return None if type is not found