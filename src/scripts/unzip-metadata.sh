FILE=data/gutenberg-metadata.json
if [ -f "$FILE" ]; then
    echo "$FILE exists -- no need to unzip"
else 
    echo "$FILE does not exist -- unzipping"
    gzip -dk data/gutenberg-metadata.gz \
        && mv data/gutenberg-metadata data/gutenberg-metadata.json
fi
