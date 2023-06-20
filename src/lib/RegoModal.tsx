import { Styled as S } from './RegoModal.styles'
import ReactDOM from 'react-dom'
import { IoIosClose } from 'react-icons/io'

export type ModalProps = {
  isModalOpen: boolean
  closeModal: () => void
  children: JSX.Element | JSX.Element[]
}

export function RegoModal({ isModalOpen, closeModal, children }: ModalProps) {
  return ReactDOM.createPortal(
    isModalOpen && (
      <>
        <S.ModalBackdrop onClick={closeModal}></S.ModalBackdrop>
        <S.Modal className={'modal'}>
          {children}
          <S.ModalCloseButton onClick={closeModal}>
            <IoIosClose />
          </S.ModalCloseButton>
        </S.Modal>
      </>
    ),
    document.querySelector('body') as HTMLBodyElement,
  )
}
