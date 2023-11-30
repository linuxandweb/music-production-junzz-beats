const audio = document.getElementById('mySong');
    const playPauseButton = document.getElementById('play-button');

    playPauseButton.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'pause';
        icon.scr= 'play.png'

      } else {
        audio.pause();
        playPauseButton.textContent = 'play';
      }
    });


    const song = document.getElementById('mySong');
    const rewindButton = document.getElementById('rewind-button');
    const fastforwardButton = document.getElementById('forward-button');

    const seekInterval = 10; // Seek duration in seconds

    rewindButton.addEventListener('click', () => {
      const currentTime = song.currentTime;
      song.currentTime = Math.max(0, currentTime - seekInterval);
    });

    fastforwardButton.addEventListener('click', () => {
      const currentTime = song.currentTime;
      const duration = song.duration;
      song.currentTime = Math.min(duration, currentTime + seekInterval);
    });
    

    const fon = document.getElementById('mySong');
    const seekBar = document.getElementById('seek-bar');

    fon.addEventListener('timeupdate', updateSeekBar);
    seekBar.addEventListener('change', seekToPosition);

    function updateSeekBar() {
      const progress = (fon.currentTime / fon.duration) * 100;
      seekBar.value = progress;
    }

    function seekToPosition() {
      const seekTime = (seekBar.value / 100) * fon.duration;
      fon.currentTime = seekTime;
    }

    const playlist = document.getElementById('playlist');

    playlist.addEventListener('change', (event) => {
      const selectedSong = event.target.value;
      audio.src = selectedSong;
      audio.load();
      audio.play();
    });
