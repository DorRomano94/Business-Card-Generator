import './Template4.css';

const Template4 = (props) => {

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="front">
                        <div className="logo"><span /></div>
                    </div>
                    <div className="back">
                        <h1>{props.template.title}<span>{props.template.subtitle}</span></h1>
                        <ul>
                            <li><p>
                                Phone: {props.template.phoneNumber}
                            </p> </li>
                            <li>
                                <p>
                                    Email: {props.template.email}
                                </p>
                            </li>
                            <li>
                                <p>
                                    Location: {props.template.location}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Template4;