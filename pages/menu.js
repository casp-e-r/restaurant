import React from 'react'
import Item from '../components/Item'

function menu() {
  return (
    <div className="menu">
        <div>header</div>
        <div className="main-menu">
            <div className="menu-list">
                    list
            </div>
            <div className="menu-items">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>

    </div>
  )
}

export default menu