import React from 'react'
import '../styles/pdfst.css'

function pdf_download() {

    const onButtonClick = () => {
        const pdfUrl = "mycv.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Shashika[Intern SE].pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log(link);
    };

  return (
    <div className='btn_container'>

    <button className='download_btn' onClick={onButtonClick}>Download CV</button>

    </div>
  )
}

export default pdf_download