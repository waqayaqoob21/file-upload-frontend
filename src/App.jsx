// src/App.jsx
import React, { useState } from 'react';
import { uploadFile } from './api/fileService';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setError('');
    setStatus('');

    if (!file) {
      setSelectedFile(null);
      return;
    }

    const allowedTypes = [
      'application/pdf',
      'image/png',
      'image/jpeg',
      'image/jpg',
      'image/gif',
      'image/webp',
    ];

    if (!allowedTypes.includes(file.type)) {
      setSelectedFile(null);
      setError('Only PDF and image files are allowed.');
      return;
    }

    setSelectedFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setStatus('');

    if (!selectedFile) {
      setError('Please select a file first.');
      return;
    }

    try {
      setStatus('Uploading...');
      const result = await uploadFile(selectedFile);
      setStatus(result.message || 'File uploaded successfully.');
    } catch (err) {
      console.error(err);
      const backendError =
        err?.response?.data?.detail ||
        err?.response?.data?.error ||
        'Upload failed. Please check backend logs.';
      setError(backendError);
      setStatus('');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>File Upload (PDF / Image)</h1>
        <p style={styles.subtitle}>
          Select a PDF or image file and upload it to the Django backend.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="file"
            accept="application/pdf,image/*"
            onChange={handleFileChange}
            style={styles.fileInput}
          />

          <button type="submit" style={styles.button}>
            Upload
          </button>
        </form>

        {selectedFile && (
          <p style={styles.info}>
            Selected file: <strong>{selectedFile.name}</strong> ({selectedFile.type})
          </p>
        )}

        {status && <p style={styles.status}>{status}</p>}
        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f5f5f5',
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  card: {
    background: '#ffffff',
    padding: '2rem 2.5rem',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '600px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
  },

  title: {
    margin: 0,
    marginBottom: '0.5rem',
    fontSize: '1.9rem',
    fontWeight: 600,
    color: '#222',
  },

  subtitle: {
    marginTop: 0,
    marginBottom: '1.5rem',
    color: '#666',
    fontSize: '0.95rem',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },

  fileInput: {
    padding: '0.5rem 0',
  },

  button: {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    background: '#2563eb',
    color: '#fff',
    fontWeight: 600,
    fontSize: '1rem',
  },

  info: {
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#444',
  },

  status: {
    marginTop: '0.75rem',
    color: '#15803d',
    fontWeight: 500,
  },

  error: {
    marginTop: '0.75rem',
    color: '#b91c1c',
    fontWeight: 500,
  },
};

export default App;
