import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAPI } from '../lib/api/auth';
import { userActions } from '../store/user';
import HamburgerIcon from '../public/statics/svg/header/hamburger.svg';
import Link from 'next/link';

const HeaderUserProfile: React.FC = () => {
  const [isUsermenuOpened, setIsUsermenuOpened] = useState(false);
  const userProfileImage = useSelector((state) => state.user.profileImage);
  const dispatch = useDispatch();
  const logout = async () => {
    try {
      await logoutAPI();
      dispatch(userActions.initUser());
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (isUsermenuOpened) {
          setIsUsermenuOpened(false);
        }
      }}
    >
      <button
        className='header-user-profile'
        type='button'
        onClick={() => setIsUsermenuOpened((prev) => !prev)}
      >
        <HamburgerIcon />
        <img src={userProfileImage} className='header-user-profile-image' alt='profile' />
      </button>
      {isUsermenuOpened && (
        <ul className='header-usermenu'>
          <li>숙소 관리</li>
          <Link href='/room/register/building'>
            <a
              role='presentation'
              onClick={() => {
                setIsUsermenuOpened(false);
              }}
            >
              <li>숙소 등록하기</li>
            </a>
          </Link>
          <div className='header-usermenu-divider' />
          <li role='presentation' onClick={logout}>
            로그아웃
          </li>
        </ul>
      )}
    </OutsideClickHandler>
  );
};

export default HeaderUserProfile;
