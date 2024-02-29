import { Table, flexRender } from "@tanstack/react-table"

export const TableBody = ({ table }: { table: Table<unknown> }) => {
    return (
<tbody>
              {table.getRowModel().rows.map(row => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map(cell => {

                        if(cell.column.columnDef.accessorKey === "status"){
                            return (
                                <td
                                data-label={cell.column.columnDef.header}
                                 key={cell.id}
                                >
                                {
                                    cell.getIsPlaceholder() ? null : (
                                    <span className={`rounded-md py-[2px] px-[10px]  ${cell.getValue() === "Available" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                        {cell.getValue()}
                                    </span>
                                    )}
                                </td>
                            )
                        }

                        if(cell.column.columnDef.accessorKey === "image"){
                          return (
                            <td
                              data-label={cell.column.columnDef.header}
                             key={cell.id}
                            >
                              {
                                cell.getIsPlaceholder() ? null : (
                                  <img src={cell.getValue()} alt="img" className="w-12 h-12 rounded-sm" />
                                )}
                            </td>
                          )
                        }

                        if(cell.column.columnDef.accessorKey === "rating"){
                            return (
                                <td
                                data-label={cell.column.columnDef.header}
                                 key={cell.id}
                                >
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
                                </td>
                            )
                            }

                      return (
                        <td
                          data-label={cell.column.columnDef.header}
                         key={cell.id}
                        >
                          {
                            cell.getIsPlaceholder() ? null : (
                              flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )
                            )}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
    )
    }