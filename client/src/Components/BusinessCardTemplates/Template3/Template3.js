
import './Template3.css';
const Template3 = (props) => {


    return (
        <>
            <aside className="profile-card">
                <header>
                    {/* here’s the avatar */}
                    <a href="https://tutsplus.com">
                        <img src="http://i1105.photobucket.com/albums/h348/amanzz/icons/amon_sq_zpsegwfhdch.jpg" alt="avatar" />
                    </a>
                    <h1>{props.template.title}</h1>
                    <h2>{props.template.subtitle}</h2>

                </header>
                {/* bit of a bio; who are you? */}
                <div className="profile-bio">
                    <h4>Email: {props.template.email}</h4>
                    <h4>Phone Number: {props.template.phoneNumber}</h4>
                    <h4>Location: {props.template.location}</h4>
                </div>
            </aside>
        </>
    )
}

export default Template3;