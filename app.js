$(() => {
    $.ajax({
        url: "http://www.dnd5eapi.co/api/classes",
        type: "GET",
        

    }).done(function(data) {
        console.log("Retrieved " + data + " records from dataset!")
        console.log(data);
    });
});
// on blur event

// local storage set value
// const addClass = (addClass) => {
//     addClass.preventDefault();
//     let addClass = {
//         id: "class",
        
//     }

// }

function rollDice() {
    const dice = [...document.querySelectorAll(".die-list")];
    dice.forEach(die => {
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(1, 6);
    });
  }
  
  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }
  
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  document.getElementById("roll-button").addEventListener("click", rollDice);


// show dice animated or show dice spinning without numbers landing on number shown or choosing math.random showing spinning dice.