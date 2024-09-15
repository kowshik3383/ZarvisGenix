import React from 'react'
import DocumentTable from './DocumentTable'

const DocumentPart = () => {
  return (
    <section className="p-6">
      <div className="flex items-center rounded-3xl  ">
        <input
          type="text"
          className="px-4 py-2 rounded-xl bg-blue-600 text-black shadow-lg mt-7 w-80 "
          placeholder="Search..."
        />
        <button
          type="submit"
          className="bg-blue-100 text-white px-4 py-2 mt-7 "
        >
          Search
        </button>
		<button
          type="submit"
          className="bg-blue-100 text-white w-32 px-4 py-2 mt-7 ml-28 rounded-2xl "
        >
          New Folder
        </button>
		<button
          type="submit"
          className="border text-black w-40 px-4 py-2 mt-7 ml-4 rounded-2xl "
        >
          Create report
        </button>
      </div>
	  <DocumentTable/>
    </section>
  )
}

export default DocumentPart
