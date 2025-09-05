import React from 'react'
import './ article.css'

const  Article = ({title, date, text, img, isNew}) => {
  return (
    <div className={`card ${isNew ? 'new' : ''}`}>
      <div className={`card-image ${isNew ? 'new' : ''}`}>
        <img src={`/${img}`} alt="Описание" />
      </div>
      <div className={`card-content ${isNew ? 'new' : ''}`}>
        <div className={`card-date ${isNew ? 'new' : ''}`}>{date}</div>
        <div className={`card-title ${isNew ? 'new' : ''}`}>{title}</div>
        <div className="card-text">{text}</div>
      </div>
    </div>
  )
}

export default  Article
