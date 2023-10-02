module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    env: {
        browser: true,
        es2020: true,
    },
    parserOptions: {
        ecmaVersion: "latest", // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: "detect", // tells eslint-plugin-react to automatically detect the version of react to use
        },
    },
    plugins: ["react-refresh", "simple-import-sort"],
    extends: [
        "turbo",
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:react/jsx-runtime", // Disables the need for importing React in each JSX file
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        "@typescript-eslint/explicit-function-return-type": "off",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
            },
        ],
    },
    overrides: [
        {
            files: ["*.js", "*.cjs"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
            },
        },
    ],
    ignorePatterns: [
        ".eslintcache",
        ".turbo",
        ".next",
        "dist",
        "build",
        "node_modules",
        "coverage",
        "storybook-static",
    ],
};
