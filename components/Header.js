import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import { Search } from './Search';

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

      <Search />
      <nav>
        <Link href='/top'>
          <a className='btn'>Top Stories</a>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
