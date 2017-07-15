(function ($) {

$('#output').hide();
var height = $(window).height();   // returns height of browser viewport
$('#jumbotron').css("height", height-100);

function joinWord(end, front, count, punc){
  //string of end + front
  str = end + front;
  //strip out all commas
  str = str.replace(/,/g,'');
  if(count===0){
    return(str + 'way' + punc);
  } else {
  return  (str + 'ay' + punc);
}
}

function capitalization(front, end){
  if(front[0]){
  if(front[0].toUpperCase()==front[0] && end[0]){
    front[0] = front[0].toLowerCase();
    end[0] = end[0].toUpperCase();
  }
    return front, end;
  }
}

function punctuationHandler(sA){
  var punctuation = [' ','.',',','?','!','@','#','$','%','^','&','*','(',')','_','-','+','=','<','>',':',';','"',
  "'","{","}",'|','\\','[',']','~','``'];
  var punc ='';
  var lastChar = sA.pop();
  if(punctuation.indexOf(lastChar)!=-1){
    punc = lastChar;
    return [sA, punc];
  } else{
     return [sA.push(lastChar), punc];
  };
}



function translateWord(str) {
  var sA = str.split("");
  var count = str.length;
  var vowels = ['a','e','i','o','u','y'];
  var punc = punctuationHandler(sA)[1];
  //for loop returns index of first vowel
  for(var i=0; i<vowels.length; i++){
    if((sA.indexOf(vowels[i]) > -1) && ((sA.indexOf(vowels[i]) < count))){
      count = sA.indexOf(vowels[i]);
    }
  }
  //end of sA from vowel to end
  var end = sA.splice(count, sA.length);
  // front of sA until firs vowel
  var front = sA.splice(0, count);
  capitalization(front, end);
  return joinWord(end, front, count, punc)
}

function translateBtnClicked(){
  $('#output').empty();
  $('#output').show();
  var input = $("#input").val();
  input = input.split(" ");
  var output = "";
  for(var i = 0; i <input.length; i++){
    if(Number(input[i])){
      output += input[i] + " ";
    } else {
      var word = translateWord(input[i]);
      output += word + " ";
    }
  }
  $('#output').append("<div>"+ output + "</div>");
}

$("#translateBtn").click(function(){
  translateBtnClicked();
});

// add keybinding for enter to trigger submit click
$('#input').keypress(function(e){
  if(e.which == 13){//Enter key pressed
    $('#translateBtn').click();//Trigger search button click event
  }
});

}(jQuery));
