var axios = require('axios');



axios.get('http://api.wordnik.com:80/v4/word.json/wrestle/definitions', {
    params: {
      limit: 200,
      includeRelated: true,
      useCanonical: false,
      includeTags: true,
      api_key: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
    }
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (response) {
    console.log(response);
  });




// function getWordDefinition(word, limit) {
//     return axios.get('http://api.wordnik.com:80/v4/word.json/' + word + '/definitions', {
//     params: {
//       limit: limit,
//       includeRelated: true,
//       useCanonical: false,
//       includeTags: false,
//       api_key: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
//     }
//   })
// }


