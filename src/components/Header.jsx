const Header = () => {
    return (
        <header className="header">
            <h2>React Movies DB</h2>

            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;