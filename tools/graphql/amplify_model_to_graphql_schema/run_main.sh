#!/bin/bash
# Ensure the script exits if anything fails
set -e

# Set PYTHONPATH to the root of the graphql tools folder
PYTHONPATH=$(dirname "$0")/..
export PYTHONPATH

# Run the main entry point
python3 main.py
