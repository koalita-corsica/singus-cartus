export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6094fe5f8b62f40ca6859d30",
                  title: "Sanity Studio",
                  name: "evrpro-nl-studio",
                  apiId: "85e94fc2-104e-481a-8d8e-99a5163263c3",
                },
                {
                  buildHookId: "6094fe5f015602053c3f5359",
                  title: "Blog Website",
                  name: "evrpro-nl",
                  apiId: "f56eee83-7274-454d-b548-6ca8e28b39ef",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/koalita-corsica/evrpro-nl",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://evrpro-nl.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
