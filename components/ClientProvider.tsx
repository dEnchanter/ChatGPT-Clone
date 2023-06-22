'use client'

import { Toaster } from "react-hot-toast"

function ClientProvider() {
  return (
    <>
      <Toaster position="top-right" />
      
      {/* We can inject other client components */}
    </>
  )
}

export default ClientProvider