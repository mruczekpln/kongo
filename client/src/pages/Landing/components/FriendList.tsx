import Friend from "./Friend"

interface FriendListProps {
  friends: {
    name: string
  }[]
}

const FriendList = ({ friends }: FriendListProps) => {
  return (
    <section className='relative mt-8 flex min-h-screen w-1/4 flex-col items-center justify-center gap-8 px-8'>
      <div className='absolute -top-8 flex h-16 w-3/4 items-center justify-center rounded-b-xl border-2'>
        <h1 className='text-2xl font-semibold text-textPrimary'>
          your friends
        </h1>
      </div>

      <div className='flex h-max min-h-[600px] w-full flex-col justify-between overflow-hidden rounded-xl border-2 border-backgroundAccent shadow-md'>
        <div className='min-h-[50%] border-b-2'>
          {friends.map((item, index) => (
            <Friend name={`user${index}`} key={index} />
          ))}
        </div>

        <div className='min-h-[50%]'>
          <div className='flex h-20 w-full items-center justify-center border-t-2 bg-backgroundAccent text-2xl leading-none'>
            friend requests
          </div>

          <div>
            {[...new Array(3)].map((item, index) => (
              <Friend name={`user${index}`} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FriendList
