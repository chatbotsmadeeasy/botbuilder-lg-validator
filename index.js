const LG = require('botbuilder-lg')

const templateName = "TemplateToTest"

window.validateLG = function(fnTemplate, fnObject) {
    const lgResource = new LG.LGResource(null, null, `# ${templateName} \r\n ${fnTemplate}`)

    const generatedTemplates = LG.Templates.parseResource(lgResource)

    return generatedTemplates.evaluate(templateName, fnObject)
}