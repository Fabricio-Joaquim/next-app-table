//@ts-nocheck
import { Table, flexRender } from "@tanstack/react-table"
import { FaCheckCircle } from "react-icons/fa"
import { IconMobile } from "./mobile/Icon"
import { Row } from "./Row"
import { RiCloseCircleFill } from "react-icons/ri"

export const TableBody = ({ table }: { table: Table<unknown> }) => {
  return (
    <tbody>
      {table.getRowModel().rows.map(row => {
        return (
          <tr key={row.id} className="relative">
            {row.getVisibleCells().map(cell => {

              if (cell.column.columnDef.accessorKey === "status") {
                return (
                  <Row key={cell.column.columnDef.accessorKey} cell={cell}>
                    {
                      cell.getIsPlaceholder() ? null : (
                        <>
                          <span className={`rounded-md py-[2px] px-[10px] hidden lg:inline-block  ${cell.getValue() === "Available" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                            {cell.getValue()}
                          </span>
                          <IconMobile
                            icon={cell.getValue() === "Available" ? FaCheckCircle : RiCloseCircleFill}
                            className={cell.getValue() === "Available" ? "text-green-700" : "text-red-700"} />
                        </>
                      )}
                  </Row>
                )
              }

              if (cell.column.columnDef.accessorKey === "image") {
                return (
                  <Row key={cell.column.columnDef.accessorKey} cell={cell}>
                    {
                      cell.getIsPlaceholder() ? null : (
                        <img src={cell.getValue()} alt="img" className="w-12 h-12 rounded-sm" />
                      )}
                  </Row>
                )
              }

              if (cell.column.columnDef.accessorKey === "rating") {
                return (
                  <Row key={cell.column.columnDef.accessorKey} cell={cell}>
                    {
                      cell.getIsPlaceholder() ? null : (
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">
                            {
                              Array.from({ length: cell.getValue() as number }, (_, i) => (
                                <span key={i}>⭐</span>
                              ))}
                          </span>
                        </div>
                      )}
                  </Row>
                )
              }

              return (
                <Row key={cell.column.columnDef.accessorKey} cell={cell}>
                  {
                    cell.getIsPlaceholder() ? null : (
                      flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )
                    )}
                </Row>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  )
}