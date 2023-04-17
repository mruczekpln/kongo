import Post from './components/Post'

interface Post {
	id?: string
	author: string
	text: string
}

const LandingPage = () => {
	return (
		<main className='flex h-screen w-screen justify-center bg-bg-primary'>
			<div className='h-full w-1/2 overflow-y-scroll'>
				<section className='flex h-auto w-full flex-col gap-16 border-x-2 border-bg-secondary bg-bg-secondary-layer p-8'>
					{[...new Array(10)].map((item, index) => (
						<Post author={'user' + index} text={index.toString()} key={index} />
					))}
				</section>
			</div>
		</main>
	)
}

export default LandingPage
