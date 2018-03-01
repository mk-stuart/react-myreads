import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListMyReads extends Component {

    getShelfId = shelfId => {
      return this.props.books.filter(book => book.shelf === shelfId)
    }
    render () {
        const shelfState = [
          {
            id: 'currentlyReading',
            bookshelfTitle: 'Currently Reading',
            books: this.getShelfId('currentlyReading')
          },
          {
            id: 'wantToRead',
            bookshelfTitle: 'Want to Read',
            books: this.getShelfId('wantToRead')
          },
          {
            id: 'read',
            bookshelfTitle: 'Read',
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
                      bookshelfTitle={shelf.bookshelfTitle}
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