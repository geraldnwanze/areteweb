const Header = (props) => {
    return (
        <header className="container">
            <div className="flex">
                <div>
                    <img src={props.logo} alt="" />
                </div>
                <div></div>
                <div></div>
            </div>
        </header>
    )
}

export default Header;