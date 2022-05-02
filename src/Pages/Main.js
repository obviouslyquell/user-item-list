import React from 'react'
import Item from '../Components/Item/Item'
import ContentLoader from 'react-content-loader'
function Main({data, loading}) {
  return (
    
    <div className='content'>
      <h3>Список пользователей</h3>
    
      {loading?
        <ContentLoader 
         speed={2}
         width={500}
         height={1200}
         viewBox="0 0 500 1200"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
        >
         <rect x="0" y="0" rx="8" ry="8" width="500" height="73" /> 
         <rect x="0" y="85" rx="8" ry="8" width="500" height="73" />
         <rect x="0" y="170" rx="8" ry="8" width="500" height="73" />
         <rect x="0" y="255" rx="8" ry="8" width="500" height="73" />
         <rect x="0" y="340" rx="8" ry="8" width="500" height="73" />
         <rect x="0" y="425" rx="8" ry="8" width="500" height="73" />
         <rect x="0" y="510" rx="8" ry="8" width="500" height="73" />
         <rect x="0" y="595" rx="8" ry="8" width="500" height="73" />
         <rect x="0" y="680" rx="8" ry="8" width="500" height="73" />
         <rect x="0" y="765" rx="8" ry="8" width="500" height="73" />
         <rect x="0" y="850" rx="8" ry="8" width="500" height="73" />
        </ContentLoader> : <>
  
        <ul className="user-list">
          {data.length>0 && data.map((el,index)=>{
          return <Item item={el} index={index} key={el.id}/>
          })}
        </ul>
        <p className='content-length'>{`Найдено ${data.length} пользователей.`}</p>
      </>}
    </div>
  )
}

export default Main