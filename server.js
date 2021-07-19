const express = require('express')
const app = express()
var cors = require('cors')
var fs = require('fs');

app.use(cors());

/* feb 2021 timesteps
var gen = {
0: 1613527539,
1: 1613531187,
2: 1613531674,
3: 1613532038,
4: 1613532160,
5: 1613532282,
6: 1613532403,
7: 1613532525,
8: 1613532646,
9: 1613532769,
10: 1613532891,
11: 1613533013,
12: 1613533256,
13: 1613534228,
14: 1613536172,
}

*/

var gen = {
0: 1617757847,
1: 1617758397,
2: 1617758949,
3: 1617759133,
4: 1617759316,
5: 1617759501,
6: 1617760972,
7: 1617761523,
8: 1617761707,
9: 1617762073,
10: 1617762256,
11: 1617762439,
12: 1617762624,
13: 1617763543,
14: 1617764644,
15: 1617765378,
16: 1617765562,
17: 1617766294,
18: 1617766661,
19: 1617768308,
20: 1617770699,
}
var currentGen = 0

var resultsDir = __dirname + '/data/apr2021/'
app.get('/', (req, res) => {
  res.send(currentGen.toString())
});
app.get('/api/v1/elections/lastpublished/130', (req, res) => {
   var filename = resultsDir + 'lastPublished.' + gen[currentGen].toString();
   console.log("sending " + filename);
   res.header("Content-Type",'application/json');
   res.sendFile(filename);
});

app.get('/api/v1/elections/precinctresults/130/0005/', (req, res) => {
   var filename = resultsDir + 'dpi_p.' + gen[currentGen].toString();
   console.log("sending " + filename);
   res.header("Content-Type",'application/json');
   res.sendFile(filename);
});
app.get('/api/v1/elections/precinctresults/130/0018/', (req, res) => {
   var filename = resultsDir + 'cb12_p.' + gen[currentGen].toString();
   console.log("sending " + filename);
   res.header("Content-Type",'application/json');
   res.sendFile(filename);
});
app.get('/api/v1/elections/precinctresults/130/0004/', (req, res) => {
   var filename = resultsDir + 'statesenate_p.' + gen[currentGen].toString();
   console.log("sending " + filename);
   res.header("Content-Type",'application/json');
   res.sendFile(filename);
});


app.listen(5555, () => console.log('Server ready'))

function updateGeneration() {
  if(currentGen < 20) {
    currentGen = currentGen + 1;
    console.log("Updating gen to " + currentGen);
  }
}

setInterval(updateGeneration, 20000);
