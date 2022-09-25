/* eslint-disable */
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import EnhancedTable from '../table-components/EnhancedTable'
import makeData from '../makeData'

import { PillButton } from '@lmig/lmds-react-pill-button';

const App = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Storm',
        accessor: 'storm',
      },
      {
        Header: 'Catastrophe Code',
        accessor: 'catCode',
      },
      {
        Header: 'Editor',
        accessor: 'editor',
      },
      {
        Header: 'Edited on',
        accessor: 'editStamp',
      },
      {
        Header: 'Approver',
        accessor: 'approver',
      },
      {
        Header: 'Approved at',
        accessor: 'approveStamp',
      }
    ],
    []
  )

  const [data, setData] = React.useState(React.useMemo(() => makeData(20), []))
  const [skipPageReset, setSkipPageReset] = React.useState(false)

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  return (

    <div>
       <div className="relative bg-white overflow-hidden">
        <div className="pt-10 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl capitalize">
                Hi Kara Gannon,
              </h1>
              <h4 className="text-xl mt-1 tracking-tight text-gray-900 sm:text-4xl">
                welcome to the named storms update!
              </h4>
              <p className="mt-5 text-xl text-gray-500">
                This is the place to name storms and explore all storms that are Mutual to you! Take the Liberty
                to find storms and be a storm!
              </p>
              {/* current user in session statement */}
              <div className="bg-white space-x-4 dark:bg-slate-900 mt-5 inline-flex rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <h3 className="text-slate-900 dark:text-white text-base font-medium m-auto">Current user in session:</h3>
                <h3 className="text-slate-900 dark:text-white text-base font-medium m-auto">
                  Kara Gannon
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className= "mx-48 my-12 place-items-center border-2 border-green-900 border-solid rounded">
          <CssBaseline />
          <EnhancedTable
            columns={columns}
            data={data}
            setData={setData}
            updateMyData={updateMyData}
            skipPageReset={skipPageReset}
          />
        </div>
      </div>
    </div>
  )
}

export default App
