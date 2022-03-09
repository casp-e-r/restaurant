import React from 'react'
import Item from '../../components/Item'

function items() {
  return (
    <div className='items'>
      <div className='items-header'>header</div>
      <div className='items-main'>
        <div className='items-list'>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
        <div className='item'>item</div>
      </div>
        items
    </div>
  )
}

export default items