import React, { useState } from 'react'

import Menu from './Navigations/Menu'
import Navbar from './Navigations/Navbar'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Books from './Books'

// function App2() {
//   const [text, setText] = useState("")
//   const [checked, setChecked] = useState(false)
  
//   const handleCheckBoxToggle = e => setChecked(preChecked => !preChecked)
//   const handleTextChange = e => setText(e.target.value)
//   return(
//    <React.Fragment>
//       <input 
//         type="text" 
//         value={text} 
//         onChange={handleTextChange} 
//       />
//        <input 
//         type="checkbox" 
//         checked={checked} 
//         onChange={handleCheckBoxToggle} 
//       />
//    </React.Fragment>
    
//   )
// }

function App() {
 const [toggleStatus, setToggle] = useState(false)
 const toggleMenu = () => setToggle(prevToggleStatus => !prevToggleStatus)

    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={ toggleStatus }
          toggleMenu={ toggleMenu }
        />
        <Navbar toggleMenu={toggleMenu} />
        <Header title="Library" />
        <Books />
        <About />
        <Footer />
      </div>
    )
  
}

export default App
