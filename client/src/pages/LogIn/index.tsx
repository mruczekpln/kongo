import { createRef, FormEvent, useState } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Button from '../../components/ui/Button'

import Input from '../../components/ui/Input'
import Logo from '../../components/ui/Logo'

interface State {
	stage: 'email' | 'password'
	prompt: 'create account!' | 'forgot password?'
	error?: boolean
}

export interface LogInFormData {
	email: string
	password: string
}

const LogInPage = () => {
	// const loginRef = createRef<HTMLInputElement>()
	// const passwordRef = createRef<HTMLInputElement>()

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<LogInFormData>()

	const [state, setState] = useState<State>({
		stage: 'email',
		prompt: 'create account!'
	})

	const onSubmit: SubmitHandler<LogInFormData> = (data, e) => {
		e!.preventDefault()

		if (state.stage === 'email') return setState({ stage: 'password', prompt: 'forgot password?' })
		if (state.stage === 'password') return toast.success('successfully logged in!')
	}

	const onError: SubmitErrorHandler<LogInFormData> = (errors, e) => {
		const isRequired = Object.values(errors).some(field => field.type === 'required')
		if (isRequired) toast.error('you must fill this field :(')

		if (errors.email && errors.email.type === 'pattern') toast.error('login must match "example@example.com"')
		else if (errors.password && errors.password.type === 'pattern')
			toast.error('at least 1 uppercase and lowecase letter, numeric and special symbol')
		else console.log(errors)
	}

	return (
		<div className='grid h-screen w-screen place-items-center bg-bg-primary font-main text-text-primary'>
			<main className='flex w-[300px] flex-col gap-8'>
				<div className='relative flex h-max w-full items-center justify-between py-2'>
					<Logo></Logo>
					<a href='#' className='underline-offset-1 duration-100 hover:underline'>
						{state.prompt}
					</a>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit, onError)}
					className='flex h-max w-full flex-col items-center justify-between gap-4 rounded-xl border-2 border-text-secondary p-4 pt-2 shadow-xl'
				>
					{state.stage === 'email' && (
						<Input pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$' required={true} register={register} name='email'></Input>
					)}
					{state.stage === 'password' && (
						<Input
							pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
							required={true}
							register={register}
							name='password'
						></Input>
					)}
					<Button text="let's go!"></Button>
				</form>
			</main>
		</div>
	)
}

export default LogInPage
