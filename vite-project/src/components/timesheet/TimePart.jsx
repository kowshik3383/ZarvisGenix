import React from 'react'

const TimePart = () => {
  return (
	<section>
		<div className='flex gap-11 font-normal mt-5 p-2 rounded-3xl h-10 bg-blue-800'>
<button>BST/Euorope</button>
<button>Today</button>
<button>Export</button>
<button>Yesterday</button>
<button className='font-medium text-base'>Past & days</button>
<button>Past 30 days</button>
<button>Date Range</button>
		</div>
		<div className="flex gap-7">
			<div className="bg-blue-800 w-40 p-4 rounded-xl mt-5">
				<h1 className='text-sm'>Total time tracked</h1>
				<h1 className='font-semibold text-blue-100'>130 hrs 04 min</h1>
			</div>
			<div className="bg-blue-800 w-40 p-4 rounded-xl mt-5">
				<h1 className='text-sm'>Ideal Minutes</h1>
				<h1 className='font-semibold text-blue-100'>0 mn</h1>
			</div>
			<div className="bg-blue-800 w-40 p-4 rounded-xl mt-5">
				<h1 className='text-sm'>Paid leaves</h1>
				<h1 className='font-semibold text-blue-100'>0 min</h1>
			</div>
			<div className="bg-blue-800 w-40  p-4 rounded-xl mt-5">
				<h1 className='text-sm'>Productive</h1>
				<h1 className='font-semibold text-blue-100'>8 hrs 39 min</h1>
			</div>
			<div className="bg-blue-800 w-40 p-4 rounded-xl mt-5">
				<h1 className='text-sm'>Manual time</h1>
				<h1 className='font-semibold text-blue-100'>0 min</h1>
			</div>
			
		</div>
		<div className='flex  font-normal mt-5  rounded-3xl h-10 bg-blue-700'>
<h1 className='flex ml-96 font-semibold p-2 '>Timelines</h1>
		</div>
	</section>
  )
}

export default TimePart