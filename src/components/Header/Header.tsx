import Search from '@/components/Search'
import { getGreetingFromLocalTime } from '@/utils'

function Header() {
  return (
    <div className='fixed top-0 left-0 w-full bg-white shadow-md z-10 px-8 py-4 flex gap-2 items-center justify-between'>
      <Search />
      <h4 className='text-l text-gray-800 font-semibold'>{getGreetingFromLocalTime()}</h4>
    </div>
  )
}

export default Header
