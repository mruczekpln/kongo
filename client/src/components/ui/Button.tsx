interface ButtonProps {
	text: string
}

const Button = ({ text }: ButtonProps) => {
	return (
		<button
			type='submit'
			className='h-16 w-full rounded-md border-b-4 border-primary-layer bg-primary duration-300 hover:border-accent-layer hover:bg-accent'
		>
			{text}
		</button>
	)
}

export default Button
