interface PostProps {
	author: string
	text: string
}

const Post = ({ author, text }: PostProps) => {
	return (
		<div className='flex h-48 w-full flex-col rounded-xl border-2 border-bg-secondary bg-bg-primary font-main'>
			<div className='flex h-1/5 w-full items-center border-b-2 border-bg-secondary pl-4 font-monospace font-bold leading-[0.5] text-text-secondary'>
				{author}
			</div>
			<div className='h-4/5 w-full p-4 text-2xl text-text-primary'>{text}</div>
		</div>
	)
}

export default Post
