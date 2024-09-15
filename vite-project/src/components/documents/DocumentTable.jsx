import React from 'react';

const DocumentTable = () => {
  const sampleData = [
    { name: 'Document1.pdf', type: 'PDF', size: '1.2 MB', dateCreated: '2024-01-15', visibility: 'Public' },
    { name: 'Presentation.pptx', type: 'PowerPoint', size: '2.4 MB', dateCreated: '2024-02-20', visibility: 'Private' },
    { name: 'Spreadsheet.xlsx', type: 'Excel', size: '3.1 MB', dateCreated: '2024-03-05', visibility: 'Public' },
    { name: 'Report.docx', type: 'Word', size: '1.8 MB', dateCreated: '2024-04-10', visibility: 'Private' },
    { name: 'Image.jpg', type: 'Image', size: '500 KB', dateCreated: '2024-05-25', visibility: 'Public' }
  ];

  return (
    <div className="bg-blue-400 border rounded-3xl h-screen p-5">
      {/* Header */}
      <div className="grid grid-cols-5 gap-4 h-12 font-semibold p-2 rounded-3xl bg-red-100">
        <h1>Name</h1>
        <h1>Type</h1>
        <h1>Size</h1>
        <h1>Date Created</h1>
        <h1>Visibility</h1>
      </div>

      {/* Data Rows */}
      <div className="space-y-2 p-4">
        {sampleData.map((item, index) => (
          <div key={index} className="grid grid-cols-5 gap-4 p-2 border-b last:border-none">
            <span>{item.name}</span>
            <span>{item.type}</span>
            <span>{item.size}</span>
            <span>{item.dateCreated}</span>
            <span>{item.visibility}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentTable;
