const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            name: "musicCore",
            remotes: {
                musicLibrary: "musicLibrary@http://localhost:3001/remoteEntry.js",
            },
            shared: ["react", "react-dom"],
        }),
    ],
};
