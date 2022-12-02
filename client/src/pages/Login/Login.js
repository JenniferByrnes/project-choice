import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import image from '../../assets/images/PC-login.png'

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 pt-[60px] mx-auto md:h-screen lg:py-0 text-stone-800">
      <h1 className="flex items-center mb-6 text-3xl">
        Account Login
      </h1>
      <div
        class="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0"
      >
        {/* Left Side */}
        <div className="form-container">
          <div className="form-inner-container">
            <h1 className="md:text-2xl items-center justify-center">
              Sign in to your account to shop.
            </h1>
            <form className="space-y-4 md:space-y-6 " onSubmit={handleFormSubmit}>
              <div>
                <label for="email" className="block mb-2 text-sm font-medium ">Your email</label>
                <input type="email" name="email" id="email" className="form-field focus: outline-pcGreen" placeholder="name@email.com" onChange={handleChange} />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium ">Password</label>
                <input type="password" name="password" placeholder="••••••••" className="form-field focus: outline-pcGreen" onChange={handleChange} />
              </div>
              {error ? (
                <div>
                  <p className="error-text">The provided credentials are incorrect</p>
                </div>
              ) : null}
              <div className="flex items-center md:items-start">
                <button type="submit" className="form-button">Login</button>
              </div>
            </form>
          </div>
        </div>
        {/* Right Side */}
        <img src={image} alt="" class="w-[430px] hidden md:block" />
      </div>
    </div>
  );
}

export default Login;