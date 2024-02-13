import React from 'react'

export default function Todo(props){
  const { title, description, dateCreated, _id } = props
  return (
    <div className="todo">
      <div className="card rounded">
        <header className="card-header">
          <p className="card-header-title is-centered">
            {title}
          </p>
        </header>

        <div className="card-content">
          <div className="content">
            {description}
          </div>
            {dateCreated}
        </div>

        <footer className="card-footer">
          {/* <a href="#" className="card-footer-item">Save</a> */}
          <a href="#" className="card-footer-item">Edit</a>
          <a href="#" className="card-footer-item">Delete</a>
        </footer>
      </div>
    </div>
  )
}