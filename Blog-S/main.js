function greet() {
  let name = sessionStorage.getItem('name');
  if (!name) {
    name = prompt('Please enter your name:');
    sessionStorage.setItem('name', name);
  }
  const greetingElement = document.getElementById('greeting');
  greetingElement.textContent = `Welcome, ${name}!`;
}

greet();
