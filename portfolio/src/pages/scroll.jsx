function Button() {
    const goTop = () => {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
    const mybutton = document.getElementById("Backtotopbutton");
  
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    return (  
      <div>
        <button id = 'Backtotopbutton' className= 'btn-modal' onClick={goTop}>Go to Top</button>
      </div>
    )
  }

export default Button