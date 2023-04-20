interface ButtonProps {
  text: string
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button
      type='submit'
      className='hover:border-accent-layer h-16 w-full rounded-md border-b-4 border-accent bg-primary text-white duration-300 hover:bg-accent'
    >
      {text}
    </button>
  )
}

export default Button
