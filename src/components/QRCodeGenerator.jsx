import React, { useState, useEffect } from 'react';
import Tabs from './Tabs';
import QRForm from './QRForm';
import QRDisplay from './QRDisplay';
import { formatUrl, generateVCard, generateQRCode } from '../utils/qrHelpers';

const QRCodeGenerator = () => {
  const [activeTab, setActiveTab] = useState('url');
  const [qrValue, setQrValue] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const [urlInput, setUrlInput] = useState('');
  const [textInput, setTextInput] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '', phone: '', email: '', organization: '', url: ''
  });

  // Effect to regenerate QR on state change
  useEffect(() => {
    let data = '';
    if (activeTab === 'url') data = formatUrl(urlInput);
    else if (activeTab === 'text') data = textInput;
    else if (activeTab === 'contact') data = generateVCard(contactInfo);

    setQrValue(data);
    setQrCodeUrl(generateQRCode(data));
  }, [activeTab, urlInput, textInput, contactInfo]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">QR Code Generator</h1>
          <p className="text-gray-600">Create QR codes for URLs, text, and contact info</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="p-6 grid md:grid-cols-2 gap-8">
            <QRForm
              activeTab={activeTab}
              urlInput={urlInput}
              setUrlInput={setUrlInput}
              textInput={textInput}
              setTextInput={setTextInput}
              contactInfo={contactInfo}
              setContactInfo={setContactInfo}
            />
            <QRDisplay
              qrCodeUrl={qrCodeUrl}
              qrValue={qrValue}
              copied={copied}
              setCopied={setCopied}
              activeTab={activeTab}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
