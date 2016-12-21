const fs = require('fs');
const path = require('path');
const axios = require('axios')

const filePath = path.resolve(__dirname, 'src', 'data.json');

axios.all([1, 2, 3, 4, 5, 6, 7, 8, 9].map(page =>
  axios.get(`http://swapi.co/api/people?page=${page}`)
    .then(res => res.data.results)
)).then(dataArray => {
  const data = dataArray.reduce((acc, cur) => acc.concat(cur), []);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});

