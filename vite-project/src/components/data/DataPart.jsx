import React from 'react';
import first from '../../../public/data/first.svg';
import second from '../../../public/data/second.svg';
import third from '../../../public/data/third.svg';
import four from '../../../public/data/four.svg';
import five from '../../../public/data/five.svg';
import six from '../../../public/data/six.svg';

const DataPart = () => {
  // Array of different SVGs and text content for dynamic rendering
  const items = [
    { logo: first, title: 'Readiness Assessments' },
    { logo: second, title: 'Assessment Automation' },
    { logo: third, title: 'Data Mapping & Inventory' },
    { logo: four, title: 'Website Scanning & Cookie Compliance' },
    { logo: five, title: 'Subject Access Rights Portal' },
    { logo: six, title: 'Consent Management & Consent Receipt' },
    { logo: first, title: 'Vendor Risk Management' },
   
  ];

  return (
    <section className="p-6">
      {/* Responsive grid for 3 columns on medium screens and above */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {/* Loop through items array and render each logo and title */}
        {items.map((item, index) => (
          <div key={index} className="bg-blue-300 w-full h-52 p-6 rounded-3xl flex flex-col items-center justify-center">
            <img src={item.logo} alt={`icon-${index}`} className="w-16 h-16 mb-4" />
            <h1 className="text-sm mb-4">{item.title}</h1>
            <button className="bg-blue-100 h-11 w-32 rounded-2xl">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DataPart;
