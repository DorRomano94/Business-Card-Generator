import './Template2.css';

const Template2 = (props) => {


    return (
        <>
            <div className="wrapper">
                <main className="main">

                    <section>
                        <div id="back" className="card2">
                            <div className="top">
                            </div>
                            <div className="mid">
                                <div className="inner-div">
                                    <h1 className="designer typography">{props.template.title}</h1>
                                    <h2 className="title typography">{props.template.subtitle}</h2>
                                    <div className="icons">
                                        <div className="icon"><i className="fa fa-envelope" /><span>{props.template.email}</span></div>
                                        <div className="icon"><i className="fa fa-home" /><span>{props.template.location}</span></div>
                                        <div className="icon"><i className="fa fa-globe" /><span>{props.template.phoneNumber}</span></div>
                                    </div>

                                </div>
                            </div>
                            <div className="bottom">
                                <div className="inner-div" />
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                </footer>
            </div>

        </>
    )
}

export default Template2;