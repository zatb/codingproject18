import React, { useState } from 'react';

const UploadButton = () => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    alert('Uploading image...');
    setUploading(true);

    setTimeout(() => {
      setUploading(false);
      alert('Image uploaded successfully!');
    }, 2000);
  };

  return (
    <button onClick={handleUpload} disabled={uploading}>
      {uploading ? 'Uploading...' : 'Upload Image'}
    </button>
  );
};

export default UploadButton;
