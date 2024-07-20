'use client'

import { FC } from 'react'
import { ToastContainer } from 'react-toastify'

const MainContToast: FC = () => {
    return (
        <ToastContainer
            toastClassName="relative bg-zinc-900/50 flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
            bodyClassName={() =>
                'text-sm md:text-md flex gap-4 font-zinc-50 p-4'
            }
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    )
}

export default MainContToast
