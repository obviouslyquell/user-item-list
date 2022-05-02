import React from 'react'
import { Link } from 'react-router-dom'
function Item({item}) {
  return (
    <li className="user-item">
          <div>
            <p className="user-item__text"><span className="user-item__category">ФИО: </span>{item.name}</p>
            <p className="user-item__text"><span className="user-item__category">Город: </span>{item.address.city}</p>
            <p className="user-item__text"><span className="user-item__category">Компания: </span>{item.company.name}</p>
          </div>
          <Link to={`profile`} state={item} className="user-item__link link">Подробнее</Link>
    </li>
  )
}

export default Item