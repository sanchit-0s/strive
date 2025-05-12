export function sendVoiceCommand(intent, userId, navigate) {
  switch (intent) {
    case 'open_profile':
      if (userId && typeof userId === 'string') {
        // console.log(`Navigating to profile: /profile/${userId}`);
        navigate(`/profile/${userId}`);
      } else {
        alert('User ID not found or invalid');
      }
      break;

    case 'go_home':
      navigate('/home');
      break;

    case 'logout':
      navigate('/'); // or '/logout' if you have a logout route
      break;

    default:
      alert('Command not recognized: ' + intent);
  }
}


