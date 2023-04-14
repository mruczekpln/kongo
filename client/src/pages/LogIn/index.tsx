import { createRef, FormEvent, useState } from 'react'
import Input from '../../components/ui/Input'

const LogInPage = () => {
	const loginRef = createRef<HTMLInputElement>()
	const passwordRef = createRef<HTMLInputElement>()

	const [showPassword, setShowPassword] = useState<boolean>(false)

	const onSubmit = (e: FormEvent) => {
		e.preventDefault()
		if (!showPassword) return setShowPassword(true)

		console.log('logged in')
	}

	return (
		<div className='grid h-screen w-screen place-items-center bg-bg-primary font-main text-text-primary'>
			<form onSubmit={onSubmit} className='flex h-[400px] w-[320px] flex-col items-center justify-between'>
				<h1 className='h-12 text-3xl font-bold text-white'>sign in</h1>
				{!showPassword && <Input inputRef={loginRef} name='login'></Input>}
				{showPassword && <Input inputRef={passwordRef} name='password'></Input>}
				<button type='submit' className='h-12 w-20 rounded-md bg-accent'>
					ajaks
				</button>
			</form>
		</div>
	)
}

export default LogInPage
