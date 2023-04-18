interface LogoProps {
  scale?: number
}

const Logo = ({ scale = 1 }: LogoProps) => {
  return (
    <h1
      className='h-max text-3xl font-bold text-text-primary'
      style={{
        textShadow: "4px 0px 0px #C14953, 8px 0px 0px #848FA5",
        scale: `${scale}`,
      }}
    >
      Kongo
    </h1>
  )
}

export default Logo
