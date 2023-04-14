interface InputProps {
	inputRef: React.Ref<HTMLInputElement>
	name: string
}

const Input = ({ name, inputRef }: InputProps) => {
	return (
		<div className='relative w-full'>
			<label className='absolute top-[-24px] text-text-secondary' htmlFor={name}>
				{name}
			</label>
			<input
				ref={inputRef}
				className='mt-0.5 h-12 w-full rounded-md bg-bg-secondary pl-3'
				type='text'
				name={name}
				id={name}
			/>
		</div>
	)
}

export default Input
