import { FaTwitterSquare, FaLinkedin, FaHome } from 'react-icons/fa';
import { FluidContainer, TopBar } from '@makinox/makinox-ui';
import { NavbarSection } from './Navbar.styles';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className={TopBar()}>
      <nav className={`flex justify-between items-center ${FluidContainer()} ${NavbarSection()}`}>
        <div className="flex items-center">
          <span>Space weight</span>
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
