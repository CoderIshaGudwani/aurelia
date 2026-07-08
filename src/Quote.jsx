const quotes = [
    "Small progress is still progress. 🌱",
    "Rain helps flowers bloom. ☔",
    "One Pomodoro closer to your dream. 🦋",
    "Stay consistent. Magic follows.",
    "Every butterfly was once a caterpillar."
  ];
  
  export default function Quote() {
  
    const randomQuote =
      quotes[Math.floor(Math.random() * quotes.length)];
  
    return (
      <p className="lead text-light opacity-75">
        {randomQuote}
      </p>
    );
  }