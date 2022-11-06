import { useStore } from '@nanostores/solid';
import { state } from '../store/store';
import Cart from './Cart';

const Modal = () => {
  const s = useStore(state);
  return (
    <>
      {s().showingCart && <Cart />}
      {s().showingProfile && <Cart />}
    </>
  );
};

export default Modal;
