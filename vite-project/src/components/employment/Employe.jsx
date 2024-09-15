import React from 'react'

const Employe = () => {
  return (
	<section>

    <div className=' flex bg-blue-800 rounded-xl gap-6 p-6'>
      {/* Left Section */}
      <div className='border-2 w-96 rounded-xl p-4 space-y-4'>
        <div className='bg-blue-900 rounded-xl border-2 p-4'>
          <h1 className="font-semibold">Contract and Annual Leave Information</h1>
          <p className='text-sm'>Contracted hours of work, employment start date and leave entitled</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-sm'>Entitlement unit in</p>
          <p className='text-sm'>days</p>
        </div>
        <div className="flex justify-between">
          <p className='text-sm'>Annual leave balance</p>
          <p className='text-sm'>25 days</p>
        </div>
        <h1 className='font-semibold'>Contract Summary</h1>
        <div className="space-y-2 text-sm">
          <p>Employment type <span className="float-right">25 Days</span></p>
          <p>Entitlement <span className="float-right">Days</span></p>
          <p>Contract start date <span className="float-right">May 2024</span></p>
          <p>Working time pattern <span className="float-right">Mon - Fri</span></p>
          <p>Contracted hours/week <span className="float-right">35 hrs</span></p>
          <p>Annual leave year start <span className="float-right">01 Jan</span></p>
          <p>Min. leave entitlement <span className="float-right">25 Days</span></p>
        </div>
      </div>

      {/* Right Section */}
      <div className='border-2 w-96 rounded-xl p-4 space-y-4'>
        <div className='bg-blue-900 rounded-xl border-2 p-4'>
          <h1 className="font-semibold">Role Information</h1>
          <p className='text-sm'>Job title, probation, and notice period</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-sm'>Role title</p>
          <p className='text-sm'>Accountant</p>
        </div>
        <div className="flex justify-between">
          <p className='text-sm'>Contract type</p>
          <p className='text-sm'>Full-time</p>
        </div>
        <div className="space-y-2 text-sm">
          <p>Report to <span className="float-right">Rishabh Sinha</span></p>
          <p>Probation required <span className="float-right">Yes</span></p>
          <p>Probation end date <span className="float-right">30th June 2024</span></p>
          <p>Notice during probation <span className="float-right">Not specified</span></p>
          <p>Notice period <span className="float-right">Not specified</span></p>
        </div>
      </div>
	 
    </div>
	<div className="flex gap-6">
	<div className='bg-blue-900 w-3/6 mt-4 rounded-xl border-2 p-4'>
          <h1 className="font-semibold">Contract and Annual Leave Information</h1>
          <p className='text-sm'>Contracted hours of work, employment start date and leave entitled</p>
        </div>
		<div className='bg-blue-900 w-3/6 mt-4 rounded-xl border-2 p-4'>
          <h1 className="font-semibold">Contract and Annual Leave Information</h1>
          <p className='text-sm'>Contracted hours of work, employment start date and leave entitled</p>
        </div>
	</div>
	<div className="flex gap-6">
	<div className='bg-blue-900 w-3/6 mt-4 rounded-xl border-2 p-4'>
          <h1 className="font-semibold">Contract and Annual Leave Information</h1>
          <p className='text-sm'>Contracted hours of work, employment start date and leave entitled</p>
        </div>
		<div className='bg-blue-900 w-3/6 mt-4 rounded-xl border-2 p-4'>
          <h1 className="font-semibold">Contract and Annual Leave Information</h1>
          <p className='text-sm'>Contracted hours of work, employment start date and leave entitled</p>
        </div>
	</div>
	<div className="flex gap-6">
	<div className='bg-blue-900 w-3/6 mt-4 rounded-xl border-2 p-4'>
          <h1 className="font-semibold">Contract and Annual Leave Information</h1>
          <p className='text-sm'>Contracted hours of work, employment start date and leave entitled</p>
        </div>
		<div className='bg-blue-900 w-3/6 mt-4 rounded-xl border-2 p-4'>
          <h1 className="font-semibold">Contract and Annual Leave Information</h1>
          <p className='text-sm'>Contracted hours of work, employment start date and leave entitled</p>
        </div>
	</div>
	<div className="flex gap-6">
	<div className='bg-blue-900 w-3/6 mt-4 rounded-xl border-2 p-4'>
          <h1 className="font-semibold">Contract and Annual Leave Information</h1>
          <p className='text-sm'>Contracted hours of work, employment start date and leave entitled</p>
        </div>
		<div className='bg-blue-900 w-3/6 mt-4 rounded-xl border-2 p-4'>
          <h1 className="font-semibold">Contract and Annual Leave Information</h1>
          <p className='text-sm'>Contracted hours of work, employment start date and leave entitled</p>
        </div>
	</div>
	
</section>
  )
}

export default Employe
