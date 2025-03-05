import NavButton from '../components/nav/NavButton';
import styles from './page.module.css';

export default function Home() {

  function handleButtonClick()  {
    var test = 123;
  }

  return (
    <div className={styles.background}>
      <header>
        <nav className={styles.navBar}>
          <NavButton label="About" href="#about" />
          <NavButton label="Projects" href="/projects" />
          <NavButton label="Console" href="/console" />
          <NavButton label="Videos" href="/videos" />
        </nav>
      </header>
      <main className={styles.mainContainer}>
        <div className={styles.centerDisplay}>
          <h1>HUGO OTTH</h1>
          <h3>Lighting Designer and Operator</h3>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}
