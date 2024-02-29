import { Cell } from "@tanstack/react-table"

interface IRowProps {
    cell: Cell<unknown, unknown>;
    children: React.ReactNode;
    dataLabel?: string;

}

export const Row = ({ cell, children, dataLabel }: IRowProps) => {
    return (
        <td
            data-label={dataLabel ?? cell.column.columnDef.header}
            key={cell.id}
            className="lg:py-4 lg:px-1 lg:border-b md:border-gray-200 dark:border-white-800"
        >
            {children}
        </td>
    )
}