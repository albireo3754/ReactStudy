import styled from 'styled-components';
import AirbnbLogoIcon from '../public/statics/svg/logo/logo.svg';
import AirbnbLogoTextIcon from '../public/statics/svg/logo/logo_text.svg';
import Link from 'next/link';
const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: white;
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.08);
  z-index: 10;
  .header-logo-wrapper {
    display: flex;
    align-items: center;
    .header-logo {
      margin-right: 6px;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <Link href='/'>
        <div className='header-logo-wrapper'>
          <AirbnbLogoIcon className='header-logo' />
          <AirbnbLogoTextIcon />
        </div>
      </Link>
    </Container>
  );
};

export default Header;
