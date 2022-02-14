import { FaTwitterSquare, FaLinkedin, FaHome } from 'react-icons/fa';
import { HeaderSection, NavbarSection } from './Navbar.styles';
import { FluidContainer, TopBar } from '@makinox/makinox-ui';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className={`${TopBar()} ${HeaderSection()}`}>
      <nav className={`flex justify-between items-center ${FluidContainer()} ${NavbarSection()}`}>
        <div className="flex items-center">
          <Link href="/">Space weight</Link>
        </div>

        <div>
          <a href="https://jesusbossa.dev" target="_blank" rel="noreferrer">
            <FaHome />
          </a>
          <a href="https://www.linkedin.com/in/makinox" target="_blank" rel="noreferrer">
            <FaTwitterSquare />
          </a>
          <a href="https://twitter.com/jesMakinox" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </header>
  );
}
