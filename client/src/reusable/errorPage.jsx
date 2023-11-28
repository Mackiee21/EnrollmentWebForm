import { useRouteError, Link } from 'react-router-dom'
import Button from './Button';
import { Home, UserPlus } from 'lucide-react'

function ErrorPage(){
    const error = useRouteError()
    console.log(error)
    return (
        <div className="h-5/6 w-full flex flex-col items-center justify-center gap-1">
          {/* <h1 className='font-extrabold text-2xl'>Oops!</h1>
          <p className='text-base'>Sorry, an unexpected error has occurred.</p>
          <p className='font-normal text-lg non-italic mb-2'>{error.statusText || error.message}</p> */}
          <h1 className='font-bold text-2xl'>Developing...</h1>
          <p className='mt-2 mb-3 text-base'>This page is currently under development. Thank you!</p>
          <Link to='/'><Button text="Home" className="bg-main" iconLeft={<Home size={18} />} /></Link>
        </div>
      );
}

export default ErrorPage