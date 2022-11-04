import { useStore } from '@nanostores/solid';
import PocketBase from 'pocketbase';
import { createStore } from 'solid-js/store';
import { ErrorMessage, Fields } from '../utils/forms';
import { useForm } from '../utils/input-validation';

const LogIn = () => {
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

      console.log({ userData });
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
    <form use:formSubmit={handleSubmit}>
      <h1>Log In</h1>

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
  );
};

export default LogIn;
