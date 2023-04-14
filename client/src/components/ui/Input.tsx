interface InputProps {
  inputRef: React.Ref<HTMLInputElement>;
  name: string;
}

const Input = ({ name, inputRef }: InputProps) => {
  return (
    <div className="h-max w-full">
      <p className="m-0 p-0 text-text-secondary">{name}</p>
      <input
        ref={inputRef}
        className="mt-1 h-16 w-full rounded-md bg-bg-secondary pl-3"
        type="text"
        name={name}
        id={name}
      />
    </div>
  );
};

export default Input;
