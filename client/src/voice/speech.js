export function startListening(callback) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
  
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      callback(transcript);
    };
  
    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };
  
    recognition.start();
  }
  
  

