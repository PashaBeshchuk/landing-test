import React from 'react'
import './skeleton.css'

const Skeleton = () => {
  return (
    <div class="skeleton-card">
        <div class="skeleton-card-image"/>
        <div class="skeleton-card-content">
            <div class="skeleton-card-date"></div>
            <div class="skeleton-card-title"></div>
            <div class="skeleton-card-text">
            </div>
        </div>
    </div>
  )
}

export default Skeleton
