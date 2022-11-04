import { createStore } from 'solid-js/store';
import { ErrorMessage, Fields, isEmailAlreadyInUse } from '../utils/forms';
import PocketBase from 'pocketbase';
import { useForm } from '../utils/input-validation';

const SignUp = () => {
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
      const userData = await client.users.create({
        name: 'Banano',
        email: fields.email,
        password: fields.password,
        passwordConfirm: fields.password_confirmation,
      });

      console.log({ userData });
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
  return (
    <form use:formSubmit={handleSubmit}>
      <h1>Sign Up</h1>

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
  );
};

export default SignUp;
