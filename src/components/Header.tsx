import { IHeader } from '../utils/types';

const Header: React.FC<IHeader> = ({ image, children }): JSX.Element => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
