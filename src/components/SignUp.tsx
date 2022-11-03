const SignUp = () => {
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

export default SignUp;
