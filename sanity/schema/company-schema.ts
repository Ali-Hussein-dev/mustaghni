import { type Company } from "@/components/company-card";
import { client } from "@sanity/lib/client";
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
            validation: (Rule) => {
                return Rule
                    .required()
              .custom(async (title) => {
                  const query = `*[_type == "company" && title == $title]`;
                  const params = { title };
                  const results = await client.fetch<Company[]>(query, params);
              return results.length === 0 ? true : "Title must be unique";
          });
        },
    }),
      {
          name: "logo",
          title: "Brand logo",
          type: "image",
          options: {
              accept: "image/png, image/jpeg, image/jpg",
          },
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
        },
    ],
};

export default companySchema;
