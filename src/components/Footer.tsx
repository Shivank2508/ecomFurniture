export default function Footer() {
    return (
        <footer>
            <div className="bg-light  d-flex justify-content-around py-4">
                <div style={{ width: "20%" }} >
                    <span className="fs-3 fw-bolder" >About Us </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                        sed do eiusmod tempor incididunt ut labore et dolore<br />
                        magna aliqua.
                        Ut enim ad minim veniam,
                        quis nostrud exercitation
                    </p>
                </div>
                <div style={{ width: "20%" }}>
                    <span className="fs-3 fw-bolder" >Quick Links </span>
                    <ul>
                        <li>Contact Us </li>
                        <li>about Us</li>
                    </ul>
                </div>
                <div style={{ width: "20%" }}>
                    <span className="fs-3 fw-bolder" >Contact Us </span>
                    <ul>
                        <li>Saharanpur,Uttar Pradesh</li>
                        <li>8923212675</li>
                        <li>tygaishivank1212@gmail.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
