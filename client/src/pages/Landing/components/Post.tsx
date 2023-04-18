interface PostProps {
  actions: [() => void, () => void]
  author: string
  text: string
  which?: "first" | "last"
}

const Post = ({ author, text, actions, which }: PostProps) => {
  const [animateUp, animateDown] = actions
  return (
    <div className='flex h-screen w-full flex-col items-center justify-evenly'>
      {which !== "first" ? (
        <button
          className='h-16 w-16 rounded-2xl bg-primary'
          onClick={animateUp}
        ></button>
      ) : (
        <div className='h-16 w-16 opacity-0'></div>
      )}
      <div className='flex min-h-[350px] w-full flex-col overflow-hidden rounded-xl bg-bg-primary font-main'>
        <div className='flex h-16 w-full items-center gap-4 bg-bg-secondary-layer pl-4  leading-[1.5] text-text-secondary'>
          <p className='font-monospace font-bold text-accent'>{author}</p>
          <div className='h-2/5 border-l-2 border-bg-secondary '></div>
          <p className='text-bg-secondary'>time</p>
        </div>
        <div className='flex h-full w-full grow items-center rounded-b-xl border-2 border-bg-secondary p-8 text-3xl text-text-primary'>
          {text || <p className='text-bg-secondary'>this post is empty</p>}
        </div>
      </div>
      {which !== "last" ? (
        <button
          className='h-16 w-16 rounded-2xl bg-primary'
          onClick={animateDown}
        ></button>
      ) : (
        <div className='h-16 w-16 opacity-0'></div>
      )}
    </div>
  )
}

export default Post
