//import { Howl } from '../node_modules/howler/dist/howler.js'
import * as Howler from '../node_modules/howler/dist/howler.js';

var monolith_sphere=document.getElementById("toggler");
var monolith=document.getElementById("toggler");

var sound = new Howl({
    //src: ['sound.webm', 'sound.mp3', 'sound.wav'],
    src: ['/res/brian_eno.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  var toggle = new Howl({
    src: ['res/Some.mp3'],
    sprite: {
      laser: [14200, 5000],
      laser2: [10900, 2000]
    }
  });
  function toggleDream(){
   var d=Math.floor((Math.random() * 3) + 1);
    monolith_sphere.style.background="url('/res/abs"+d+".gif')";
    monolith_sphere.style.backgroundSize="cover";
    

    monolith_sphere.classList.add("monolith__sphere--tap");
    

    setTimeout(function(){
      monolith_sphere.classList.remove("monolith__sphere--tap");
    }, 400);
    
  }
  monolith_sphere.addEventListener("click", function(){
    toggleDream();
    console.log("clicked");
    toggle.play('laser2');
    
 
  });

  

 
  // Shoot the laser!
 // toggle.play('laser');

 