import Button from "./Button"

function Retry({ onRetry, message }) {
  return (
    <div className="h-80 flex flex-col items-center justify-center">
      <p className="mb-2 text-lg">{message ?? 'Failed, please check your connection and try again!'}</p>
      <Button text="Retry" className="bg-main" onClick={onRetry} />
    </div>
  )
}

export default Retry
