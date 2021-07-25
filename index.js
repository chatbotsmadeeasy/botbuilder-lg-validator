const LG = require('botbuilder-lg')

const templateName = "TemplateToTest"

// Pass from Template section of the UI
const template = "- Hello ${name}!";

// Pass from Object / JSON section of the UI
const objectToPass = {
    name: "Varada"
};

const lgResource = new LG.LGResource(null, null, `# ${templateName} \r\n ${template}`)

const generatedTemplates = LG.Templates.parseResource(lgResource)

// Display in the result section
console.log(generatedTemplates.evaluate(templateName, objectToPass));