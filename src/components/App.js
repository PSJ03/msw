'use client'

import { useDispatch } from 'react-redux'
import { hideLoading } from '@/redux/slices/cartSlice'
import { useEffect } from 'react'
import CartSidebar from './CartSidebar'
import Header from './Header'

export default function APP({ children }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(hideLoading())
  }, [dispatch])

  return (
    <div>
      <div className="mr-32">
        <Header />
        <main className="p-4">{children}</main>
      </div>
      <CartSidebar />
    </div>
  )
}
