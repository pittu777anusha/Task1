import React, {lazy,Suspense} from 'react'
import {ErrorBoundary} from 'react-error-boundary'

const OtherComponent = lazy(() => import('../Students'))
function DashBoard() {
  return (
     
        <div>
           <ErrorBoundary fallback={<div>Oops, something went wrong!</div>}>
           <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
           </ErrorBoundary>
     
    </div>
         
     
  )
}

export default DashBoard;