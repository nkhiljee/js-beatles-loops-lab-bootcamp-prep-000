function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < instruments.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
    }
    return array
}

function johnLennonFacts(facts) {
  var sentence = [];
  var i = 0;
 
  while (i < facts.length) {
  sentence.push(facts[i] + "!!!");
  sentence++;
}
return sentence;
}

