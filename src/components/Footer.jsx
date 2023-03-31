import React from "react";
import './styles/footer.css';
import fb from './img/facebook.png';
import insta from './img/instagram.png';
import twitter from './img/twitter.png';
import linkedin from './img/linkedin.png';


function Footer() {
    return (  
        <div className="footerAll">
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>Para mais informações:</h4>

                        <a href="/#">
                            <p>Sobre</p>
                        </a>

                    </div>
                    <div className="sb__footer-links_div">
                    <h4>Quer falar com a gente?</h4>

                    <a href="/#">
                            <p>Contatos</p>
                        </a>

                    </div>
                    <div className="sb__footer-links_div">
                    <h4>Venha fazer parte</h4>

                    <a href="/#">
                            <p>Inscrição</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Já em outras redes</h4>1
                        <div className="socialmedia">
                            <p><img src={fb} alt=""/></p>
                            <p><img src={insta} alt=""/></p>
                            <p><img src={linkedin} alt=""/></p>
                            <p><img src={twitter} alt=""/></p>
                        </div>
                    </div>
                </div>

                <hr></hr>

            <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} Yara. Todos os direitos reservados.
                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/#"><div><p>Termos e Condições</p></div></a>

                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Footer;