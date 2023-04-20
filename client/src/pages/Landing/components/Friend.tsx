import { Link } from "react-router-dom"

interface FriendProps {
  name: string
}

const Friend = ({ name }: FriendProps) => {
  return (
    <div className='bg-bg-secondary flex h-16 w-full items-center justify-between border-0 border-b-2 px-4 last:border-0'>
      <p className='font-monospace font-bold text-secondary'>{name}</p>
      <Link to={"/"} className='underline-offset-[3px] hover:underline'>
        check his posts!
      </Link>
    </div>
  )
}

export default Friend
