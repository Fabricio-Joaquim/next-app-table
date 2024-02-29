import {
    useReactTable,
    getPaginationRowModel,
    getFilteredRowModel,
    getCoreRowModel,
    getExpandedRowModel,
    ColumnDef,
    SortingState,
    getSortedRowModel,
    PaginationState,
  } from '@tanstack/react-table'
  import React, { useMemo, useState, useCallback } from 'react'
import { Table } from '.';
import { ITableGenericHeader } from '@/app/model/TableHeader';
    
  interface ITableGenericProps {
    readonly headers: ITableGenericHeader[];
    readonly data: any[];
  }
  
  function TableGeneric({ headers, data }: ITableGenericProps) {
  
    const [sorting, setSorting] = useState<SortingState>([])
    const sizeOptions = useMemo(() => [10, 20, 30, 40, 50], [])
    const columns = useMemo<ColumnDef<any>[]>(
      () => headers.map((header) => ({
        accessorKey: header.accessorKey,
        header: header.header,
        cell: info => info.getValue(),
        footer: props => props.column.id,
        ...headers
      })),
      [headers])
  
    const [{ pageIndex, pageSize }, setPagination] =
      useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
      })
  
    const pagination = React.useMemo(
      () => ({
        pageIndex,
        pageSize,
      }),
      [pageIndex, pageSize]
    )
  
    const [search, setSearch] = useState<string>("")

    const table = useReactTable({
      data: data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize),
      columns,
      pageCount: data.length / pageSize,
      state: {
        sorting,
        pagination,
        globalFilter: search,
      },
      getPaginationRowModel: getPaginationRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getExpandedRowModel: getExpandedRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getCoreRowModel: getCoreRowModel(),
      onPaginationChange: setPagination,
      onSortingChange: setSorting,
      manualPagination: true,
      onGlobalFilterChange: setSearch,
      debugTable: false,
    })
    
    const resetSearch = useCallback(() => {
      setSearch("")
    }, [])
  
    const handlerChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setSearch(e.target.value)
    }, [])
  
  
    return (
      <div className="p-2 w-full">
        <div className='flex justify-between my-2 items-end gap-2'>
          <Table.LimitSize table={table} sizeOptions={sizeOptions} />
          <Table.Search resetSearch={resetSearch} search={search} handlerChangeSearch={handlerChangeSearch} />
        </div>
        <div className="overflow-y-auto">
          <table className='striped-table w-full border rounded-lg !important'>
            <Table.Header table={table} />
            <Table.Body table={table} />
          </table>
        </div>
        <Table.Footer table={table} />
      </div>
    )
  }
  
  export default TableGeneric