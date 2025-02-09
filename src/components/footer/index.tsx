const Footer = () => {
  return (
    <footer className="w3-container w3-teal w3-center w3-margin-top">
        <p>Find me on social media.</p>
        <section className="wrap-social-media">
            <a
                href="https://www.linkedin.com/in/luiz-paulo-ba%C3%A7al-de-vasconcelos/"
                target="_blanck"
            >
                <i className="fa fa-linkedin w3-hover-opacity"></i>
            </a>
            <a
                href="https://www.facebook.com/luiz.vasconcelos.16"
                target="_blanck"
            >
                <i className="fa fa-facebook-official w3-hover-opacity"></i>
            </a>
            <a href="https://www.instagram.com/lpcomp/" target="_blanck">
                <i className="fa fa-instagram w3-hover-opacity"></i>
            </a>
        </section>
        <p>Powered by w3 and modified by me</p>
    </footer>
  );
}

export default Footer;