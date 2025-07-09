import React from 'react';

const QRForm = ({
  activeTab, urlInput, setUrlInput,
  textInput, setTextInput, contactInfo, setContactInfo
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        {activeTab === 'url' ? 'Enter URL' :
         activeTab === 'text' ? 'Enter Text' :
         'Contact Information'}
      </h2>

      {activeTab === 'url' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Website URL</label>
          <input
            type="url"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="https://example.com"
            className="w-full p-3 border rounded-lg"
          />
        </div>
      )}

      {activeTab === 'text' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Text</label>
          <textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            rows={4}
            className="w-full p-3 border rounded-lg resize-none"
            placeholder="Enter your text"
          />
        </div>
      )}

      {activeTab === 'contact' && (
        <div className="space-y-4">
          {['name', 'phone', 'email', 'organization', 'url'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
              <input
                type="text"
                value={contactInfo[field]}
                onChange={(e) => setContactInfo({ ...contactInfo, [field]: e.target.value })}
                className="w-full p-3 border rounded-lg"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QRForm;
