import React from 'react';
import { useRouter } from 'next/router';

const Table = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Página de Servicios</h1>
      <p>Esta es la página de table.</p>
    </div>
  );
}

export default Table;
