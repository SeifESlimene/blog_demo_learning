import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import React from 'react'
import { UPDATE_SEARCH } from 'constants.js'

function searchReducer(state= [], action) {
  if(action.type === UPDATE_SEARCH) {
    return { ...state, searchResult: action.payload.search };
  }
  return state
}

export default function Search() {
  return (
    <>
      <Layout>
        <Head>
          <title>Search</title>
        </Head>
        <SearchInput />
        <Categories />
        <Results />
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  )
}

function SearchInput() {
  const handleChange = (e) => {
    
  }
  return (
    <div className="search-input">
      <label>Search Your course: </label>
      <input value={value} onChange={handleChange}/>
      <button className="submit">Submit</button>
    </div>
  )
}

function Categories() {
  return (
    <div className="categories">
      <button>Tunis</button>
      <button>18 Years Old</button>
      <button>Webcam</button>
    </div>
  )
}

function Results() {
  return (
    <div className="result-container">

    </div>
  )
}

