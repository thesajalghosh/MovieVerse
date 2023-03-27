import React, {useState} from 'react'
import "./SwitchTabs.css";



const SwitchTabs = ({data, onTabChange}) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [left, setleft] = useState(0);

  console.log(data)

const activeTab = (tab, index) =>{
  setleft(index * 100)
  setTimeout(() =>{
setSelectedTab(index)
  }, 300);
  onTabChange(tab, index)

}


  return (
    <div className="switchingTabs">
    <div className='tabItem'>
      {data.map((tab, index) =>{
        return (<span 
        key={index} 
        className={`tabItem ${selectedTab === index ? "active" : ""}`}
        onClick={() => activeTab(tab, index)}>
            {tab}
        </span>);
        
      })}
      <span className='movingBg' style={{left}}/>
    </div>

      
    </div>
  )
}

export default SwitchTabs
