
const staticPageSchema = {
    name: "staticPage",
    title: "Static Pages",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",

        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block",
                },
            ],
        }

    ],
};

export default staticPageSchema;
