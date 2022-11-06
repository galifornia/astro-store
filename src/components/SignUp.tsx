import PocketBase from 'pocketbase';
import { createEffect } from 'solid-js';
import { createStore } from 'solid-js/store';

import { User } from '../types/user';
import { ErrorMessage, Fields, isEmailAlreadyInUse } from '../utils/forms';
import { useForm } from '../utils/input-validation';

const SignUp = () => {
  let homeLink;
  const [state, setState] = createStore<{ user: User | null }>({ user: null });

  const { validate, formSubmit, errors } = useForm({
    errorClass: 'error-input',
  });

  const [fields, setFields] = createStore<Fields>({
    password: '',
    password_confirmation: '',
    email: '',
  });

  const userSignUp = async () => {
    try {
      const client = new PocketBase('http://127.0.0.1:8090');
      await client.users.create({
        email: fields.email,
        password: fields.password,
        passwordConfirm: fields.password_confirmation,
      });

      // redirect to Home page
      homeLink.click();
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleSubmit = () => {
    // TODO: disable button
    userSignUp();
  };

  const userNameExists = async ({ value }) => {
    const exists = await isEmailAlreadyInUse(value);
    return exists && `${value} is already being used`;
  };

  const matchesPassword = ({ value }) =>
    value === fields.password ? false : 'Passwords must Match';

  createEffect(() => {
    if (localStorage.getItem('app'))
      setState(JSON.parse(localStorage.getItem('app')));
  }, []);

  return (
    <>
      <form use:formSubmit={handleSubmit}>
        <div class='field-block'>
          <input
            name='email'
            type='email'
            placeholder='Email'
            required
            onInput={(e) => setFields('email', e.target.value)}
            use:validate={[userNameExists]}
          />
          {errors.email && <ErrorMessage error={errors.email} />}
        </div>

        <div class='field-block'>
          <input
            type='password'
            name='password'
            placeholder='Password'
            required
            autocomplete='on'
            minlength='8'
            onInput={(e) => setFields('password', e.target.value)}
            use:validate={[]}
          />
          {errors.password && <ErrorMessage error={errors.password} />}
        </div>

        <div class='field-block'>
          <input
            type='password'
            name='password_confirmation'
            placeholder='Confirm Password'
            autocomplete='on'
            required
            onInput={(e) => setFields('password_confirmation', e.target.value)}
            use:validate={[matchesPassword]}
          />
          {errors.password_confirmation && (
            <ErrorMessage error={errors.password_confirmation} />
          )}
        </div>

        <button type='submit'>Submit</button>
      </form>
      <a ref={homeLink} href='/' className='hidden'>
        Home
      </a>
    </>
  );
};

export default SignUp;
