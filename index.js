var axios = require('axios');
var readline = require('readline');


const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('lookup> ');
rl.prompt();

rl.write(`Lookup allows you to checkout words` + `\n` +  `and their meaning directly from your console.` + `\n` + `Type ".exit" to kill process!` + `\n`);


function runApp () {

  rl.question(`\n` + `Type 'word' to lookup meaning...` + `\n`, (word) => {

    var word = word.toLowerCase();

    if (word === "exit") {
      rl.write(`Application exited.`);
      process.exit();
    }

    rl.write(`Getting definition for 'word' ${word}` + `\n`);

    getWordDefinition(word)
      .then(function(reponse){
        displayDefintion(reponse.data, function() {
          runApp();
        });

      })
      .catch(function (response) {
        wordDefinitionError(response);
        runApp();
      });
  });

}

function getWordDefinition(word) {
    return axios.get(`http://api.wordnik.com:80/v4/word.json/${word}/definitions`, {
    params: {
      limit: 200,
      includeRelated: true,
      useCanonical: false,
      includeTags: false,
      api_key: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
    }
  })
}

function wordDefinitionError(response) {
  rl.write(`Error getting word defintion pleasee check word spelling.`);
}

function displayDefintion(arrayValue, cb) {
  var numberFound = arrayValue.length;
  rl.write(`Found ${numberFound} result(s): ` + `\n`);

  arrayValue.forEach(function(item, idx) {
    rl.write(`${idx + 1}` + `\n`);
    rl.write(`Part of Speech:  ${item.partOfSpeech}` + `\n`);
    rl.write(`Definition: ${item.text}` + `\n` + `\t`);
  });

  cb();
}

var run  = runApp();


