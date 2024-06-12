import React from 'react'
import '../styles/homest.css'
import Pdf_download from '../components/pdf_download'
import Web_link from '../components/Web_link'

function home() {
  return (
    <div className ='heading'>
        <h1>H D Shashika Kavinda</h1>
        <Pdf_download/>
        <Web_link/>
        <p>software developer Shashika Kavinda</p>

    </div>
  )
}

export default home