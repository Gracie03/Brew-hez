import React from 'react'
import { ImSpinner9 } from 'react-icons/im'

function loading() {
  return (
    <div className="flex items-center justify-center h-[100vh] w-full">
      <span className="animate-spin text-4xl ">
        <ImSpinner9 color='#FF0000' />
      </span>
    </div>
  );
}

export default loading