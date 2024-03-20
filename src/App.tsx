import React from 'react'
import { Toasty } from './components/toasty';
import { Airplane } from "@phosphor-icons/react";
import { defaultProps } from './components/toasty/props';

const App: React.FC = () => {
  return (
    <div className='p-5 m-5 flex flex-col gap-4'>
      <Toasty message="This is a toast message" />
      <Toasty message="This is a toast message" showCloseButton showDivider showIcon status="information" />
      <Toasty message="This is a toast message" showCloseButton showDivider showActionButton showIcon status="error" />
      <Toasty message="This is a toast message" showCloseButton showIcon status="success" />
      <Toasty message="This is a toast message" showCloseButton showIcon status="warning" />
      <Toasty message="This is a toast message" />
      <Toasty swapIcon={<Airplane />} message="This is a toast message" />
      <Toasty {...defaultProps} message="This is a toast message" />
    </div>
  )
}

export default App;
