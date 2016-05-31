var axios = require('axios');
var readline = require('readline');


const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('lookup> ');
rl.prompt();

console.log('Lookup allows you to checkout words' + '\n' +  'and their meaning directly from your console.' + '\n');

rl.question(`Type 'word' to lookup meaning...` + `\n`, (word) => {

  rl.close();

  rl.write(`Getting definition for 'word' ${word}`);

  var result = getWordDefinition(word)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (response) {
        console.log(response);
      });

});


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


