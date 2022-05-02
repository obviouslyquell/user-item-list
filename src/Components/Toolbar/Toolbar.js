import React from 'react'

function Toolbar({onCityClick, onCompanyClick}) {
  return (
    <div className='toolbar'>
        <p className="toolbar-text">Сортировка</p>
        <button className='btn toolbar-btn' onClick={onCityClick}>По городу</button>
        <button className='btn toolbar-btn' onClick={onCompanyClick}>По компании</button>
    </div>
  )
}

export default Toolbar