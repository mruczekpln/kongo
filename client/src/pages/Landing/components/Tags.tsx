import Tag from "./Tag"

const Tags = () => {
  return (
    <section className='flex h-[400px] w-full flex-col justify-between rounded-xl border-2 px-4 pt-4 shadow-lg'>
      <p className='border-b-2 pb-2 text-xl'>Popular tags</p>
      {[...new Array(5)].map((item, index) => (
        <Tag key={index} />
      ))}
    </section>
  )
}

export default Tags
