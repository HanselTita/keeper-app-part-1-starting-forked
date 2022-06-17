import React from "react"

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer>
      <p>Copyright  &#169; {date}</p>
    </footer>
  )
}

export default Footer
