import Search from "./Search"
import Post from "./Post"
import Logo from "../../../components/ui/Logo"
import { useRef, createRef, useEffect, useState, ChangeEvent } from "react"

interface Post {
  id?: string
  author: string
  text: string
}

const Posts = () => {
  const scrollingRef = createRef<HTMLDivElement>()
  const scroll = useRef<number>(0)
  const [search, setSearch] = useState<string>("")
  const posts = [
    {
      author: "user1",
      text: "kocham piwo",
    },
    {
      author: "user2",
      text: "kocham piwo",
    },
    {
      author: "user3",
      text: "kocham piwo",
    },
    {
      author: "user4",
      text: "kocham piwo",
    },
    {
      author: "norbi",
      text: "kocham piwo",
    },
  ]
  const [filtered, setFiltered] = useState<Post[]>(posts)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filteredPosts = posts.filter((i) => i.author === search)
      setFiltered(filteredPosts.length > 0 ? filteredPosts : posts)
      console.log(search, filteredPosts)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [search])

  useEffect(() => console.log(filtered), [filtered])

  const animate = () =>
    (scrollingRef.current!.style.transform = `translateY(${
      scroll.current / posts.length
    }%)`)

  const animateUp = () => {
    scroll.current += 100
    animate()
  }

  const animateDown = () => {
    scroll.current -= 100
    animate()
  }

  const which = (index: number, arr: any[]) => {
    if (index === 0) return "first"
    else if (index === arr.length - 1) return "last"
    return undefined
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value)

  return (
    <div className='h-full w-1/2 grow overflow-y-hidden'>
      <div className='absolute flex h-32 w-1/2 items-center justify-between border-b-2 px-16'>
        <div className='ml-8'>
          <Logo scale={2} />
        </div>
        <Search onChange={onChange}></Search>
      </div>
      <section
        ref={scrollingRef}
        className='border-bg-secondary bg-bg-secondary-layer druation-300 flex h-auto w-full flex-col items-center border-x-2 px-16 transition-transform ease-in-out'
      >
        {filtered.map((item, index, arr) => (
          <Post
            which={which(index, arr)}
            actions={[animateUp, animateDown]}
            author={item.author}
            text={item.text}
            key={index}
          />
        ))}
      </section>
    </div>
  )
}

export default Posts
