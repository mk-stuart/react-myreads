import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'

class ListMyReads extends Component {

    static PropTypes = {
      bookShelfChange: PropTypes.func.isRequired
    }

    getShelfId = shelfId => {
      return this.props.books.filter(book => book.shelf === shelfId)
    }
    render () {
        const shelfState = [
          {
            id: 'currentlyReading',
            bookShelfTitle: 'Currently Reading',
            books: this.getShelfId('currentlyReading')
          },
          {
            id: 'wantToRead',
            bookShelfTitle: 'Want to Read',
            books: this.getShelfId('wantToRead')
          },
          {
            id: 'read',
            bookShelfTitle: 'Read',
            books: this.getShelfId('read')
          }            
        ]
        const { bookShelfChange } = this.props
        return (
        <div className="list-books"> 
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelfState.map(shelf =>{
                  return (
                    <Bookshelf 
                      key={shelf.id}
                      bookShelfTitle={shelf.bookShelfTitle}
                      books={shelf.books}
                      bookShelfChange={bookShelfChange}
                    />
                  )
                })}
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            </div>
        </div> 
        )
    }
}

export default ListMyReads