const companySchema = {
    name: 'company',
    title: 'Companies',
    type: 'document',
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "logo",
            title: "Brand logo",
            type: "image",
            options: {
                accept: "image/png, image/jpeg, image/jpg",
            }

        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            name: "ownedBy",
            title: "Owner company",
            type: "string",
        },
        {
            name: "ownerCompanyURL",
            title: "Owner company URL",
            type: "url",
        }
    ]
}

export default companySchema