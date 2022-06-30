import logo from '../images/windBnB_Anemo.png'
// import search from '../images/search_FILL0_wght400_GRAD0_opsz48.svg'

const Navbar = () => {


    return(
        <>
            <nav className='brand-container'>
                <div className='logo-container'>
                    <img className='logo' src={logo} alt="logo" />
                </div>
                <div className='title-container'>
                    <h1>WindBnB</h1>
                </div>
            </nav>
            <section className='form-wrapper'>
                <form className='form'>
                    <div className='form-shadow'>
                        <div className='user-entry-container'>
                            <select name='location' className='location'>
                                <option>Helsinki, Finland</option>
                                <option>Helsinki, Finland</option>
                                <option>Helsinki, Finland</option>
                            </select>
                            <input className='input-borders' type="text" placeholder='Add guests' />
                        </div>
                        <button className='search-btn'></button>
                    </div>
                    
                </form>
            </section>
        </>
    );
}

export default Navbar;