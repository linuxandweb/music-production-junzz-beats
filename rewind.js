const audio = document.getElementById('mySong');
    const rewindButton = document.getElementById('rewind-button');
    const fastforwardButton = document.getElementById('forward-button');

    const seekInterval = 10; // Seek duration in seconds

    rewindButton.addEventListener('click', () => {
      const currentTime = audio.currentTime;
      audio.currentTime = Math.max(0, currentTime - seekInterval);
    });

    fastforwardButton.addEventListener('click', () => {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      audio.currentTime = Math.min(duration, currentTime + seekInterval);
    });