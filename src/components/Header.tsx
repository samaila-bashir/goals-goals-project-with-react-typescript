import { type ReactNode } from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

interface HeaderProps {
  image: ImageProps;
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ image, children }) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
