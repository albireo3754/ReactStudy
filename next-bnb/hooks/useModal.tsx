import { FC, ReactNode, useEffect, useRef, useState } from 'react';
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

const useModal = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const openModal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  interface IProps {
    children: ReactNode;
  }

  const ModalPortal: FC<IProps> = ({ children }) => {
    const ref = useRef<Element | null>();
    // 이게 필요할까?
    const [mounted, setMounted] = useState(false);

    // // 이게 안되는 걸 보면 document가 rendering 되기전엔 설정 못하는것 같은데 맞나?
    // console.log(document);
    useEffect(() => {
      setMounted(true);
      if (document) {
        const dom = document.querySelector('#root-modal');
        ref.current = dom;
        console.log(ref.current);
      } // 이 조건 말고 다른 상황에선 document가 안먹히는데.. next의 문젠가?
    }, []); //처음 rendering될 때만 실행 -> ref.current에 #root-mordal을 할당함.
    console.log('hi');
    if (ref.current && mounted && modalOpened) {
      return createPortal(
        <Containter>
          <div className='modal-background' onClick={closeModal} role='presentation' />
          {children}
        </Containter>,
        ref.current,
      );
    }
    return null;
  };

  return {
    openModal,
    closeModal,
    ModalPortal,
  };
};

export default useModal;
