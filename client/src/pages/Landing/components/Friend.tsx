interface FriendProps {
  name: string
}

const Friend = ({ name }: FriendProps) => {
  return (
    <div className='flex h-16 w-full items-center bg-bg-secondary px-4 font-bold text-accent'>
      {name}
    </div>
  )
}

export default Friend
