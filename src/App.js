import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import ListMyReads from './components/ListMyReads'
import './App.css'
import Search from './components/Search';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false,
    books: [],
    unchangedBooks: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  updateShelfBook(book, shelf){  
    console.log(book, shelf)
    this.setState((state) => ({
      books: state.books.filter((b) => (b.id !== book.id)).concat([book])
    }))
    BooksAPI.update(book,shelf)
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <ListMyReads
              books={this.state.books}
              bookShelfChange={this.updateShelfBook}
            />
          )}/>
          <Route exact path='/search' render={() => (
            <Search />
          )}/>
      </div>
    )
  }
}

export default BooksApp
