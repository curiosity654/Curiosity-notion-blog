module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/0cd1317c4bd141a6b12c18d728fc383e?v=515a4ea1771143a385ac60357ee1981d"
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
