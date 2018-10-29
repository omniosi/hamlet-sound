var power = false

function start(){
  power = !power

  console.log('power = ', power)
}
// each button click triggers invisible audio file play once
var soundOne = document.getElementById('soundOne')
  , soundTwo = document.getElementById('soundTwo')
  , soundThree = document.getElementById('soundThree')
  , soundFour = document.getElementById('soundFour')
  , soundFive = document.getElementById('soundFive')
  , soundSix = document.getElementById('soundSix')

function stopAllSounds(){
  soundOne.pause();soundOne.currentTime = 0
  soundTwo.pause();soundTwo.currentTime = 0
  soundThree.pause();soundThree.currentTime = 0
  soundFour.pause();soundFour.currentTime = 0
  soundFive.pause();soundFive.currentTime = 0
  soundSix.pause();soundSix.currentTime = 0
}
function playOne(){
  stopAllSounds()
  soundOne.play()
  // console.log('playOne clicked!')
}
function playTwo(){stopAllSounds();soundTwo.play()}
function playThree(){stopAllSounds();soundThree.play()}
function playFour(){stopAllSounds();soundFour.play()}
function playFive(){stopAllSounds();soundFive.play()}
function playSix(){stopAllSounds();soundSix.play()}

// video on complete event triggers function to replace current video source with next in line

// when correct audio selected, next video load and replace. current button disabled