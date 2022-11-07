import PocketBase from 'pocketbase';
import { createEffect } from 'solid-js';
import { createStore } from 'solid-js/store';
import { addUser } from '../store/store';

import { User } from '../types/user';
import { ErrorMessage, Fields } from '../utils/forms';
import { useForm } from '../utils/input-validation';

const LogIn = () => {
  let homeLink;
  const { validate, formSubmit, errors } = useForm({
    errorClass: 'error-input',
  });

  const userLogin = async () => {
    try {
      const client = new PocketBase('http://127.0.0.1:8090');
      const userData = await client.users.authViaEmail(
        fields.email,
        fields.password
      );

      addUser({
        email: userData.user.email,
        token: userData.token,
        id: userData.user.id,
        name: userData.user.profile.name,
      });

      // redirect to Home page
      homeLink.click();
    } catch (ex) {
      console.log(ex);
    }
  };

  const [fields, setFields] = createStore<Fields>({
    password: '',
    email: '',
  });

  const handleSubmit = () => {
    // TODO: disable button
    userLogin();
  };

  return (
    <>
      <form use:formSubmit={handleSubmit}>
        <div class='field-block'>
          <input
            name='email'
            type='email'
            placeholder='Email'
            autocomplete='on'
            required
            onInput={(e) => setFields('email', e.target.value)}
          />
          {errors.email && <ErrorMessage error={errors.email} />}
        </div>

        <div class='field-block'>
          <input
            type='password'
            name='password'
            placeholder='Password'
            autocomplete='on'
            required
            onInput={(e) => setFields('password', e.target.value)}
            use:validate={[]}
          />
          {errors.password && <ErrorMessage error={errors.password} />}
        </div>

        <button type='submit'>Submit</button>
      </form>

      <a ref={homeLink} href='/' className='hidden'>
        Home
      </a>
    </>
  );
};

export default LogIn;
