import ReactModal from 'react-modal';
import { MdOutlineClose } from 'react-icons/md';

import { Container } from './styles';

interface IModal {
  header?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ header, children, isOpen, onClose }: IModal) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} className="react-modal-overlay">
      <Container>
        <div className="modal-header">
          <h2>{header}</h2>

          <button onClick={onClose} className="react-modal-close">
            <MdOutlineClose size={20} />
          </button>
        </div>

        <div className="modal-body">{children}</div>
      </Container>
    </ReactModal>
  );
}
