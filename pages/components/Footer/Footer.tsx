import { TopBar, FluidContainer } from '@makinox/makinox-ui';

export default function Footer() {
  return (
    <footer className={TopBar()}>
      <div className={FluidContainer()}>
        <span>Jesús Bossa - {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
