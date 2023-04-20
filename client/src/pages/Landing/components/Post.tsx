interface PostProps {
  actions: [() => void, () => void]
  author: string
  text: string
  which?: "first" | "last"
}

const Post = ({ author, text, actions, which }: PostProps) => {
  const [animateUp, animateDown] = actions
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-10 font-main'>
      {which !== "first" ? (
        <button
          className='grid h-16 w-16 rotate-180 place-items-center rounded-2xl border-2 text-white'
          onClick={animateUp}
        >
          <img src='./public/arrow.png' alt='up' />
        </button>
      ) : (
        <div className='h-16 w-16 opacity-0'></div>
      )}
      <div className='flex min-h-[350px] w-full flex-col overflow-hidden rounded-xl font-main shadow-xl'>
        <div className='bg-bg-secondary-layer flex h-16 w-full items-center gap-4 pl-4  leading-[1.5] text-textPrimary'>
          <p className='font-monospace font-bold text-accent'>{author}</p>
          <div className='h-2/5 border-l-2 border-backgroundAccent'></div>
          <p className='text-textSecondary'>time</p>
        </div>
        <div className='flex h-full w-full grow items-center rounded-b-xl border-2 border-backgroundAccent p-8 text-3xl'>
          {text || <p className='text-bg-secondary'>this post is empty</p>}
        </div>
      </div>
      {which !== "last" ? (
        <button
          className='grid h-16 w-16 place-items-center rounded-2xl border-2 text-white'
          onClick={animateDown}
        >
          <img src='./public/arrow.png' alt='down' />
        </button>
      ) : (
        <div className='h-16 w-16 opacity-0'></div>
      )}
    </div>
  )
}

export default Post
