import styled from 'styled-components';
import AirbnbLogoIcon from '../public/statics/svg/logo/logo.svg';
import AirbnbLogoTextIcon from '../public/statics/svg/logo/logo_text.svg';
import Link from 'next/link';
import palette from '../styles/palette';
import { useState } from 'react';
import useModal from '../hooks/useModal';
import SignUpModal from './auth/SignUpModal';
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
  .header-auth-buttons {
    .header-sign-up-button,
    .header-login-button {
      height: 42px;
      padding: 0 16px;
      border: 0;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
    }
  }
  .header-sign-up-button {
    margin-right: 8px;
    &:hover {
      background-color: ${palette.gray_f7};
    }
  }
  .header-login-button {
    &:hover {
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
    }
  }
`;

const Header = () => {
  const { openModal, ModalPortal } = useModal();
  return (
    <Container>
      <Link href='/'>
        <div className='header-logo-wrapper'>
          <AirbnbLogoIcon className='header-logo' />
          <AirbnbLogoTextIcon />
        </div>
      </Link>
      <div className='header-auth-buttons'>
        <button type='button' className='header-sign-up-button' onClick={openModal}>
          회원가입
        </button>
        <button type='button' className='header-login-button'>
          로그인
        </button>
      </div>
      <ModalPortal>
        <SignUpModal />
      </ModalPortal>
    </Container>
  );
};

export default Header;