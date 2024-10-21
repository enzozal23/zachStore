import React from 'react';

function Loader({ children }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {children}
      <div className="loader mt-6 w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;

