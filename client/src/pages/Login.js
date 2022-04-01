
function Login() {

  const handleFormSubmit = () => {
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
        <h1 className='text-5xl font-medium font-bold text-primary mt-4 mb-12 text-center'>LOGIN</h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id='email'
              placeholder='Email'
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id='password'
              placeholder='Password'
            />
          </div>

          <div className='flex justify-center items-center mt-6 bg-blue-800'>
            <button className={`py-2 px-4 text-sm text-white rounded-full focus:outline-none focus:border-green-dark`}>Login</button>
          </div>
          <hr className="mb-2 border-t" />
          <hr className="mb-2 border-t" />
          <div className="text-right">
            <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="./register">
              Create an account!
            </a>
          </div>
          <div className="text-right">
            <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="./forgot">
              Forgot your password?
            </a>
          </div>
        </form>
        <div className="flex justify-center">
          <div className="w-6/12 sm:w-4/12 px-4 pt-10">
            <img src="https://pbs.twimg.com/profile_images/1036629655422296065/ZyFeCMZd_400x400.jpg" alt="..." className="rounded max-w-full h-auto align-middle border-none" />
          </div>
        </div>

      </div>

    </div>
  );
}


export default Login;
