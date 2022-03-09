import React from 'react'
import Item from '../components/Item'

function menu() {
  return (
    <div className="menu">
      <div className="menu-inner">

        <div className="menu-header">
          header
        </div>
        <div className="main-menu">
          <div className="menu-list">
            <p>list</p>
            <p>list</p>
            <p>list</p>
            <p>list</p>

          </div>
          <div className="menu-items">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>

    </div>
  )
}

export default menu