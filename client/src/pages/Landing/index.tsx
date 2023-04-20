import FriendList from "./components/FriendList"
import Posts from "./components/Posts"
import Profile from "./components/Profile"
import Tags from "./components/Tags"

const LandingPage = () => {
  const friends = [...new Array(3)]

  return (
    <main className='bg-bg-primary max-w-screen flex h-screen max-h-screen w-screen items-start justify-center overflow-hidden font-main'>
      <FriendList friends={friends} />
      <Posts></Posts>
      <section className='relative mt-8 flex min-h-screen w-1/4 flex-col items-center justify-center gap-8 px-8'>
        <Profile />
        <Tags />
      </section>
    </main>
  )
}

export default LandingPage
