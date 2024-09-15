import React from 'react'

const PersonalPart = ({user}) => {
  return (
	<section>
		<div>
		<div className='space-y-4'>
			<h1 className='font-semibold mt-5' >Contact Information</h1>
			<p className='text-sm'>Personal Email</p>
			<p className='text-sm'>{user?.email}</p>
			<p  className='text-sm'>Work Email</p>
			<p className='text-sm'>{user?.email}</p>
		</div>
		<div className='mt-7 space-y-4'>
			<h1 className='font-semibold'>Personal Information</h1>
			<p className='text-sm'>First name:</p>
			<p className='text-sm'>{user?.firstName}</p>
			<p  className='text-sm'>LastName:</p>
			<p className='text-sm'>{user?.lastName}</p>
		</div>
		</div>
		
	</section>
  )
}

export default PersonalPart