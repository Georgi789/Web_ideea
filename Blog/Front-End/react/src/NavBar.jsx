import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <ul id="nav-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
