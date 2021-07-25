const LG = require('botbuilder-lg')

const lgResource = new LG.LGResource("test", "test", "# HelloWorld \r\n - Hello World!")

const generatedTemplates = LG.Templates.parseResource(lgResource)

console.log(generatedTemplates.evaluate("HelloWorld"));