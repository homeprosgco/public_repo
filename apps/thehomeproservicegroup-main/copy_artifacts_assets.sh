#!/bin/bash

# Define source and destination directories
images_source="artifacts/web/assets/assets/images"
images_destination="artifacts/web/assets/"

fonts_source="artifacts/web/assets/assets/fonts"
fonts_destination="artifacts/web/assets/fonts"

# Check if the source directories exist
if [ -d "$images_source" ]; then
    # Copy the images directory to the destination
    cp -r "$images_source" "$images_destination"
    echo "Copied $images_source to $images_destination"
else
    echo "Source directory $images_source does not exist."
fi

if [ -d "$fonts_source" ]; then
    # Copy the font files to the destination directory
    cp -r "$fonts_source"/* "$fonts_destination"
    echo "Copied files from $fonts_source to $fonts_destination"
else
    echo "Source directory $fonts_source does not exist."
fi

# Remove the "assets" directory we copied from
assets_dir="artifacts/web/assets/assets"
if [ -d "$assets_dir" ]; then
    rm -rf "$assets_dir"
    echo "Deleted directory $assets_dir"
else
    echo "Directory $assets_dir does not exist or was already deleted."
fi