import Link from 'next/link';
import styles from '../styles/Header.module.css';
// import { Search } from './Search';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            <Image
              src='https://img01.bt.co.uk/s/assets/191120/images/logo/logo-2018.svg'
              height={50}
              width={50}
            />
          </a>
        </Link>
      </div>

      {/* <Search /> */}

      <nav>
        <ul>
          <li>
            <Link href='/top'>
              <a>Top Stories</a>
            </Link>
          </li>

          <li>
            <Link href='/about'>
              <a>about</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
