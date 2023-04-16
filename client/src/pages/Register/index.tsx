import { FormEvent, useEffect } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Logo from '../../components/ui/Logo'

interface RegisterFormData {
	firstName: string
	lastName: string
	email: string
	password: string
	confirmedPassword: string
}

const RegisterPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		setError,
		formState: { errors }
	} = useForm<RegisterFormData>()

	const onSubmit: SubmitHandler<RegisterFormData> = (data, e) => {
		e!.preventDefault()
		console.log('onsubmit')

		toast(JSON.stringify(data))
		// if (state.stage === 'email') return setState({ stage: 'password', prompt: 'forgot password?' })
		// if (state.stage === 'password') return toast.success('successfully logged in!')
	}

	const onError: SubmitErrorHandler<RegisterFormData> = (errors, e) => {
		console.log('onerror')
		const isRequired = Object.values(errors).some(field => field.type === 'required')
		if (isRequired) toast.error('you must fill all fields :(')

		if (errors.email && errors.email.type === 'pattern') toast.error('email must match "example@example.com"')
		// else if (errors.password && errors.password.type === 'pattern')
		// 	toast.error('at least 1 uppercase and lowecase letter, numeric and special symbol')
		else {
			toast.error(errors.root?.message || 'error')
			console.log(errors)
		}
	}

	const beforeSubmit = (e: FormEvent) => {
		console.log('beforesubmit')
	}

	const validatePasswords = (val: string) => {
		if (val !== watch('password')) {
			// return setError('root.password', {
			// 	message: 'passwords do not match',
			// 	type: 'validate'
			// })
			return 'password do not match'
		}
	}

	return (
		<div className='grid h-screen w-screen place-items-center bg-bg-primary font-main text-text-primary'>
			<main className='flex w-[500px] flex-col gap-8'>
				<div className='relative flex h-max w-full items-center justify-between py-2'>
					<Logo></Logo>
					<a href='#' className='underline-offset-1 duration-100 hover:underline'>
						already have an account?
						{/* {state.prompt} */}
					</a>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit, onError)}
					className='flex h-max w-full flex-col items-center justify-between gap-4 rounded-xl border-2 border-text-secondary p-4 pt-2 shadow-xl'
				>
					<Input required={true} register={register} name='first name'></Input>
					<Input required={true} register={register} name='last name'></Input>
					<Input required={true} register={register} name='email'></Input>
					<Input required={true} register={register} name='password'></Input>
					<Input required={true} register={register} validate={validatePasswords} name='confirmedPassword'></Input>
					<Button text="let's go!"></Button>
				</form>
			</main>
		</div>
	)
}

export default RegisterPage
