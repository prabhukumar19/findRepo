import React, { useState } from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SideBar = () => {
  const {authUser, setAuthUser}=useState(true);
  return (
    <aside className='flex flex-col items-center min-w-fit sm:w-16 sticky top-0  left-0 h-screen py-8 overflow-y-auto border-r bg-glass '>
      <nav className='h-full flex flex-col gap-3 mb-2'>
				<Link to='/' className='flex justify-center'>
					<img className='h-8' src='/github.svg' alt='Github Logo' />
				</Link>

				<Link
					to='/'
					className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg gap-1
					hover:bg-gray-800'
				>
				<IoHomeSharp size={20} /> 
        <span className=''>Home</span>
				</Link>

				{authUser && (
					<Link
						to='/likes'
						className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<FaHeart size={22} />
					</Link>
				)}

				{authUser && (
					<Link
						to='/explore'
						className='p-1.5 flex gap-1 justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<MdOutlineExplore size={25} />
            {/* <span>Login</span> */}
					</Link>
				)}

				{!authUser && (
					<Link
						to='/login'
						className='p-1.5 flex gap-1  focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<PiSignInBold size={25} />
            <span>Login</span>
					</Link>
				)}

				{!authUser && (
					<Link
						to='/register'
						className='p-1.5 flex gap-1  focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<AiOutlineUserAdd size={25} />
            <span>Register</span>
					</Link>
				)}

				{/* {(
					<div className='flex flex-col gap-2 mt-auto'>
						<Logout />

					</div>
				)} */}
			</nav>
    </aside>
  )
}

export default SideBar