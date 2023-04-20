import { ChangeEvent, Ref } from "react"

interface SearchProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Search = ({ onChange }: SearchProps) => {
  return (
    <input
      onChange={onChange}
      placeholder='search'
      className='z-10 h-12 w-1/3 rounded-md bg-backgroundAccent p-4'
    ></input>
  )
}

export default Search
