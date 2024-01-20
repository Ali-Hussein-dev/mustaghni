import fs from "fs";

// get tags from sanity
// filter null tags
// filter duplicates
// sort alphabetically
// write to file

const updateTags = async () => {
    /**
     * @type row shape {tags: null | string[]}[]
     */
    try {
        const tags = await fetch("http://localhost:3000/api/tags").then((res) =>
            res.json(),
        );

        const filteredTags = tags
            .map((obj) => obj.tags)
            .filter((tag) => tag !== null)
            .flat()
            .map((tag) => tag.toLowerCase());

        const uniqueTags = [...new Set(filteredTags)];
        const sortedTags = uniqueTags.sort();
        fs.writeFileSync("tags.json", JSON.stringify(sortedTags), "utf-8", (e) => {
            console.log(e);
        });
        console.log("tags updated", sortedTags);
    } catch (error) {
        console.error(error);
    }
};

updateTags();
