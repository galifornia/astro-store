import { useStore } from '@nanostores/solid';
import { createEffect } from 'solid-js';
import { addUser, state, toggleCart } from '../store/store';

const Nav = () => {
  const s = useStore(state);

  // addUser({
  //   name: 'bananas',
  //   token: 'gdsgdgs',
  //   email: 'gds@gdsg.gd',
  //   id: 'hdshah',
  // });

  //   createEffect(() => {
  //     if (localStorage.getItem('state'))
  //       addUser(JSON.parse(localStorage.getItem('state')));
  //   }, []);

  return (
    <nav class='px-6 md:px-8 h-12 w-full sticky flex items-center justify-between z-10 left-0 top-0 backdrop-blur-md max-w-2xl mx-auto'>
      <div>Logo</div>
      <ul class='flex gap-2'>
        <li>Profile</li>
        <li onClick={toggleCart}>Cart</li>
      </ul>
    </nav>
  );
};

export default Nav;
