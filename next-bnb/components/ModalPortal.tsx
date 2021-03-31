import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Containter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  .modal-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }
`;

interface IProps {
  children: React.ReactNode;
  closePortal: () => void;
}

const ModalPortal: FC<IProps> = ({ children, closePortal }) => {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.querySelector('#root-modal');
      ref.current = dom;
      console.log(ref.current);
    }
  }, []); //처음 rendering될 때만 실행 -> ref.current에 #root-mordal을 할당함.
  console.log('hi');
  if (ref.current && mounted) {
    return createPortal(
      <Containter>
        <div className='modal-background' onClick={closePortal} role='presentation' />
        {children}
      </Containter>,
      ref.current,
    );
  }
  return null;
};

export default ModalPortal;
