"use client"
import { Button, Form, Input, notification } from 'antd';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
 
import { useState } from 'react';
import { useRouter } from 'next/navigation';
 
const LogingPage = () => {
  const [form] = Form.useForm(); 
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();
  
 
  const handleLogin = async (values) => {
    // console.log(email, password);
    const email = values.email;
    const password = values.password;
    // console.log(email, password); 
  try{
    const res = await signIn("credentials", {
       email,
       password,
      redirect: false
    });
     
    if(res.ok){
    // toast.success('Login Success.');
    notification.success({
      message: 'User Login Succeseefully', 
    });
      router.replace('/')
    }else{
      setError('credential invalid')
      return; 
    } 
  }
  catch(error){
    console.log(error);
    
  }

  }


  return (
    <div className='min-h-[440px]'>
    
      <div className="w-full mx-auto h-[420px] lg:w-[800px] shadow-lg bg-white flex group text-[#0095ff]">
        <div className="w-1/2 min-h-full bg-[#0095ff] relative overflow-hidden hidden lg:block">
          <h1 className="text-white text-2xl absolute bottom-3 right-3 text-right">Hey! <br /> Welcome to<br />Loging!!!</h1>
          <span className="bg-sky-800/20 w-32 h-32 -top-8 -left-8 rounded-full absolute z-20 group-hover:w-56 group-hover:h-56 duration-500"></span>
          <span className="bg-sky-800/50 w-36 h-36 -top-5 -left-5  rounded-full absolute z-10"></span>
        </div>
       
        <Form
        form={form}
        name="signup"
        onFinish={handleLogin}
        layout="vertical"
        size="large"
        className='className="p-8 flex-1'
      > 
       <div className='px-6'>
      <h1 className="text-4xl pb-4">Login</h1>
       <Form.Item
          name="email"
          label={<span className=" ">Email</span>}
          // rules={[{ required: true, message: (<p className='text-red-900 font-medium'>
          //   Please enter your email!
          // </p>) }]}
          >
          <Input 
          type='email'
          
            placeholder="Enter your email" 
            className="rounded-lg focus:ring-pink-500 focus:border-pink-500" 
          />
        </Form.Item>
        <Form.Item
          name="password"
          label={<span className=" ">Password</span>}
          // rules={[{ required: true, message: (<p className='text-red-900 font-medium'>
          //   Please enter your password!
          // </p>) }]}
        >
          <Input.Password 
          type='password'
          
            placeholder="Enter your password" 
            className="rounded-lg focus:ring-pink-500 focus:border-pink-500" 
          />
        </Form.Item>
     

        <Form.Item>
        {
          error && (
            <p className='bg-red-400 my-2 text-center text-sm rounded text-white'>{error}</p>
          )
         }
          <Button
            type="primary" 
            htmlType="submit" 
            // className="w-full rounded-lg bg-pink-600 hover:bg-pink-700 transition duration-300"
          className="py-2 w-full bg-slate-200  text-blue-500 px-5 mb-4 mt-6 overflow-hidden shadow-lg border-2 rounded-md border-[#0095ff] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0095ff] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0095ff] relative inline-block hover:text-white z-50"
          >
            Login
          </Button>
        </Form.Item> 
 
        </div>
        <h1>new user?  
              <Link className='text-green-500 font-semibold' href="/signup">Please SignUp</Link>
            </h1>
      </Form>
      </div>
    </div>
  );
};

export default LogingPage;