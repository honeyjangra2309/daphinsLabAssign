import React from 'react'
import TabletCard from './TabletCard'
import "../CSS/TabletContainer.css"

const TabletContainer = () => {
  return (
    <div className="tablet_container">
        <TabletCard />
        <TabletCard />
        <TabletCard />
        <TabletCard />
        <TabletCard />
        <TabletCard />
    </div>
  )
}

export default TabletContainer