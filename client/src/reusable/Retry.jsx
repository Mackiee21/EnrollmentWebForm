import Button from "./Button"

function Retry({ onRetry }) {
  return (
    <div className="h-80 flex flex-col items-center justify-center">
      <p className="mb-2 text-lg">Failed, please check your connection and try again!</p>
      <Button text="Retry" onClick={onRetry} />
    </div>
  )
}

export default Retry
