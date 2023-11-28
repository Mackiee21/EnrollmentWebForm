import HelmetComp from '../../reusable/HelmetComp'

function Subject() {
  return (
    <div className='h-96 flex flex-col gap-2 items-center justify-center text-main tracking-wide'>
      <HelmetComp title="Univeristy of Cebu - Subjects" />
      <h2 className='text-2xl'>Hello from subject</h2>
      <p className='text-lg'>Sample Only</p>
    </div>
  )
}

export default Subject
