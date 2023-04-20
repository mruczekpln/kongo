interface LogoProps {
  scale?: number
}

const Logo = ({ scale = 1 }: LogoProps) => {
  return (
    <h1
      className='font-norml h-max w-max rounded-md  font-monospace text-2xl leading-none text-accent underline'
      style={{
        textShadow: "1px 0px 0px #AAB9CF, 2px 0px 0px #BDD4E7",
        scale: `${scale}`,
      }}
    >
      Kongo
    </h1>
  )
}

export default Logo
