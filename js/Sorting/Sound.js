var audioCtx = new AudioContext(), mute = false;
function playNote(frequency, duration=20) {
  if(mute) return;
  var oscillator = audioCtx.createOscillator();
  
  oscillator.type = 'square';
  oscillator.frequency.value = frequency; 
  oscillator.connect(audioCtx.destination);
  oscillator.start();
 
  setTimeout(
    function() {
      oscillator.stop();
    }, duration);
  
}
