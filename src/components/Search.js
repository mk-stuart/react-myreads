import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'

class Search extends React.Component{
    static PropTypes = {
        bookResult: PropTypes.func.isRequired,
        bookShelfChange: PropTypes.func.isRequired,
        clearQuery: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired
    }
    componentWillUnmount() {
        this.props.clearQuery();
    }
    render(){
        const { bookShelfChange } = this.props
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(event) => this.props.bookResult(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <Bookshelf
                        bookShelfTitle="Results"
                        bookShelfChange={bookShelfChange}
                        books={this.props.books}
                    />
                </div>
          </div>
        )
    }
}

export default Search