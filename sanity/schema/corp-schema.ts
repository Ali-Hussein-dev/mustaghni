
const corpSchema = {
    name: "corp",
    title: "Corporations",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "content",
            title: "Evidence Description",
            type: "array",
            of: [
                {
                    type: "block",
                },
            ],
        },
        {
            name: "logo",
            title: "Corp logo",
            type: "image",
            options: {
                accept: "image/png, image/jpeg, image/jpg",
            },
        },
        {
            name: "corpURL",
            title: "Corp URL",
            type: "url",
        },
    ],
};

export default corpSchema;
