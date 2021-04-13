import styled from 'styled-components';
import CloseXIcon from '../../public/statics/svg/auth/modal_close_x_icon.svg';
import MailIcon from '../../public/statics/svg/auth/mail.svg';
import PersonXIcon from '../../public/statics/svg/auth/person.svg';
import OpenedEyeIcon from '../../public/statics/svg/auth/opend_eye.svg';
import CloseEyeIcon from '../../public/statics/svg/auth/closed_eye.svg';
import palette from '../../styles/palette';
import Input from '../common/Input';
import React, { useEffect, useMemo, useState } from 'react';
import Selector from '../common/Selector';
import { dayList, monthList, yearList } from '../../lib/staticData';
import Button from '../common/Button';
import { signupAPI } from '../../lib/api/auth';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/user';
import useValidateMode from '../../hooks/useValidateMode';
import PasswordWarning from './PasswordWarning';

const Container = styled.form`
  width: 568px;
  height: 614px;
  padding: 32px;
  background-color: white;
  z-index: 11;
  .modal-close-x-icon {
    cursor: pointer;
    display: block;
    margin: 0 0 40px auto;
  }
  .sign-up-password-input-wrapper {
    svg {
      cursor: pointer;
    }
  }
  .sign-up-birthdate-label {
    font-size: 16px;
    font-weight: 600;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  .sign-up-modal-birthday-info {
    margin-bottom: 16px;
    color: ${palette.charcoal};
  }

  .sign-up-modal-birthday-selectors {
    display: flex;
    margin-bottom: 24px;
    .sign-up-modal-birthday-month-selector {
      margin-right: 16px;
      flex-grow: 1;
    }
    .sign-up-modal-birthday-day-selector {
      margin-right: 16px;
      width: 25%;
    }
    .sign-up-modal-birthday-year-selector {
      width: 33.333333%;
    }
  }
  .sign-up-modal-submit-button-wrapper {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${palette.gray_eb};
  }
  .sign-up-modal-set-login {
    color: ${palette.dark_cyan};
    margin-left: 8px;
    cursor: pointer;
  }
`;

const PASSWORD_MIN_LENGTH = 8;

const SignUpModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [password, setPassword] = useState('');
  const [birthYear, setBirthYear] = useState<string | undefined>();
  const [birthDay, setBirthDay] = useState<string | undefined>();
  const [birthMonth, setBirthMonth] = useState<string | undefined>();
  const [hidePassword, setHidePassword] = useState(true);
  const { setValidateMode } = useValidateMode();
  const [passwordFocused, setPasswordFocused] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      setValidateMode(false);
    };
  }, []);
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(event.target.value);
  };
  const onChangeFirstname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(event.target.value);
  };
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeBirthMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthMonth(event.target.value);
  };
  const onChangeBirthDay = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthDay(event.target.value);
  };
  const onChangeBirthYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthYear(event.target.value);
  };

  const onFocusPassword = () => {
    setPasswordFocused(true);
  };

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const onSubmitSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidateMode(true);
    if (!email || !lastname || !firstname || !password) {
      return undefined;
    }
    try {
      const signUpBody = {
        email,
        lastname,
        firstname,
        password,
        birthday: new Date(`${birthYear}-${birthMonth!.replace('월', '')}-${birthDay}`).toISOString(),
      };
      const { data } = await signupAPI(signUpBody);
      dispatch(userActions.setLoggedUser(data));
      closeModal();
    } catch (e) {
      console.log(e);
    }
  };

  const isPasswordHasNameOrEmail = useMemo(
    () => !password || !lastname || password.includes(lastname) || password.includes(email.split('@')[0]),
    [password, lastname, email],
  );
  const isPasswordUnderMinLength = useMemo(
    () => password.length === 0 || password.length < PASSWORD_MIN_LENGTH,
    [password],
  );
  const isPasswordHasNotNumberAndSymbol = useMemo(
    () => !(/[{}[\]/?.,;:|)*~`!^\-_+<>@#$%\\=('"]/g.test(password) && /[0-9]/g.test(password)),
    [password],
  );
  return (
    <Container onSubmit={onSubmitSignUp}>
      <CloseXIcon className='modal-close-x-icon' />
      <Input
        onChange={onChangeEmail}
        placeholder='이메일 주소'
        type='email'
        name='email'
        icon={<MailIcon />}
        isValid={!!email}
        errorMessage='이메일이 필요합니다.'
      />
      <Input
        onChange={onChangeLastname}
        placeholder='성(예: 유)'
        icon={<PersonXIcon />}
        isValid={!!lastname}
        errorMessage='성이 필요합니다.'
      />
      <Input
        onChange={onChangeFirstname}
        placeholder='이름(예: 경호)'
        icon={<PersonXIcon />}
        isValid={!!firstname}
        errorMessage='이름이 필요합니다.'
      />
      <div className='sign-up-password-input-wrapper'>
        <Input
          placeholder='비밀번호 설정하기'
          type={hidePassword ? 'password' : 'text'}
          onChange={onChangePassword}
          icon={
            hidePassword ? (
              <CloseEyeIcon onClick={toggleHidePassword} />
            ) : (
              <OpenedEyeIcon onClick={toggleHidePassword} />
            )
          }
          isValid={!isPasswordHasNameOrEmail && !isPasswordUnderMinLength && !isPasswordHasNotNumberAndSymbol}
          errorMessage='비밀번호를 입력하세요.'
          onFocus={onFocusPassword}
        />
        {passwordFocused && (
          <>
            <PasswordWarning
              isValid={isPasswordHasNameOrEmail}
              text='비밀번호에 본인 이름이나 이메일 주소를 포함할 수 없습니다.'
            />
            <PasswordWarning isValid={isPasswordUnderMinLength} text='최소 8자 이상을 유지하세요.' />
            <PasswordWarning
              isValid={isPasswordHasNotNumberAndSymbol}
              text='숫자와 기호를 모두 포함하세요.'
            />
          </>
        )}
      </div>
      <p className='sign-up-birthdate-label'>생일</p>
      <p className='sign-up-modal-birthday-info'>
        만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 다른 에어비앤비 이용자에게 공개되지
        않습니다.
      </p>
      <div className='sign-up-modal-birthday-selectors'>
        <div className='sign-up-modal-birthday-month-selector'>
          <Selector
            onChange={onChangeBirthMonth}
            options={monthList}
            defaultValue='월'
            disabledOptions={['월']}
            isValid={!!birthMonth}
          />
        </div>
        <div className='sign-up-modal-birthday-day-selector'>
          <Selector
            onChange={onChangeBirthDay}
            options={dayList}
            defaultValue='일'
            disabledOptions={['일']}
            isValid={!!birthDay}
          />
        </div>
        <div className='sign-up-modal-birthday-year-selector'>
          <Selector
            onChange={onChangeBirthYear}
            options={yearList}
            defaultValue='년'
            disabledOptions={['년']}
            isValid={!!birthYear}
          />
        </div>
      </div>
      <div className='sign-up-modal-submit-button-wrapper'>
        <Button type='submit'>가입하기</Button>
      </div>
      <p>
        이미 에어비앤비 계정이 있나요?
        <span className='sign-up-modal-set-login' role='presentation' onClick={() => {}}>
          로그인
        </span>
      </p>
    </Container>
  );
};

export default SignUpModal;
