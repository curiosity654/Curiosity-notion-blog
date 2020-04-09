module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/93538b55bfbb4c4d876c8fa52f9f96e9?v=b93ca0bdbf3048bd8c8a51c3120568ce"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/7feb17d4c10843b2a05c845292568423?v=47e3fa3cffa04cf8a78ed1ed007320ae"
            }
        }
    ],
}
