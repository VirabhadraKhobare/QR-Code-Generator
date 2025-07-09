export const formatUrl = (url) => {
  if (!url) return '';
  url = url.trim();
  return url.match(/^https?:\/\//) ? url : `https://${url}`;
};

export const generateQRCode = (data) => {
  if (!data.trim()) return '';
  const encoded = encodeURIComponent(data);
  return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encoded}`;
};

export const generateVCard = (info) => {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    info.name && `FN:${info.name}`,
    info.phone && `TEL:${info.phone}`,
    info.email && `EMAIL:${info.email}`,
    info.organization && `ORG:${info.organization}`,
    info.url && `URL:${formatUrl(info.url)}`,
    'END:VCARD'
  ].filter(Boolean).join('\n');
};
