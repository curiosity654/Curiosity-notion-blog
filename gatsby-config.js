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
                configTable: "https://www.notion.so/5189ae295af4451787bf9a6e4e0e2857?v=6a04fdb853ff4d7e96ad8276086e6c58"
            }
        }
    ],
}
