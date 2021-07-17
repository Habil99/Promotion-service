const Footer = () => {
    return (
        <div className="main-footer">
            <div className="base-container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center social-links">
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <img src={'/assets/images/twitter.svg'} alt="Promotion Service Twitter Account" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <img src={'/assets/images/vcontact.svg'} alt="Promotion Service VKontakt Account" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <img src={'/assets/images/telegram.svg'} alt="Promotion Service Telegram Account" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg">
                        <p className="text-center copyright-text">
                            © 2021 - All Rights Lecensed
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <p className="text-right">
                            For commercial inquiries
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
