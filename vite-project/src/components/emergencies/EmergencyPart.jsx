import React from 'react'

const EmergencyPart = ({user}) => {
  return (
	<section>
		<div className="space-y-2">
			<h1 className='font-semibold pt-5'>First Name:</h1>
			<p className='text-sm'>{user?.firstName}</p>
			<h1 className='font-semibold'>Last Name:</h1>
			<p className='text-sm'>{user?.lastName}</p>
			<h1 className='font-semibold'>Phone:</h1>
			<p className='text-sm'>{user?.number}</p>
			<h1 className='font-semibold'>Department:</h1>
			<p className='text-sm'>{user?.department}</p>
		</div>
		
	</section>
  )
}

export default EmergencyPart