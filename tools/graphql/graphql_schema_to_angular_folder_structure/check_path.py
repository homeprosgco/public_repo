from pathlib import Path

directory = Path("../../../../../worktrees/branch-aws-cdk-constructs/libs/aws-cdk-constructs/src/lib/graphql")


if directory.exists() and directory.is_dir():
    print(f"✅ The directory '{directory}' exists.")
else:
    print(f"❌ The directory '{directory}' does not exist.")

# python3 check_path.py