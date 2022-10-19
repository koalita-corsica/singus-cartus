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
                    "632459875ddea7274eb61632",
                  title: "Sanity Studio",
                  name: "ajaccio-froid-q-studio",
                  apiId: "ee16c494-4541-49c6-a219-c597006d2de5",
                },
                {
                  buildHookId: "632459879c51cc2971f77152",
                  title: "Blog Website",
                  name: "ajaccio-froid-q",
                  apiId: "b1da4a05-7a74-400b-b9d7-170dc8ad23bd",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/koalita-corsica/ajaccio-froid-q",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://ajaccio-froid-q.netlify.app",
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
