import { defineField } from "sanity";
const companySchema = {
    name: "company",
    title: "Companies",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            // validation: (Rule) => {
            //     return Rule
            //         // .required()
            //         .custom(async (title) => {
            //             const query = `*[_type == "company" && title == $title]`;
            //             const params = { title };
            //             const results = await client.fetch<Company[]>(query, params) || [];
            //             const isTitle = results[0]?.title !== title
            //             return isTitle ? true : "Title must be unique";
            //         });
            // },
        }), {
            name: "evidence",
            title: "Evidence Explanation & Links",
            type: "array",
            of: [{ type: "block" }],
        },
        {
          name: "tags",
          title: "Tags",
          type: "array",
          of: [{ type: "string" }],
      },
      {
          name: "ownedBy",
          title: "owned by",
          type: "string",
      },
      {
          name: "ownerCompanyURL",
          title: "Owner company URL",
          type: "url",
        },
        {
            name: "logo",
            title: "Brand logo",
            type: "image",
            options: {
                accept: "image/png, image/jpeg, image/jpg",
            },
        },
    ],
};

export default companySchema;
