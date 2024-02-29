"use client"
import { DarkModeButton } from "./components/button/dark";
import { useLocalStore } from "./hooks/useLocalStore";
import { useTableData } from "./hooks/useTableData";
import { useEffect } from "react";
import dynamic from "next/dynamic";
const TableGeneric = dynamic(() => import('./components/table/table'), { ssr: false })

export default function Home() {

  const { data, headers } = useTableData()
  const [darkMode] = useLocalStore('darkMode', false);

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-24 text-black dark:text-white dark:bg-gray-800 bg-white duration-500">
      <DarkModeButton />
      <TableGeneric data={data} headers={headers} />
    </main>
  );
}
