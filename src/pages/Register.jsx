// src/Register.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://home-heaven.onrender.com/api/v1auth/register', data);
            alert(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center login ">
            <div className=" backdrop-blur-lg p-8 rounded shadow-lg w-full max-w-md border-neutral-500 border animate-fadeIn">
                <h2 className="text-2xl font-bold mb-6 text-green-500">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <input placeholder='FirstName'
                            type="text"
                            {...register('email', { required: 'input your FirstName ' })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                        {errors.email && <p className="text-red-600 text-sm font-bold  mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <input placeholder='LastName'
                            type="text"
                            {...register('email', { required: 'input your lastName' })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                        {errors.email && <p className="text-red-600 text-sm font-bold  mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <input placeholder='Email'
                            type="email"
                            {...register('email', { required: 'Email is required' })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                        {errors.email && <p className="text-red-600 text-sm font-bold  mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <input placeholder='password'
                            type="password"
                            {...register('password', { required: 'Password is required' })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 placeholder-gray-600"
                        />
                        {errors.password && <p className="text-red-600 text-sm font-bold  mt-1">{errors.password.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;

// http//local:3000/api/v1/auth/register
