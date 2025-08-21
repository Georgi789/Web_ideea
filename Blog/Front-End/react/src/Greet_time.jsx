import { useEffect } from 'react';
import './Greet_time.css';

// This component prompts the user for their name and displays a greeting message
function Greeting() {
  useEffect(() => {
    const name = prompt('Please provide your name here:');
    const h1 = document.createElement('h1');
    h1.textContent = `Welcome, ${name}!`;
    document.body.appendChild(h1);
  }, []);
}

// This component renders the date and the exact time of your location/visit
function DateTime() {
  const dateTime = new Date();
  const newDate = dateTime.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
  const h2 = document.createElement('h2');
  h2.textContent = `${newDate}`;
  document.body.appendChild(h2);
}

export { Greeting, DateTime };
