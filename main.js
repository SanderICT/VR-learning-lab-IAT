window.onload = () =>{

const delay = ms => new Promise(res => setTimeout(res, ms));
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

const gvp = document.getElementById('js--gvp');
const gv1 = document.getElementById('js--gv1');
const gv2 = document.getElementById('js--gv2');
const gv3 = document.getElementById('js--gv3');

const awolk = document.getElementById('js--aaa');
const bwolk = document.getElementById('js--aab');
const cwolk = document.getElementById('js--aac');
const atekst = document.getElementById('js--aat1');
const btekst = document.getElementById('js--aat2');
const ctekst = document.getElementById('js--aat3');

let verstop1 = 0
let stop1 = 0

const antwoordja = document.getElementsByClassName('js--antwoordja');
const antwoordnee = document.getElementsByClassName('js--antwoordnee');

const antwoorda = document.getElementsByClassName('js--aaa');
const antwoordb = document.getElementsByClassName('js--aab');
const antwoordc = document.getElementsByClassName('js--aac');

const antwoordaid = document.getElementById('js--stat1');
const antwoordbid = document.getElementById('js--stat2');
const antwoordcid = document.getElementById('js--stat3');

const statachtergrond = document.getElementById('js--statachtergrond');
const statimg = document.getElementById('js--statimg');

const stopfunctie = async () => {
  await delay(3000);
  jongen.setAttribute('rotation', "0 90 0");
};
const stopfunctie2 = async () => {
  await delay(3000);
  jongen.setAttribute('rotation', "0 180 0");
};

const maakblind = async () => {
  let blinda = document.createAttribute("animation");
  blinda.value = "property: position; easing: linear; dur: 6000; to: -1.2 -0.5 -1 dir:alternate";
  blind.setAttribute('animation', blinda.value)
  blinda.value = "property: position; easing: linear; dur: 4000; to: -7 -0.5 -1 dir:alternate";
  blind.setAttribute('animation', blinda.value)
};

const maakblind2 = async () => {
  let blinda = document.createAttribute("animation");
  blinda.value = "property: position; easing: linear; dur: 6000; to: -1.2 -0.5 -1 dir:alternate";
  blind.setAttribute('animation', blinda.value)
  blinda.value = "property: position; easing: linear; dur: 4000; to: 7 -0.5 -1 dir:alternate";
  blind.setAttribute('animation', blinda.value)
};

const statistiek = async () => {
  let stata = document.createAttribute("animation");
  stata.value = "property: position; easing: linear; dur: 1; to: 1.1 -0.5 -1.4";
  statachtergrond.setAttribute('animation', stata.value);
  let stati = document.createAttribute("animation");
  stati.value = "property: position; easing: linear; dur: 1; to: 1.1 -0.6 -1.4";
  statimg.setAttribute('animation', stati.value);
};

const antwoordastat = async () => {
  let antwoordatje = document.createAttribute("animation");
  antwoordatje.value = "property: position; easing: linear; dur: 1; to: 0.7 -0.2 -1.4";
  antwoordaid.setAttribute('animation', antwoordatje.value);
};

const antwoordbstat = async () => {
  let antwoordbtje = document.createAttribute("animation");
  antwoordbtje.value = "property: position; easing: linear; dur: 1; to: 0.7 -0.2 -1.4";
  antwoordbid.setAttribute('animation', antwoordbtje.value);
};

const antwoordcstat = async () => {
  let antwoordctje = document.createAttribute("animation");
  antwoordctje.value = "property: position; easing: linear; dur: 1; to: 0.7 -0.2 -1.4";
  antwoordcid.setAttribute('animation', antwoordctje.value);
};

const resetarchie = async () => {
  let gw = document.createAttribute("animation");
  gw.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
  gefeliciteerdwolk.setAttribute('animation', gw.value);

  let gt = document.createAttribute("animation");
  gt.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
  gefeliciteerdtekst.setAttribute('animation', gt.value);

  let att = document.createAttribute("animation");
  att.value = "property: position; easing: linear; dur: 2000; to: -10 1.7 -50";
  archie.setAttribute('animation', att.value);

  let tekstwolk = document.createAttribute("animation");
  tekstwolk.value = "property: position; easing: linear; dur: 2000; to: -50 3.5 -50";
  gvp.setAttribute('animation', tekstwolk.value);

  let tekst1 = document.createAttribute("animation");
  tekst1.value = "property: position; easing: linear; dur: 2000; to: -50 3.9 -50";
  gv1.setAttribute('animation', tekst1.value);
        
  let tekst2 = document.createAttribute("animation");
  tekst2.value = "property: position; easing: linear; dur: 2000; to: -50 3.5 -50";
  gv2.setAttribute('animation', tekst2.value);

  let tekst3 = document.createAttribute("animation");
  tekst3.value = "property: position; easing: linear; dur: 2000; to: -50 3.1 -50";
  gv3.setAttribute('animation', tekst3.value);

  let posaaw = document.createAttribute("animation");
  posaaw.value = "property: position; easing: linear; dur: 2000; to: -50 2.1 -50";
  awolk.setAttribute('animation', posaaw.value);
  let posaat = document.createAttribute("animation");
  posaat.value = "property: position; easing: linear; dur: 2000; to: -50 2.1  -50";
  atekst.setAttribute('animation', posaat.value);

  let posabw = document.createAttribute("animation");
  posabw.value = "property: position; easing: linear; dur: 2000; to: -50 1.4 -50";
  bwolk.setAttribute('animation', posabw.value);
  let posabt = document.createAttribute("animation");
  posabt.value = "property: position; easing: linear; dur: 2000; to: -50 1.4 -50";
  btekst.setAttribute('animation', posabt.value);

  let posacw = document.createAttribute("animation");
  posacw.value = "property: position; easing: linear; dur: 2000; to: -50 0.7 -50";
  cwolk.setAttribute('animation', posacw.value);
  let posact = document.createAttribute("animation");
  posact.value = "property: position; easing: linear; dur: 2000; to: -50 0.7 -50";
  ctekst.setAttribute('animation', posact.value);
};


//Jongen laten praten
  for(let i = 0; i < boy.length; i++){
    boy[i].addEventListener('click', function(evt){
      verstop1 = verstop1 + 1
      if(verstop1 == 1){
        let posvraagw = document.createAttribute("animation");
      posvraagw.value = "property: position; easing: linear; dur: 1; to: 5 2.5 -20";
      vraagwolk.setAttribute('animation', posvraagw.value);
      let posvraagt = document.createAttribute("animation");
      posvraagt.value = "property: position; easing: linear; dur: 1; to: 6.4 2.5 -20";
      vraagtekst.setAttribute('animation', posvraagt.value);

      let posantwoordjaw = document.createAttribute("animation");
      posantwoordjaw.value = "property: position; easing: linear; dur: 1; to: 5.9 1.9 -20";
      antwoordjawolk.setAttribute('animation', posantwoordjaw.value);
      let posantwoordjat = document.createAttribute("animation");
      posantwoordjat.value = "property: position; easing: linear; dur: 1; to: 6.4 1.9 -20";
      antwoordjatekst.setAttribute('animation', posantwoordjat.value);

      let posantwoordneew = document.createAttribute("animation");
      posantwoordneew.value = "property: position; easing: linear; dur: 1; to: 4.1 1.9 -20";
      antwoordneewolk.setAttribute('animation', posantwoordneew.value);
      let posantwoordneet = document.createAttribute("animation");
      posantwoordneet.value = "property: position; easing: linear; dur: 1; to: 4.5 1.9 -20";
      antwoordneetekst.setAttribute('animation', posantwoordneet.value);
      }

      //Glitch stoppen
      if(verstop1 == 2 && stop1 == 0){
        verstop1 = 1
      }

      //Eerste verstop gedeelte
      if(verstop1 == 2 && stop1 == 1){
        let jongena = document.createAttribute("animation");
        jongena.value = "property: position; easing: linear; dur: 3000; to: -18 0.7 20";
        jongen.setAttribute('animation', jongena.value);
        jongen.setAttribute('rotation', "0 0 0");
        maakblind2();
        stopfunctie2();
      }

      //Gefeliciteerd gedeelte/archie
      if(verstop1 == 3){
        let gw = document.createAttribute("animation");
        gw.value = "property: position; easing: linear; dur: 1; to: -18 2.5 20";
        gefeliciteerdwolk.setAttribute('animation', gw.value);

        let gt = document.createAttribute("animation");
        gt.value = "property: position; easing: linear; dur: 1; to: -16.6 2.5 20";
        gefeliciteerdtekst.setAttribute('animation', gt.value);

        let att = document.createAttribute("animation");
        att.value = "property: position; easing: linear; dur: 2000; to: -20.6 1.7 20";
        archie.setAttribute('animation', att.value);

        let tekstwolk = document.createAttribute("animation");
        tekstwolk.value = "property: position; easing: linear; dur: 2000; to: -23 3.5 20";
        gvp.setAttribute('animation', tekstwolk.value);

        let tekst1 = document.createAttribute("animation");
        tekst1.value = "property: position; easing: linear; dur: 2000; to: -21.8 3.9 20";
        gv1.setAttribute('animation', tekst1.value);
        
        let tekst2 = document.createAttribute("animation");
        tekst2.value = "property: position; easing: linear; dur: 2000; to: -21.8 3.5 20";
        gv2.setAttribute('animation', tekst2.value);

        let tekst3 = document.createAttribute("animation");
        tekst3.value = "property: position; easing: linear; dur: 2000; to: -21.8 3.1 20";
        gv3.setAttribute('animation', tekst3.value);

        let posaaw = document.createAttribute("animation");
        posaaw.value = "property: position; easing: linear; dur: 2000; to: -23 2.1 20";
        awolk.setAttribute('animation', posaaw.value);
        let posaat = document.createAttribute("animation");
        posaat.value = "property: position; easing: linear; dur: 2000; to: -21.8 2.1  20";
        atekst.setAttribute('animation', posaat.value);

        let posabw = document.createAttribute("animation");
        posabw.value = "property: position; easing: linear; dur: 2000; to: -23 1.4 20";
        bwolk.setAttribute('animation', posabw.value);
        let posabt = document.createAttribute("animation");
        posabt.value = "property: position; easing: linear; dur: 2000; to: -21.8 1.4 20";
        btekst.setAttribute('animation', posabt.value);

        let posacw = document.createAttribute("animation");
        posacw.value = "property: position; easing: linear; dur: 2000; to: -23 0.7 20";
        cwolk.setAttribute('animation', posacw.value);
        let posact = document.createAttribute("animation");
        posact.value = "property: position; easing: linear; dur: 2000; to: -21.8 0.7 20";
        ctekst.setAttribute('animation', posact.value);
      }
      console.log(verstop1);
    })
  }

  //Antwoord ja ingeklikt
  for(let i = 0; i < antwoordja.length; i++){
    antwoordja[i].addEventListener('click', function(evt){
      let posvraagw = document.createAttribute("animation");
      posvraagw.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      vraagwolk.setAttribute('animation', posvraagw.value);
      let posvraagt = document.createAttribute("animation");
      posvraagt.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      vraagtekst.setAttribute('animation', posvraagt.value);

      let posantwoordjaw = document.createAttribute("animation");
      posantwoordjaw.value = "property: position; easing: linear; dur: 1; to: -50 1.9 -50";
      antwoordjawolk.setAttribute('animation', posantwoordjaw.value);
      let posantwoordjat = document.createAttribute("animation");
      posantwoordjat.value = "property: position; easing: linear; dur: 1; to: -50 1.9 -50";
      antwoordjatekst.setAttribute('animation', posantwoordjat.value);

      let posantwoordneew = document.createAttribute("animation");
      posantwoordneew.value = "property: position; easing: linear; dur: 1; to: -50 1.9 -50";
      antwoordneewolk.setAttribute('animation', posantwoordneew.value);
      let posantwoordneet = document.createAttribute("animation");
      posantwoordneet.value = "property: position; easing: linear; dur: 1; to: -50 1.9 -50";
      antwoordneetekst.setAttribute('animation', posantwoordneet.value);

      let jongena = document.createAttribute("animation");
      jongena.value = "property: position; easing: linear; dur: 3000; to: -18 0.7 -28";
      jongen.setAttribute('animation', jongena.value);
      stop1 = 1

      maakblind();
      stopfunctie();

    })
  }

  //Antwoord nee ingeklikt
  for(let i = 0; i < antwoordnee.length; i++){
    antwoordnee[i].addEventListener('click', function(evt){
      let posvraagw = document.createAttribute("animation");
      posvraagw.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      vraagwolk.setAttribute('animation', posvraagw.value);
      let posvraagt = document.createAttribute("animation");
      posvraagt.value = "property: position; easing: linear; dur: 1; to: -50 2.5 -50";
      vraagtekst.setAttribute('animation', posvraagt.value);

      let posantwoordjaw = document.createAttribute("animation");
      posantwoordjaw.value = "property: position; easing: linear; dur: 1; to: -50 1.9 -50";
      antwoordjawolk.setAttribute('animation', posantwoordjaw.value);
      let posantwoordjat = document.createAttribute("animation");
      posantwoordjat.value = "property: position; easing: linear; dur: 1; to: -50 1.9 -50";
      antwoordjatekst.setAttribute('animation', posantwoordjat.value);

      let posantwoordneew = document.createAttribute("animation");
      posantwoordneew.value = "property: position; easing: linear; dur: 1; to: -50 1.9 -50";
      antwoordneewolk.setAttribute('animation', posantwoordneew.value);
      let posantwoordneet = document.createAttribute("animation");
      posantwoordneet.value = "property: position; easing: linear; dur: 1; to: -50 1.9 -50";
      antwoordneetekst.setAttribute('animation', posantwoordneet.value);
      verstop1 = 0
    })
  }

  //Antwoord a ingeklikt
  for(let i = 0; i < antwoorda.length; i++){
    antwoorda[i].addEventListener('click', function(evt){
      statistiek();
      resetarchie();
      antwoordastat();
    })
  }

  //Antwoord b ingeklikt
  for(let i = 0; i < antwoordb.length; i++){
    antwoordb[i].addEventListener('click', function(evt){
      statistiek();
      resetarchie();
      antwoordbstat();
    })
  }

  //Antwoord c ingeklikt
  for(let i = 0; i < antwoordc.length; i++){
    antwoordc[i].addEventListener('click', function(evt){
      statistiek();
      resetarchie();
      antwoordcstat();
    })
  }
}

  

// + this.getAttribute('position').x + " 1.6 " + this.getAttribute('position').z