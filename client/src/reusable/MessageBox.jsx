import {  } from 'lucide-react'
import Button from './Button'
function MessageBox({header, message, handleClose}) {
  return (
    <div className="flex bg-white/50 items-center justify-center absolute inset-0 z-50">
       <div className="w-60 bg-white flex flex-col items-center rounded-md shadow-lg shadow-zinc-300 justify-center">
            <div className="border-b border-gray-300 rounded-md w-full px-4 py-3 bg-main text-white text-base tracking-wide font-extrabold">{header}</div>
            <div className="w-full p-6">
                {message}
            </div>
            <div className='mb-3 w-full flex items-center gap-1 justify-end px-3'>
                <Button text="Close" className="bg-main rounded-md" onClick={handleClose} />
            </div>
       </div>
    </div>
  )
}

export default MessageBox
