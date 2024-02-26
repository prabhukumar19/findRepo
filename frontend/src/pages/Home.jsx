import React from 'react'
import Profile from '../components/Profile';
import Search from '../components/Search';
import Repository from '../components/Repository';
import SortRepository from '../components/SortRepository';
import Spinner from '../components/Spinner';
const Home = () => {
	return (
		<div className='m-4'>
			{/* <Search />
			<SortRepository />
			<div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
				<Profile />
				<Repository />
				<Spinner />
			</div> */}
		</div>
	);
};
export default Home