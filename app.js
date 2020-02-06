$(() => {
	$("form").on("submit", event => {
		event.preventDefault()

		const userInput = $('input[type="text"]').val()

		$.ajax({
			url: "https://api.open5e.com/classes/" + userInput,
		}).then(
			data => {
				console.log(data)
				$("#overview h1 strong span").html(data.desc)
				$("#hitdice h1 strong span").html(data.hit_dice)
				$("#startinghp h1 strong span").html(data.hp_at_1st_level)
				$("#savingthrows h1 strong span").html(data.prof_saving_throws)
				$("#startingskills h1 strong span").html(data.prof_skills)
				$("#equipment h1 strong span").html(data.equipment)
			},
			data => {
				console.log("Something went wrong")
			}
		)
	})

	var face = 1

	var show = function() {
		$(".cube1").attr("class", "cube cube1 show" + face)
		if (face == 6) {
			face = 1
		} else {
			face++
		}
	}

	var show2 = function() {
		$(".cube2").attr("class", "cube cube2 show" + face)
		if (face == 6) {
			face = 1
		} else {
			face++
		}
	}

	$(".cube1").on("click", show)
	$(".cube2").on("click", show2)
})
