import styles from './HeroStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src='https://i.ibb.co/R6MMzrb/mishra-avatar.png'
          className={styles.hero}
          alt="Avatar-Himangshu Mishra"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
         Himangshu
                   <br />
         Mishra
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="https://twitter.com/himangshuji" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/himangshumishra" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/himangshumishra" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing web apps that makes your business
          revenue double.
        </p>
        <a href='https://drive.google.com/file/d/1W0kqqlYGp6t6QJ5ZOvOpmoT2FtY-nFIj/view?usp=drive_link' download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
