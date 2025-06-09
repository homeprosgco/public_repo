def detect_type(name: str, gql_type: str) -> str:
    name_lower = name.lower()
    gql_type = gql_type.strip('!')

    if gql_type == "Boolean":
        return "boolean"
    if gql_type in ("AWSDate", "AWSDateTime") or "date" in name_lower or "time" in name_lower:
        return "date"
    if gql_type == "String":
        if "email" in name_lower:
            return "text"
        elif "password" in name_lower:
            return "password"
        elif "textarea" in name_lower or len(name_lower) > 30:
            return "textarea"
        else:
            return "text"
    if gql_type in ("Int", "Float"):
        return "number"
    if gql_type.endswith("Enum"):
        return "select"
    return "text"