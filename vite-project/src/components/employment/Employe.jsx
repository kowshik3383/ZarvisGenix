import React from 'react'

const Employe = () => {
  return (
	<section className='h-screen flex bg-blue-800 rounded-xl  '>
		<div className='border-2 w-96 rounded-xl'>
		<div className='bg-blue-900 w-96  rounded-xl border-2 pl-11'>
			<h1 className="font-semibold pt-7">Contract and annual leave information</h1>
			<p className='text-sm'>Contracted hours of work, employment start <br /> date and leave entitled</p>
		</div>
		<div className='flex gap-20 bg-blue-800 pl-11 '>
			<p className='text-sm pt-2'>Entitlement unit in</p>
			<p className='text-sm pt-2'>days</p>
		</div>
		<div className="flex pl-11 space-x-14 pt-2">
			<p className='text-sm'>Annual leave balance</p>
			<p className='text-sm'>25days</p>
		</div>
		<h1 className='pl-11 pt-7'>Contract Summary</h1>
		<div className="pl-11 pt-5 space-y-4 text-sm">
			<p>Employement type <span className="pl-24">25Days</span></p>
			<p>Entitlement <span className="pl-36 ">Days</span></p>
			<p>Contract start date <span className="pl-24 ">May 2024</span></p>
			<p>Working time pattern<span className="pl-20 ">Monday - Friday</span></p>
			<p>Contracted hours per week<span className="pl-12 ">35 hours </span></p>
			<p>Annual leave year start<span className="pl-20 ">01 Jan</span></p>
			<p>Min. leave entitlement<span className="pl-24 ">25 Days</span></p>

		</div>
		</div>
		<div>
		<div className='bg-blue-900 w-96  rounded-xl border-2 pl-11'>
			<h1 className="font-semibold pt-7">Role Information</h1>
			<p className='text-sm'>Job title, probation and notice period </p>
		</div>
		<div className='flex gap-20 bg-blue-800 pl-11 '>
			<p className='text-sm pt-2'>Role title</p>
			<p className='text-sm pt-2'>Accountant</p>
		</div>
		<div className="flex pl-11 space-x-14 pt-2">
			<p className='text-sm'>Contract type</p>
			<p className='text-sm'>Full time</p>
		</div>
	
		<div className="pl-11 pt-5 space-y-4 text-sm">
			<p>Report to <span className="pl-24">Rishabh Sinha</span></p>
			<p>Probhation required <span className="pl-36 ">Yes</span></p>
			<p>Probation end date <span className="pl-24 ">Sunday, 30th June 2024</span></p>
			<p>Notice required during <br /> Probation period<span className="pl-20 ">Not specified</span></p>
			<p>Notice period<span className="pl-12 ">Not specified </span></p>


		</div>
		</div>
		
	</section>
  )
}

export default Employe