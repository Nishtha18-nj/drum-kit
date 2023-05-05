//select the button and add event listener
//it will select only first button 
//no paranthesis - with the event listerner because if th epage is reloaded it will directly  execute th efunction but since we want the event listerner to happen and then only we want this things to happen 

//button press
var numberOfDrum = document.querySelectorAll(".drum").length
for (var i = 0 ; i < numberOfDrum ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
       var buttonInnerhtml = this.innerHTML;
       makeSound(buttonInnerhtml);
       buttonAnimation(buttonInnerhtml);
    });
}
  document.addEventListener("keypress" , function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);
  });
 
  //keyboard press
  function makeSound(key) {
    switch(key)
    {
        case "w":
            
            var crash =  new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "a":
           
            var kick =  new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;

        case "s":
           
            var snare =  new Audio('sounds/snare.mp3');
            snare.play();
        break;

        case "d":
           
            var tom1 =  new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "j":
            
            var tom2 =  new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
         
        case "k":
           
            var tom3 =  new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "l":
           
            var tom4 =  new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

            default:
        console.log(buttonInnerhtml)
    }
  }

function buttonAnimation (currentKey) {
 var activeButton = document.querySelector("." + currentKey);
 activeButton.classList.add("pressed");

 setTimeout(function () 
 {
    activeButton.classList.remove("pressed");
 }, 100);

}



// var audio =  new Audio('sounds/crash.mp3');
// audio.play();

