"use client"
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
// import 'antd/dist/antd.css';

const Signup = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState('')

  const onFinish = (values) => {
    console.log('Received values:', values);
     if(!values.name || !values.email || !values.Password){
      setError('Provide valide Input value')
     }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Create Account</h2>
      <Form
        form={form}
        name="signup"
        onFinish={onFinish}
        layout="vertical"
        size="large"
      >
        <Form.Item
          name="name"
          label={<span className="text-white">First Name</span>}
          rules={[{ required: true, message: 'Please enter your first name!' }]}
        >
          <Input 
            placeholder="Enter your first name" 
            className="rounded-lg focus:ring-pink-500 focus:border-pink-500" 
          />
        </Form.Item>
        <Form.Item
          name="email"
          label={<span className="text-white">Email</span>}
          rules={[{ required: true, message: 'Please enter your email!', type: 'email' }]}
        >
          <Input 
            placeholder="Enter your email" 
            className="rounded-lg focus:ring-pink-500 focus:border-pink-500" 
          />
        </Form.Item>
        <Form.Item
          name="password"
          label={<span className="text-white">Password</span>}
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password 
            placeholder="Enter your password" 
            className="rounded-lg focus:ring-pink-500 focus:border-pink-500" 
          />
        </Form.Item>
        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            className="w-full rounded-lg bg-pink-600 hover:bg-pink-700 transition duration-300"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <h1>Alredy have an Account? 
        <Link className='text-green-500 font-semibold' href="/login">Loging</Link>
      </h1>
    </div>
  );
};

export default Signup;
