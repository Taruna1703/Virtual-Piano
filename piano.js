alert("The respective keys written can also play the piano,make sure your caps lock is on before playing.Enjoy!")
window.onload = function() {
var piano = Synth.createInstrument('piano');

$("#key_1").on('click',function(){
    piano.play('C',3,2);
 });
 $('body').on('keypress',function(event){
   if (event.keyCode == 81)
      { piano.play('C',3,2);
   }
  });

$("#key_2").on('click',function(){
    piano.play('D',3,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 87)
     { piano.play('D',3,2);
  }
 });

$("#key_3").on('click',function(){
    piano.play('E',3,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 69)
     { piano.play('E',3,2);
  }
 });

$("#key_4").on('click',function(){
    piano.play('F',3,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 82)
     { piano.play('F',3,2);
  }
 });

$("#key_5").on('click',function(){
    piano.play('G',3,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 84)
     { piano.play('G',3,2);
  }
 });

$("#key_6").on('click',function(){
   piano.play('A',3,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 89)
     { piano.play('A',3,2);
  }
 });

$("#key_7").on('click',function(){
  piano.play('B',3,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 85)
     { piano.play('B',3,2);
  }
 });

$("#key_8").on('click',function(){
  piano.play('C',4,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 73)
     { piano.play('C',4,2);
  }
 });

$("#key_9").on('click',function(){
  piano.play('D',4,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 79)
     { piano.play('D',4,2);
  }
 });

$("#key_10").on('click',function(){
  piano.play('E',4,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 80)
     { piano.play('E',4,2);
  }
 });

$("#key_11").on('click',function(){
  piano.play('F',4,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 91)
     { piano.play('F',4,2);
  }
 });

$("#key_12").on('click',function(){
  piano.play('G',4,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 93)
     { piano.play('G',4,2);
  }
 });

$("#key_13").on('click',function(){
  piano.play('A',4,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 90)
     { piano.play('A',4,2);
  }
 });

$("#key_14").on('click',function(){
  piano.play('B',4,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 88)
     { piano.play('B',4,2);
  }
 });

$("#key_15").on('click',function(){
  piano.play('C',5,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 67)
     { piano.play('C',5,2);
  }
 });

$("#key_16").on('click',function(){
  piano.play('D',5,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 86)
     { piano.play('D',5,2);
  }
 });

$("#key_17").on('click',function(){
  piano.play('E',5,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 66)
     { piano.play('E',5,2);
  }
 });

$("#key_18").on('click',function(){
  piano.play('F',5,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 78)
     { piano.play('F',5,2);
  }
 });

$("#key_19").on('click',function(){
  piano.play('G',5,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 77)
     { piano.play('G',5,2);
  }
 });

$("#key_20").on('click',function(){
  piano.play('A',5,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 44)
     { piano.play('A',5,2);
  }
 });

$("#key_21").on('click',function(){
  piano.play('B',5,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 46)
     { piano.play('B',5,2);
  }
 });

$("#key-1").on('click',function(){
  piano.play('C#',3,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 50)
     { piano.play('C#',3,2);
  }
 });

$("#key-2").on('click',function(){
  piano.play('D#',3,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 51)
     { piano.play('D#',3,2);
  }
 });

$("#key-3").on('click',function(){
  piano.play('F#',3,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 53)
     { piano.play('F#',3,2);
  }
 });

$("#key-4").on('click',function(){
  piano.play('G#',3,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 54)
     { piano.play('G#',3,2);
  }
 });

$("#key-5").on('click',function(){
  piano.play('A#',3,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 55)
     { piano.play('A#',3,2);
  }
 });

$("#key-6").on('click',function(){
  piano.play('C#',4,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 57)
     { piano.play('C#',4,2);
  }
 });

$("#key-7").on('click',function(){
  piano.play('D#',4,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 48)
     { piano.play('D#',4,2);
  }
 });

$("#key-8").on('click',function(){
  piano.play('F#',4,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 61)
     { piano.play('F#',4,2);
  }
 });

$("#key-9").on('click',function(){
  piano.play('G#',4,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 65)
     { piano.play('G#',4,2);
  }
 });

$("#key-10").on('click',function(){
  piano.play('A#',4,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 83)
     { piano.play('A#',4,2);
  }
 });

$("#key-11").on('click',function(){
  piano.play('C#',5,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 70)
     { piano.play('C#',5,2);
  }
 });

$("#key-12").on('click',function(){
  piano.play('D#',5,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 71)
     { piano.play('D#',5,2);
  }
 });

$("#key-13").on('click',function(){
  piano.play('F#',5,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 74)
     { piano.play('F#',5,2);
  }
 });

$("#key-14").on('click',function(){
  piano.play('G#',5,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 75)
     { piano.play('G#',5,2);
  }
 });

$("#key-15").on('click',function(){
  piano.play('A#',5,2);
});
$('body').on('keypress',function(event){
  if (event.keyCode == 76)
     { piano.play('A#',5,2);
  }
 });


}
