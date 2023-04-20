import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import Logo from "../../components/ui/Logo"

interface RegisterFormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>()

  const onSubmit: SubmitHandler<RegisterFormData> = (data, e) => {
    e!.preventDefault()
    console.log("onsubmit")

    // toast(JSON.stringify(data))
    toast.success("successfully created an account")
  }

  const onError: SubmitErrorHandler<RegisterFormData> = (errors, e) => {
    console.log("onerror")
    const isRequired = Object.values(errors).some(
      (field) => field.type === "required"
    )
    if (isRequired) toast.error("you must fill all fields :(")

    if (errors.email && errors.email.type === "pattern")
      toast.error('email must match "example@example.com"')
    else if (errors.confirmPassword) toast.error("passwords must match")
    else if (errors.password)
      toast.error(
        "at least 1 uppercase and lowecase letter, numeric and special symbol"
      )
  }

  const validatePasswords = (val: string) => {
    if (val !== watch("password")) return "password do not match"
  }

  return (
    <div className='bg-bg-primary grid h-screen w-screen place-items-center font-main text-textPrimary'>
      <main className='flex w-[500px] flex-col gap-8'>
        <div className='relative flex h-max w-full items-center justify-between py-2'>
          <Logo></Logo>
          <Link to='/login'>
            <a
              href='#'
              className='underline-offset-1 duration-100 hover:underline'
            >
              already have an account?
            </a>
          </Link>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className='flex h-max w-full flex-col items-center justify-between gap-4 rounded-xl p-4 pt-2 shadow-xl'
        >
          <Input register={register} name='firstName'></Input>
          <Input register={register} name='lastName'></Input>
          <Input
            register={register}
            pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
            name='email'
          ></Input>
          <Input
            register={register}
            pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
            name='password'
          ></Input>
          <Input
            register={register}
            validate={validatePasswords}
            name='confirmPassword'
          ></Input>
          <Button text="let's go!"></Button>
        </form>
      </main>
    </div>
  )
}

export default RegisterPage
