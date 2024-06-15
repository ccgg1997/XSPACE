import React from 'react';
import './Loading.css';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Está tardando un poco mas de lo esperado... por favor ten paciencia :)');
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container" tabIndex={200}>
      <div className="content">
        <div className="text-center">
          <h1 className="title">X-Space</h1>
          <p className="subtitle">Cargando nivel...</p>
          <p className="message">{message}</p>
        </div>
        <div className="spinner-container">
          <div className="spinner" />
        </div>
      </div>
      <div className="background">
        <div className="background-gradient" />
        <div className="background-image" />
        <div className="background-stars" />
      </div>
    </div>
  );
}
