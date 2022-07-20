import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    <a href="https://www.instagram.com/____.edu.____/">Desenvolvido por @eduardosantos</a>
                </p>
            </div>
        </header>
        )
}

export default Header;
