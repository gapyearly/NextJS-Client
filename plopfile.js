module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("component", {
    description: "react component file plus module.css file",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name please",
      },
      {
        type: "input",
        name: "name",
        message: "Component name please",
      },
    ], // array of inquirer prompts
    actions: [], // array of actions
  });
};
