import React from "react"
import { Link } from "gatsby"

const NoPage = () => {
  return (
    <section>
      <h1>Sorry</h1>
      <p>Page you are trying to find doesn't exist</p>
      <p>
        <Link to="/">Click here </Link>
        to go back to the home page
      </p>
    </section>
  )
}

export default NoPage
