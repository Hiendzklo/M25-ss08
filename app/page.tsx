import React from 'react'
import Posts from './baitap/Bt1+2'
import Products from './baitap/Bt3'
import SearchPage from './baitap/Bt4'
import Button from '@baitap/Button';

export default function page() {
  return (
    <div>
      Bài 1+2
      <Posts/><br/>
      Bài 3
      <Products/><br/>
      Bài 4
      <SearchPage/>
      Bài 5
      <Button/>
    </div>
  )
}
