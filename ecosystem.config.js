module.exports = {
    apps: [
      {
        name: "muss-page",
        script: "serve",
        args: "-s build -l 3000",
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };