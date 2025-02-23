const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            name: "musicLibrary",
            filename: "remoteEntry.js",
            exposes: {
                "./MusicLibrary": "./src/App",
            },
            shared: ["react", "react-dom"],
        }),
    ],
};
