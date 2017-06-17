(function ($) {

function translateWord(str) {
  var output = document.getElementById('output');
  var sA = str.split("");
  var count = str.length;
  var vowels = ['a','e','i','o','u','y'];
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
  //string of end + front
  str = end + front;
  //strip out all commas
  str = str.replace(/,/g,'');
  if(count===0){
    return(str + 'way');
  } else{
  return  str +'ay';
  }
}

function translateBtnClicked(){
  console.log("button clicked");
  var input = $("input").val();
  input = input.split(" ");
  console.log(input);
  var output = "";
  for(var i = 0; i <input.length; i++){
    var word = translateWord(input[i]);
    output += word + " ";
    console.log("Output: " + output);
  }

  $('#output').append("<div>"+ output + "</div>");
}

$("#translateBtn").click(function(){
  translateBtnClicked();
})

}(jQuery));
