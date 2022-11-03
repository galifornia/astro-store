import { useStore } from '@nanostores/solid';
import { userStore } from '../store/user';

const LogIn = () => {
  const $user = useStore(userStore);
  return (
    <form>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' placehoder='marco@polo.com' id='email' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' placehoder='******' id='password' />
      </div>
    </form>
  );
};

export default LogIn;
