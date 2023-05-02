import styled from "styled-components";
import React, { PropsWithChildren, ReactElement, useState } from "react";

type Props = {
  trigger: ReactElement;
};

export const RegoModal = ({ trigger, children }: PropsWithChildren<Props>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {React.cloneElement(trigger, { onClick: handleOpenModal })}
      {isModalOpen && (
        <S.RegoModalOverlay onClick={handleCloseModal}>
          <S.RegoModal onClick={(e) => e.stopPropagation()}>
            {children}
          </S.RegoModal>
        </S.RegoModalOverlay>
      )}
    </>
  );
};

const S = {
  RegoModalOverlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  RegoModal: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    width: 500px; /* 수정 */
    height: 500px; /* 수정 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `,
};
