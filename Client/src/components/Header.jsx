import '../style/components/__Header.css'

function Header () {
    return (
        <div className='header'>
            <h1 className='header-title'>MAID</h1>
            <div className='header-menu'>
                <ul className='header-menu-list'>
                    <li>Home</li>
                    <li>LogIn</li>
                    <li>Sign Up</li>
                    <li>Sample-button</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;