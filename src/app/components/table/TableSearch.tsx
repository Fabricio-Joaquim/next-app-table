interface TableSearchProps {
    resetSearch: () => void;
    search: string;
    handlerChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
import { BiX } from "react-icons/bi"

export const TableSearch = ({ resetSearch, search, handlerChangeSearch }: TableSearchProps) =>

    <div className='flex gap-2 justify-center w-full md:w-1/3 bg-gray-200 rounded'>
        <input onChange={handlerChangeSearch} name="search" value={search} className="border-none rounded py-3 pl-2 bg-gray-200 focus:border-nonee w-full
            focus:ring-0 focus:outline-none
          " type="text" placeholder="Search" />
        {search && <button type="button" className="py-3 bg-red-400 px-4 rounded-l-sm hover:bg-red-500 focus:outline-none duration-300"
            onClick={resetSearch}>
            <BiX size={25} />
        </button>
        }
    </div>
