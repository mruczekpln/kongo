import { FieldValues, UseFormRegister, Validate } from "react-hook-form"

interface InputProps {
  // inputRef: React.Ref<HTMLInputElement>
  name: keyof FieldValues
  register: UseFormRegister<any>
  pattern?: string
  required?: boolean
  validate?: (val: string) => any | undefined
}

function Input({
  name,
  pattern,
  validate = undefined,
  required = true,
  register,
}: InputProps) {
  const RegExpPattern = pattern ? RegExp(pattern) : undefined
  // console.log(RegExpPattern)

  return (
    <div className='h-max w-full'>
      <p className='m-0 p-0 font-monospace text-sm text-textSecondary'>
        {name}
      </p>
      <input
        className='mt-1 h-16 w-full rounded-md border-[2px] border-b-4 border-backgroundAccent pl-3 shadow-sm'
        type='text'
        id={name}
        {...register(name, {
          pattern: RegExpPattern,
          required: required || false,
          validate: validate,
        })}
      />
    </div>
  )
}

export default Input
