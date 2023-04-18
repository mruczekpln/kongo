import Post from "./components/Post"
import Logo from "../../components/ui/Logo"
import { createRef, useRef, useState } from "react"
import Friend from "./components/Friend"

interface Post {
  id?: string
  author: string
  text: string
}

interface State {
  scroll: number
}

const LandingPage = () => {
  const scrollingRef = createRef<HTMLDivElement>()
  const state = useRef<State>({ scroll: 0 })
  const posts = [...new Array(10)]
  const friends = [...new Array(10)]

  const animate = () =>
    scrollingRef.current?.animate(
      { transform: `translateY(${state.current.scroll / posts.length}%)` },
      { fill: "forwards", duration: 300, easing: "ease-in-out" }
    )

  const animateUp = () => {
    state.current.scroll += 100
    animate()
  }

  const animateDown = () => {
    state.current.scroll -= 100
    animate()
  }

  const which = (index: number, arr: any[]) => {
    if (index === 0) return "first"
    else if (index === arr.length - 1) return "last"
    return undefined
  }

  return (
    <main className='flex h-screen w-screen items-center justify-center gap-8 bg-bg-primary px-8'>
      <section className='flex h-3/5 w-1/4 flex-col gap-0.5 overflow-hidden rounded-xl bg-bg-primary'>
        {friends.map((item, index) => (
          <Friend name='index' key={index} />
        ))}
      </section>
      <div className='h-full w-1/2 grow overflow-y-hidden'>
        <section
          ref={scrollingRef}
          className='flex h-auto w-full flex-col items-center border-x-2 border-bg-secondary bg-bg-secondary-layer px-16'
        >
          <div className='absolute top-8'>
            <Logo scale={2} />
          </div>
          {posts.map((item, index, arr) => (
            <Post
              which={which(index, arr)}
              actions={[animateUp, animateDown]}
              author={"user" + index}
              text={"wale gowno".repeat(index)}
              key={index}
            />
          ))}
        </section>
      </div>
      <section className='h-full w-1/4 bg-bg-secondary'>friends</section>
    </main>
  )
}

export default LandingPage
