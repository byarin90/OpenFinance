import React from 'react'
import TableHead from './tableHead'

const Table = ({children,cols}: {children: React.ReactNode,cols:string[]}) => {
  return (
    <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full text-left text-sm font-light">
            <TableHead cols={cols}/>
            <tbody>
                {children}
      
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Table