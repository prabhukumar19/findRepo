import React from 'react'
import Repository from "./Repository";

const SortRepository = () => {
	return (
		<div className={`lg:w-2/3 w-full bg-glass rounded-lg px-8 py-6`}>
			<ol className='relative border-s border-gray-200'>
				<Repository />
				<Repository />
				<Repository />
			</ol>
		</div>
	);
};
export default SortRepository