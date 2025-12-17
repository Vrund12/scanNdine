import {QRCodeCanvas}from 'qrcode.react';


function QR() {
  const url = 'http://192.168.29.13:5173/user?table=5'; // replace with your actual IP

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="mb-2 text-lg font-semibold">Scan to see the menu</h2>
      <QRCodeCanvas value={url} size={256} />
      <p className="mt-2 text-sm text-gray-600">{url}</p>
    </div>
  );
}

export default QR
