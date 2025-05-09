import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h3>Order with Ease from Your Hostel Room</h3>
                <p>Skip the lines and order your favorite campus meals right from your hostel! Browse a variety of tasty dishes from local food stalls and get them delivered straight to your door—fresh, fast, and full of flavor.
</p>
<button onClick={() => {
    const menuSection = document.getElementById("explore-menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
}}>View Menu</button>            </div>
        </div>
    )
}

export default Header
