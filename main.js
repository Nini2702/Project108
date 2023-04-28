function start(){
  navigator.mediaDevices.getUserMedia({audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rw5UottAX/model.json', modelReady);

}
function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var cow = 0;
var lion = 0;
function gotResults(error,results){
  if(error){
      console.error(error);
  }
  else{
      console.log(results);
        random_number_r = Math.floor(Math.random()* 255)+1;
        random_number_g = Math.floor(Math.random()* 255)+1;
        random_number_b = Math.floor(Math.random()* 255)+1;

        document.getElementById("result_text").innerHTML = 'Detected voice is of  - '+ results[0].label;
        document.getElementById("result_detect").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat+ ' Detected Cow - '+cow+' Detected Lion - '+lion;
        document.getElementById("result_text").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_detect").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('result_image');

        if (results[0].label == "bark") {
          img.src = 'dog.jpg';
          dog = dog+1;
        } else if (results[0].label == "meow") {
          img.src = 'cat.png';
          cat = cat + 1;
        } else if (results[0].label == "moo") {
          img.src = 'cow.jpg';
          cow = cow + 1;
        }else if (results[0].label == "roar") {
          img.src = 'lion.png';
          lion = lion + 1;
        }else{
          img.src = 'ear.png';
        }
  }
}