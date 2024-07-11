import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {db} from '../utils/FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
const Form = () => {
  const [user, setUser] = useState({
    Name: '',
    Email: '',
    Contact: '',
    Message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!user.Name) tempErrors.Name = "Name is required";
    if (!user.Email) tempErrors.Email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(user.Email)) tempErrors.Email = "Email is invalid";
    if (!user.Contact) tempErrors.Contact = "Contact number is required";
    else if (!/^[0-9]{10}$/.test(user.Contact)) tempErrors.Contact = "Contact number must be 10 digits";
    if (!user.Message) tempErrors.Message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    const { Name, Email, Contact, Message } = user;
    try {
      const docRef = await addDoc(collection(db, "userData"), {
        Name, Email, Contact, Message
      })
     
        toast.success("Message sent successfully");
        setUser({
          Name: '',
          Email: '',
          Contact: '',
          Message: ''
        });
        setErrors({});
    } catch (error) {
      toast.error("Error in posting");
    }
  };

  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md'>
        <form method='POST' className='flex flex-col p-6 bg-white shadow-lg rounded-lg' onSubmit={submitData}>
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <input
            type="text"
            name="Name"
            placeholder='Your name'
            value={user.Name}
            autoComplete='off'
            className={`border-2 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 ${errors.Name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            required
            onChange={handleInput}
          />
          {errors.Name && <p className="text-red-500 text-sm">{errors.Name}</p>}

          <input
            type="email"
            name="Email"
            placeholder='Email'
            value={user.Email}
            autoComplete='off'
            className={`border-2 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 ${errors.Email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            required
            onChange={handleInput}
          />
          {errors.Email && <p className="text-red-500 text-sm">{errors.Email}</p>}

          <input
            type="text"
            name="Contact"
            placeholder='Contact number'
            value={user.Contact}
            autoComplete='off'
            className={`border-2 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 ${errors.Contact ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            required
            onChange={handleInput}
          />
          {errors.Contact && <p className="text-red-500 text-sm">{errors.Contact}</p>}

          <textarea
            name="Message"
            placeholder='Type the message'
            value={user.Message}
            autoComplete='off'
            rows={5}
            className={`border-2 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 ${errors.Message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            required
            onChange={handleInput}
          />
          {errors.Message && <p className="text-red-500 text-sm">{errors.Message}</p>}

          <button
            type="submit"
            className='bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
