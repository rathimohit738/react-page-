import React from 'react'

/*const   First = () => {
    const myStyle = {
        top:"20px",
        position:"relative",
        display:"flex",
        justifyContent: "space-around",
      };

  return (
    < div   class ="first-div "> 
    <header id = "nav ">
        <nav>
        <h3> <a href="hme " target ="google">home</a>home </h3>
        <h3> <a href="hme " target ="google">home</a></h3>
        <h3> <a href="hme " target ="google">home</a></h3>
        <h3> <a href="hme " target ="google">home</a></h3>
        <h3>contect</h3>
        <h3>about</h3>
        <h3>ghar </h3>
        

        </nav>
    </header>
    </div>*/

    const First = () => {
        const myStyle = {
          top:"20px",
          padding:"50px",
          position:"relative",
          display:"flex",
          justifyContent: "space-around",
          backgroundColor: " Dodgeryellow" ,
          
        };
        return (
          <div>
              <nav style={myStyle}> 
        <select>
          <option value="Home">Home</option>
        </select>
        <select>
          <option value="About">About us</option>
        </select>
          <select>
        <option value="Contacts">Contact</option>
      </select>
      <select>
      <option value="Booking">Booking</option>
      </select>
          </nav>
          </div>

    
  )
}
export default First
