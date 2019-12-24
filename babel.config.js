const presets = [
    [
        "@babel/preset-env",
        {
            useBuiltIns: "usage"
        }
    ],
    "@babel/preset-react"
];

const plugins = ["@babel/plugin-proposal-class-properties"];

module.exports = { presets, plugins };
