import React from 'react';
import { Download, Copy, Check } from 'lucide-react';

const QRDisplay = ({ qrCodeUrl, qrValue, copied, setCopied, activeTab }) => {
  const downloadQRCode = () => {
    if (!qrCodeUrl) return;
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = `qr-code-${activeTab}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(qrCodeUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Generated QR Code</h2>
      <div className="bg-gray-50 p-6 rounded-lg w-full max-w-sm">
        {qrCodeUrl ? (
          <>
            <img src={qrCodeUrl} alt="QR Code" className="w-full rounded shadow" />
            <div className="flex gap-2 mt-4">
              <button onClick={downloadQRCode} className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2">
                <Download size={16} /> Download
              </button>
              <button onClick={copyToClipboard} className="flex-1 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 flex items-center justify-center gap-2">
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy URL'}
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-400 text-center">No data to generate QR</p>
        )}
      </div>
      {qrValue && (
        <div className="w-full max-w-sm">
          <label className="block text-sm font-medium text-gray-700">Data Preview</label>
          <div className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            <pre>{qrValue}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRDisplay;
