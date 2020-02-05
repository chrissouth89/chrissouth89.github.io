$(() => {
    $("form").on("submit", (event)=>{
        event.preventDefault();

        const userInput = $('input[type="text"]').val();

        $.ajax({
            url:'https://api.open5e.com/classes/' + userInput
        }).then(
            (data) => {
            $('#overview').html(data.desc)
            $('#hitdice').html(data.hit_dice)
            $('#startinghp').html(data.hp_at_1st_level)
            $('#savingthrows').html(data.prof_saving_throws)
            $('#startingskills').html(data.prof_skills)
            $('#equipment').html(data.equipment)
        },
        (data) => {
            console.log("Something went wrong")
        }
        )
    })

var face = 1;

var show = function() {
  $('.cube1').attr('class', 'cube cube1 show'+ face);
  if(face == 6) {
    face = 1;
  } else {
    face ++; 
  }
};

var show2 = function() {
  $('.cube2').attr('class', 'cube cube2 show'+ face);
  if(face == 6) {
    face = 1;
  } else {
    face ++; 
  }
};

$('.cube1').on('click', show);
$('.cube2').on('click', show2);
});