

const Hero = () => {
  return (
    <main className="hero"> {/* Create a main section with the class name "hero" */}
        <div className="hero-content"> {/* Create a container div with the class name "hero-content" */}
        <h1>YOUR FEET DESERVE THE BEST</h1> {/* Display a heading with the text "YOUR FEET DESERVE THE BEST" */}
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p> {/* Display a paragraph with the provided text */}
        <div className="hero-btn"> {/* Create a div with the class name "hero-btn" */}
            <button>Shop Now</button> {/* Display a button with the text "Shop Now" */}
            <button className="secondary-btn">category</button> {/* Display a button with the text "category" and the class name "secondary-btn" */}
        </div>
        
       
       
        <div className="shopping"> {/* Create a div with the class name "shopping" */}
            <p>Also Available on</p> {/* Display a paragraph with the text "Also Available on" */}
            <div className="brand-icon"> {/* Create a div with the class name "brand-icon" */}
                <img src="/images/amazon.png" alt="amazon.logo"/> {/* Display an image with the source, alt, and alt attributes */}
                <img src="/images/flipkart.png" alt="flipkart.logo"/> {/* Display an image with the source, alt, and alt attributes */}
            </div>
        </div>
        </div> 
        <div className="hero-image"> {/* Create a div with the class name "hero-image" */}
        <img src="/images/hero-image.png" alt="hero.logo"/> {/* Display an image with the source, alt, and alt attributes */}
        </div>       
      
    </main>
  )
}

export default Hero // Export the Hero component as the default export
