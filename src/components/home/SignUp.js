"use client"
import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// import 'antd/dist/antd.css';
 
const Signup = () => {
  const router = useRouter();
  const [form] = Form.useForm(); 
  // console.log(name, email, password);
  const [error, setError] = useState('')

  const handleSignup = async (values) => {
    console.log('Received values:', values);
    const email = values.email;
    console.log(email);
     try{
     const existUser = await fetch('api/existUser', {
      method:"POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({email}),
     });
         console.log('exsist', existUser);
     const {user} = await existUser.json()
    if(user){
      setError('User alredy exisit!!')
      return;
    }


   const res = await fetch('api/register', {
    method:"POST",
    headers: {
      'Content-Type': 'application/json',
      
    },
    body:JSON.stringify(values)
   });
   console.log("reeee>>>>>>>>>>",res);
   if(res.ok){
    notification.success({
      message:'success',
      description:'User register successfully done'
    })
    form.resetFields()
    setError('')
     router.push('/login')
  }
  else{
     console.log('Not register');
  }

     }catch(error){
      notification.error({
        message:'Wrong',
        description: ("Signup failed",error)
      })
     }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Create Account</h2>
      <Form
        form={form}
        name="signup"
        onFinish={handleSignup}
        layout="vertical"
        size="large"
      >
        <Form.Item
          name="name" 
          label={<span className="text-white">First Name</span>}
          rules={[{ required: true, message: (<p className='text-red-900 font-medium'>
            Please enter your name!
          </p>) }]}        >
          <Input 
          type='text'
        
            placeholder="Enter your first name" 
            className="rounded-lg focus:ring-pink-500 focus:border-pink-500" 
          />
        </Form.Item>
        <Form.Item
          name="email"
          label={<span className="text-white">Email</span>}
          rules={[{ required: true, message: (<p className='text-red-900 font-medium'>
            Please enter your email!
          </p>) }]}        >
          <Input 
          type='email'
          
            placeholder="Enter your email" 
            className="rounded-lg focus:ring-pink-500 focus:border-pink-500" 
          />
        </Form.Item>
        <Form.Item
          name="password"
          label={<span className="text-white">Password</span>}
          rules={[{ required: true, message: (<p className='text-red-900 font-medium'>
            Please enter your password!
          </p>) }]}
        >
          <Input.Password 
          type='password'
          
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
         {
          error && (
            <p className='text-red'>{error}</p>
          )
         }
      </Form>
      <h1>Alredy have an Account? 
        <Link className='text-green-500 font-semibold' href="/login">Loging</Link>
      </h1>
    </div>
  );
};

export default Signup;
