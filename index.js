var beatpack = [
	{
		name: "Belki",
		artist: "Dedublüman - Belki - Akustik",
		src: "mp3indirdur-Dedubluman-Belki.mp3",
		thumbnail: "url(https://i.ytimg.com/vi/Pmn4ooPjX6E/maxresdefault.jpg)"
	},
	{
		name: 'Unutmak öyle kolay mı sandın?',
		artist: "Semicenk",
		src: "mp3indirdur-Semicenk-Unutmak-Oyle-Kolay-mi-Sandin.mp3",
		thumbnail: "url(https://a10.gaanacdn.com/gn_img/albums/0wrb4kNWLg/rb4qJYJlKL/size_l.jpg)"
	},
	{
		name: 'Birader',
		artist: "Heijan feat. Muti",
		src: "mp3indirdur-Heijan-Birader-ft-Muti.mp3",
		thumbnail: "url(https://i0.wp.com/www.cevirce.com/lyrics/wp-content/uploads/2022/04/heijan-muti-birader-sarki-sozleri.jpg?fit=800%2C800&ssl=1)"
	},
	{
		name: "Dip",
		artist: "Madrigal",
		src: "mp3indirdur-Madrigal-Dip.mp3",
		thumbnail: "url(https://aydym.com/images/3f38f411-5d84-4e61-943a-4d150663976f.webp)"
	},
    {
		name: "Seni dert etmeler",
		artist: "Madrigal",
		src: "mp3indirdur-Madrigal-Seni-Dert-Etmeler.mp3",
		thumbnail: "url(https://i.ytimg.com/vi/h5oHhGlWKf0/maxresdefault.jpg)"
	},
    {
		name: "We-Don-t-Talk-Anymore",
		artist: "Selena Gomez",
		src: "mp3indirdur-Selena-Gomez-We-Don-t-Talk-Anymore.mp3",
		thumbnail: "url(https://m.media-amazon.com/images/M/MV5BOWQyYmJiOWUtNzkzYS00YWJlLWI5YjgtYTg4MjI0MmM1N2ZkXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg)"
	}
];

$(document).ready(function () {
	var playing = false,
		artistname = $(".artist-name"),
		musicName = $(".music-name"),
		time = $(".time"),
		fillBar = $(".fillBar");

	var song = new Audio();
	var CurrentSong = 0;
	window.onload = load();

	function load() {
		artistname.html(beatpack[CurrentSong].name);
		musicName.html(beatpack[CurrentSong].artist);
		song.src = beatpack[CurrentSong].src;
	}

	function playSong() {
		artistname.html(beatpack[CurrentSong].name);
		musicName.html(beatpack[CurrentSong].artist);
		song.src = beatpack[CurrentSong].src;
		song.play();
		$("#thumbnail").css("background-image", beatpack[CurrentSong].thumbnail);
		$("#play").addClass("fa-pause");
		$("#play").removeClass("fa-play");
		$("#thumbnail").addClass("active");
		$(".player-track").addClass("active");
	}

	song.addEventListener("timeupdate", function () {
		var position = (100 / song.duration) * song.currentTime;
		var current = song.currentTime;
		var duration = song.duration;
		var durationMinute = Math.floor(duration / 60);
		var durationSecond = Math.floor(duration - durationMinute * 60);
		var durationLabel = durationMinute + ":" + durationSecond;
		currentSecond = Math.floor(current);
		currentMinute = Math.floor(currentSecond / 60);
		currentSecond = currentSecond - currentMinute * 60;
		// currentSecond = (String(currentSecond).lenght > 1) ? currentSecond : ( String("0") + currentSecond );
		if (currentSecond < 10) {
			currentSecond = "0" + currentSecond;
		}
		var currentLabel = currentMinute + ":" + currentSecond;
		var indicatorLabel = currentLabel + " / " + durationLabel;

		fillBar.css("width", position + "%");

		$(".time").html(indicatorLabel);
	});

	$("#play").click(function playOrPause() {
		if (song.paused) {
			song.play();
			playing = true;
			$("#play").addClass("fa-pause");
			$("#play").removeClass("fa-play");
			$("#thumbnail").addClass("active");
			$(".play-btn:before").css("padding-left", 300);

			document.getElementsByClassName("play-btn")[0].classList.add("pause-btn");
			document.getElementsByClassName("play-btn")[0].classList.remove("play-btn");
		} else {
			song.pause();
			playing = false;
			$("#play").removeClass("fa-pause");
			$("#play").addClass("fa-play");
			$("#thumbnail").removeClass("active");

			document.getElementsByClassName("pause-btn")[0].classList.add("play-btn");
			document
				.getElementsByClassName("pause-btn")[0]
				.classList.remove("pause-btn");
		}
	});

	$("#prev").click(function prev() {
		CurrentSong--;
		if (CurrentSong < 0) {
			CurrentSong = beatpack.length - 1;
		}
		playSong();
	});

	$("#next").click(function next() {
		CurrentSong++;
		if (CurrentSong == beatpack.length) {
			CurrentSong = 0;
		}
		playSong();
	});
});
