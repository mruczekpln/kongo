import { createRef, FormEvent, useState } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Logo from '../../components/ui/Logo'

type State = 'email' | 'password' | 'repeatPassword'
interface ForgotPasswordFormData {
	email: string
	password: string
	repeatPassword: string
}

const LogInPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		getValues
	} = useForm<ForgotPasswordFormData>()

	const [state, setState] = useState<State>('email')

	const onSubmit: SubmitHandler<ForgotPasswordFormData> = (data, e) => {
		e!.preventDefault()

		toast(JSON.stringify(getValues()))

		if (state === 'email') return setState('password')
		else if (state === 'password') return setState('repeatPassword')
		else if (state === 'repeatPassword') return toast.success('successfully reset password')
	}

	const onError: SubmitErrorHandler<ForgotPasswordFormData> = (errors, e) => {
		const isRequired = Object.values(errors).some(field => field.type === 'required')
		if (isRequired) toast.error('you must fill this field :(')

		console.log(errors)

		if (errors.email && errors.email.type === 'pattern') toast.error('login must match "example@example.com"')
		else if (
			(errors.password || errors.repeatPassword) &&
			(errors.password?.type === 'pattern' || errors.repeatPassword?.type === 'pattern')
		)
			toast.error('at least 1 uppercase and lowecase letter, numeric and special symbol')
		else console.log(errors)
	}

	const validatePasswords = (val: string) => {
		if (val !== watch('password')) return 'password do not match'
	}

	return (
		<div className='grid h-screen w-screen place-items-center bg-bg-primary font-main text-text-primary'>
			<main className='flex w-[300px] flex-col gap-8'>
				<div className='relative flex h-max w-full items-center justify-between py-2'>
					<Logo></Logo>
					<p className='font-bold underline-offset-1 duration-100'>reset password</p>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit, onError)}
					className='flex h-max w-full flex-col items-center justify-between gap-4 rounded-xl border-2 border-text-secondary p-4 pt-2 shadow-xl'
				>
					{state === 'email' && (
						<Input pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$' required={true} register={register} name='email'></Input>
					)}
					{state === 'password' && (
						<Input
							pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
							required={true}
							register={register}
							name='password'
						></Input>
					)}
					{state === 'repeatPassword' && (
						<Input
							pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
							required={true}
							register={register}
							name='repeatPassword'
							validate={validatePasswords}
						></Input>
					)}
					<Button text="let's go!"></Button>
				</form>
			</main>
		</div>
	)
}

export default LogInPage
