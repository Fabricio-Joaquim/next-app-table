import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import { Table } from "@tanstack/react-table"

export const TableFooter = ({ table }: { table: Table<unknown> }) =>

(
    <div className="flex items-center gap-2 mt-2 justify-center">
        <button
            aria-label="First page"
            className="border rounded px-2 py-3 bg-slate-300 cursor-pointer hover:bg-slate-50 duration-300 hover:border-1 hover:border-black"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
        >
            <MdOutlineKeyboardDoubleArrowLeft size={20} />
        </button>
        <button
            aria-label="Previous page"
            className="border rounded px-2 py-3 bg-slate-200 cursor-pointer hover:bg-slate-50 duration-300 hover:border-1 hover:border-black"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
        >
            <MdOutlineKeyboardArrowLeft size={20} />
        </button>
        <span className="flex items-center gap-1 text-sm md:text-base">
            <div>Page</div>
            <strong>
                {table.getState().pagination.pageIndex + 1} of{' '}
                {Math.ceil(table.getPageCount())}
            </strong>
        </span>
        <button
            aria-label="Next page"
            className="border rounded px-2 py-3 bg-slate-200 cursor-pointer hover:bg-slate-50 duration-300 hover:border-1 hover:border-black"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
        >
            <MdOutlineKeyboardArrowRight size={20} />
        </button>
        <button
            aria-label="Last page"
            className="border rounded px-2 py-3 bg-slate-300 cursor-pointer hover:bg-slate-50 duration-300 hover:border-1 hover:border-black"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
        >
            <MdOutlineKeyboardDoubleArrowRight size={20} />
        </button>
    </div>
)
