/**
 * @type {import('prettier').Options}
 */
module.exports = {
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    singleQuote: false,
    bracketSpacing: true,
    bracketSameLine: true,
    plugins: [
        require.resolve("@plasmohq/prettier-plugin-sort-imports"),
        require("prettier-plugin-tailwindcss"),
    ],
    importOrder: ["^@plasmohq/(.*)$", "^~(.*)$", "^[./]"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
