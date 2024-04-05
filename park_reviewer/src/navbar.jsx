import './headerFooter.css'

export default function NavBar(){
    return(
        <nav className="nav">
                <div className='navDiv'>
                 <a className="navLink" href="/" target="_blank">Home</a>
                </div>
                <div className='navDiv'>
                    <a className="navLink" href="/" target="_blank">Login</a>
                </div>
                
        </nav>
    )
}