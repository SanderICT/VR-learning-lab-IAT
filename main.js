window.onload = () =>{
const archie = document.getElementById('js--archie');
const boy = document.getElementsByClassName('js--boy');
const jongen = document.getElementById('js--boy');

const blind = document.getElementById('js--blind');

const vraagwolk = document.getElementById('js--vraagw');
const vraagtekst = document.getElementById('js--vraagt');
const antwoordjawolk = document.getElementById('js--antwoordjaw');
const antwoordjatekst = document.getElementById('js--antwoordjat');
const antwoordneewolk = document.getElementById('js--antwoordneew');
const antwoordneetekst = document.getElementById('js--antwoordneet');
const gefeliciteerdwolk = document.getElementById('js--gw');
const gefeliciteerdtekst = document.getElementById('js--gt');
const Bluep = document.getElementById('js--blue_P');
const Greenp = document.getElementById('js--green_P');
const Orangep = document.getElementById('js--orange_P');
const Purplep = document.getElementById('js--purple_P');
const HUD = document.getElementById('js--HUD')



let verstop1 = 0
let stop1 = 0

const antwoordja = document.getElementsByClassName('js--antwoordja');
const antwoordnee = document.getElementsByClassName('js--antwoordnee');


// for(let i = 0; i < boy.length; i++){
//     boy[i].addEventListener('click', function(evt){
//         let att = document.createAttribute("animation");
//         att.value = "property: position; easing: linear; dur: 2000; to: 7 1 -20";
//         archie.setAttribute('animation', att.value);
//     })
//   }

  //Jongen laten praten
  for(let i = 0; i < boy.length; i++){
    boy[i].addEventListener('click', function(evt){
      verstop1 = verstop1 + 1
      if(verstop1 == 1){
        let posvraagw = document.createAttribute("animation");
      posvraagw.value = "property: position; easing: linear; dur: 1; to: 11 2.5 -20";
      vraagwolk.setAttribute('animation', posvraagw.value);
      let posvraagt = document.createAttribute("animation");
      posvraagt.value = "property: position; easing: linear; dur: 1; to: 12 2.5 -20.85";
      vraagtekst.setAttribute('animation', posvraagt.value);
      let planeBlue = document.createAttribute("animation");
      planeBlue.value = "property: position; easing: linear; dur: 1; to: -0.52 -0.68 -1";
      Bluep.setAttribute('animation', planeBlue.value);
      let planeGreen = document.createAttribute("animation");
      planeGreen.value = "property: position; easing: linear; dur: 1; to: 0.72 -0.68 -1";
      Greenp.setAttribute('animation', planeGreen.value);
      let planeOrange = document.createAttribute("animation");
      planeOrange.value = "property: position; easing: linear; dur: 1; to: -0.52 -0.38 -1";
      Orangep.setAttribute('animation', planeOrange.value);
      let planePurple = document.createAttribute("animation");
      planePurple.value = "property: position; easing: linear; dur: 1; to: 0.72 -0.38 -1";
      Purplep.setAttribute('animation', planePurple.value);

      let hud = document.createAttribute("animation");
      hud.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      HUD.setAttribute('animation', hud.value);

      // let posantwoordjaw = document.createAttribute("animation");
      // posantwoordjaw.value = "property: position; easing: linear; dur: 1; to: 5.9 1.9 -20";
      // antwoordjawolk.setAttribute('animation', posantwoordjaw.value);
      let posantwoordjat = document.createAttribute("animation");
      posantwoordjat.value = "property: position; easing: linear; dur: 1; to: -0.88 -0.68 -1";
      antwoordjatekst.setAttribute('animation', posantwoordjat.value);

      // let posantwoordneew = document.createAttribute("animation");
      // posantwoordneew.value = "property: position; easing: linear; dur: 1; to: 4.1 1.9 -20";
      // antwoordneewolk.setAttribute('animation', posantwoordneew.value);
      let posantwoordneet = document.createAttribute("animation");
      posantwoordneet.value = "property: position; easing: linear; dur: 1; to: 0.42 -0.68 -1";
      antwoordneetekst.setAttribute('animation', posantwoordneet.value);
      }
      if(verstop1 == 2 && stop1 == 0){
        verstop1 = 1
      }

      if(verstop1 == 2 && stop1 == 1){
        let jongena = document.createAttribute("animation");
        jongena.value = "property: position; easing: linear; dur: 3000; to: -18 0.7 20";
        jongen.setAttribute('animation', jongena.value);
      }

      if(verstop1 == 3){
        let gw = document.createAttribute("animation");
        gw.value = "property: position; easing: linear; dur: 1; to: -18 2.5 20";
        gefeliciteerdwolk.setAttribute('animation', gw.value);

        let gt = document.createAttribute("animation");
        gt.value = "property: position; easing: linear; dur: 1; to: -16.6 2.5 20";
        gefeliciteerdtekst.setAttribute('animation', gt.value);
      }
      console.log(verstop1);
    })
  }

  for(let i = 0; i < antwoordja.length; i++){
    antwoordja[i].addEventListener('click', function(evt){
      let planeBlueA = document.createAttribute("animation");
      planeBlueA.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      Bluep.setAttribute('animation', planeBlueA.value);
      let planeGreenA = document.createAttribute("animation");
      planeGreenA.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      Greenp.setAttribute('animation', planeGreenA.value);
      let planeOrange = document.createAttribute("animation");
      planeOrange.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      Orangep.setAttribute('animation', planeOrange.value);
      let planePurple = document.createAttribute("animation");
      planePurple.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      Purplep.setAttribute('animation', planePurple.value);

      let posvraagw = document.createAttribute("animation");
      posvraagw.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      vraagwolk.setAttribute('animation', posvraagw.value);
      let posvraagt = document.createAttribute("animation");
      posvraagt.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      vraagtekst.setAttribute('animation', posvraagt.value);

      // let posantwoordjaw = document.createAttribute("animation");
      // posantwoordjaw.value = "property: position; easing: linear; dur: 1; to: -50 1.9 -50";
      // antwoordjawolk.setAttribute('animation', posantwoordjaw.value);
      let posantwoordjat = document.createAttribute("animation");
      posantwoordjat.value = "property: position; easing: linear; dur: 1; to: -50 1.9 -50";
      antwoordjatekst.setAttribute('animation', posantwoordjat.value);

      // let posantwoordneew = document.createAttribute("animation");
      // posantwoordneew.value = "property: position; easing: linear; dur: 1; to: -50 1.9 -50";
      // antwoordneewolk.setAttribute('animation', posantwoordneew.value);
      let posantwoordneet = document.createAttribute("animation");
      posantwoordneet.value = "property: position; easing: linear; dur: 1; to: -50 1.9 -50";
      antwoordneetekst.setAttribute('animation', posantwoordneet.value);

      let hud = document.createAttribute("animation");
      hud.value = "property: position; easing: linear; dur: 1; to: -1.2 -0.5 -1";
      HUD.setAttribute('animation', hud.value);

      let jongena = document.createAttribute("animation");
      jongena.value = "property: position; easing: linear; dur: 3000; to: -18 0.7 -28";
      jongen.setAttribute('animation', jongena.value);
      jongen.setAttribute('rotation', "0 240 0");
      stop1 = 1
    })
  }

  for(let i = 0; i < antwoordnee.length; i++){
    antwoordnee[i].addEventListener('click', function(evt){
      let posvraagw = document.createAttribute("animation");
      posvraagw.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      vraagwolk.setAttribute('animation', posvraagw.value);
      let posvraagt = document.createAttribute("animation");
      posvraagt.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      vraagtekst.setAttribute('animation', posvraagt.value);

      let planeBlueA = document.createAttribute("animation");
      planeBlueA.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      Bluep.setAttribute('animation', planeBlueA.value);
      let planeGreenA = document.createAttribute("animation");
      planeGreenA.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      Greenp.setAttribute('animation', planeGreenA.value);
      let planeOrange = document.createAttribute("animation");
      planeOrange.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      Orangep.setAttribute('animation', planeOrange.value);
      let planePurple = document.createAttribute("animation");
      planePurple.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      Purplep.setAttribute('animation', planePurple.value);

      // let posantwoordjaw = document.createAttribute("animation");
      // posantwoordjaw.value = "property: position; easing: linear; dur: 1; to: -50 1.9 -50";
      // antwoordjawolk.setAttribute('animation', posantwoordjaw.value);
      let posantwoordjat = document.createAttribute("animation");
      posantwoordjat.value = "property: position; easing: linear; dur: 1; to: -50 1.9 -50";
      antwoordjatekst.setAttribute('animation', posantwoordjat.value);

      // let posantwoordneew = document.createAttribute("animation");
      // posantwoordneew.value = "property: position; easing: linear; dur: 1; to: -50 1.9 -50";
      // antwoordneewolk.setAttribute('animation', posantwoordneew.value);
      let posantwoordneet = document.createAttribute("animation");
      posantwoordneet.value = "property: position; easing: linear; dur: 1; to: -50 1.9 -50";
      antwoordneetekst.setAttribute('animation', posantwoordneet.value);
      let hud = document.createAttribute("animation");
      hud.value = "property: position; easing: linear; dur: 1; to: -1.2 -0.5 -1";
      HUD.setAttribute('animation', hud.value);

      verstop1 = 0
    })
  }
}

// + this.getAttribute('position').x + " 1.6 " + this.getAttribute('position').z