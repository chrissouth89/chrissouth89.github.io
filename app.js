// on blur event

// local storage set value
var charName = $('#charname').val();
var playerName = $('#playername').val();
var charClass = $('#class').val();
var race = $('#race').val();
var background = $('#back').val();
var alignment = $('#align').val();
var exp = $('#exp').val();
var level = $('#level').val();
localStorage.setItem("charname", charName);
localStorage.setItem("playername", playerName);
localStorage.setItem("class", charClass);
localStorage.setItem("race", race);
localStorage.setItem("back", background);
localStorage.setItem("align", alignment);
localStorage.setItem("exp", exp);
localStorage.setItem("level", level);


// show dice animated or show dice spinning without numbers landing on number shown or choosing math.random showing spinning dice.