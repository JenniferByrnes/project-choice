import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';


export default function Signup() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  // When user submits form, add them to the database and get the token
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  // Update the formState as the user types in the input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    // Card for signup
    <div className="flex flex-col items-center justify-center px-6 py-8 pt-[60px] mx-auto md:h-screen lg:py-0">
      <h1 className="flex items-center mb-6 text-3xl text-black">
        Create Your Account
      </h1>
      {/* Card interior placement */}
      <div className="w-full bg-white border-8 border-[#dae8e3] border-double shadow-lg shadow-[#dae8e3] md:mt-0 sm:max-w-md xl:p-0 items-center justify-center">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 items-center justify-center">
          <h1 className="text-black items-center justify-center">
            Please provide an email and password
          </h1>
          {/* Form for input - contains submit button */}
          <form className="space-y-4 md:space-y-6" onSubmit={handleFormSubmit}>
            {/* Email input */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-black sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@email.com" onChange={handleChange} />
            </div>
            {/* password input */}
            <div>
              <label for="password" className="block mb-2 text-sm font-medium text-black">Password</label>
              <input type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" onChange={handleChange} />
            </div>
            {/* submit button */}
            <button type="submit" className="mt-10 mb-10 py-1 px-5 shadow-md shadow-[#dae8e3] text-black text-lg sm-rounded border-8 border-double border-[#dae8e3] hover:bg-[#dae8e3] hover:text-black hover:shadow-md hover:shadow-[#e9ecef]">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}