console.log("pet script running")

const stats = document.querySelector("#stats")
const status = document.querySelector("#statusLabel")
console.log(status.innerHTML)
const petButton = document.querySelector("#pet-button")
const feedButton = document.querySelector("#feed-button")
const playButton = document.querySelector("#play-button")
const bubbleBeam = document.querySelector("#bubble-beam")

const imageDiv = document.querySelector("#image-container")
//console.log("imageCont")

let count1 = 0

let happiness = 50
let hunger = 50
let energy = 50


petButton.addEventListener('click', (e) =>{
  imageDiv.innerHTML = '<img src="img/happySquirtle.jpg"/>'
  happiness += 5
  energy += 5
  hunger += 2
  updateLabels()
    if (happiness > 100 && happiness < 150){
    status.innerHTML = '<h3 class="sub-heading">I am so happy!</h3>'
  } else if (happiness > 150){
    status.innerHTML = '<h3 class="sub-heading"> I am too happy!.</h3>'
  } else if (happiness < 100){
    status.innerHTML = '<h3 class="sub-heading"> I need more pet!</h3>'
  }
})
  

feedButton.addEventListener('click', (e) =>{
  imageDiv.innerHTML = '<img src="img/eatingSquirtle.jpg"/>'
  happiness += 5
  energy += 5
  hunger -= 15
  updateLabels()
    if (hunger > 0 && hunger < 25){
    status.innerHTML = '<h3 class="sub-heading">Feeling full!</h3>'
  } else if (hunger > 25){
    status.innerHTML = '<h3 class="sub-heading"> I am hungry!</h3>'
    imageDiv.innerHTML = '<img src="img/hungrySquirtle.jpg"/>'
    } 
})

playButton.addEventListener('click', (e) =>{
  imageDiv.innerHTML = '<img src="img/playingSquirtle2.jpg"/>'
  happiness += 2
  energy -= 5
  hunger -= 2
  updateLabels()
  if (energy <= 50){
    status.innerHTML = `<h3 class="sub-heading">I need rest! Please Pet!</h3>`
  }
})

bubbleBeam.addEventListener('click', (e) =>{
  count1 += 1
  if (count1 == 15) {
    status.innerHTML = `<h3 class="sub-heading">Can not beam much more.</h3>`
    imageDiv.innerHTML = `<img src="img/sadSquirtle.jpg" />`
    } else if (count1 > 15 && count1 <= 25) {
      status.innerHTML = '<h3 class="sub-heading">Ran out of MP, no more Bubble Beam.</h3>'
      imageDiv.innerHTML = `<img src="img/grumpySquirtle.jpg" />`
    } else if (count1 == 26 && count1 <=30) {
      status.innerHTML = '<h3 class="sub-heading">Okay, fine, more Bubble Beam!</h3>'
      imageDiv.innerHTML = '<img src="img/bbSquirtle4.png"/>'
    } else if (count1 > 30){
      status.innerHTML = `<h3 class="sub-heading">You had Squirtle use Bubble Beam ${count1} times!</h3>`
      imageDiv.innerHTML = '<img src="img/bbSquirtle4.png"/>'
    }
      else {
      status.innerHTML = `<h3 class="sub-heading">You had Squirtle use Bubble Beam ${count1} times!</h3>`
      imageDiv.innerHTML = '<img src="img/bbSquirtle2.jpg"/>'
  }
  
})

const updateLabels = () => {
    stats.innerHTML = `
      <div class="row">
        <div class="col s2 stats">hunger: ${hunger}</div>
        <div class="col s2">energy: ${energy}</div>
        <div class="col s3">happiness: ${happiness}</div>
      `
}

setInterval(()=>{
    hunger += 7
    happiness -= 7
    energy -= 7
    updateLabels()
}, 1000)


