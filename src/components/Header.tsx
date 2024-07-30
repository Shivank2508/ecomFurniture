import Link from "next/link";

export default function Header() {
    return <>
        <header >
            <div className="d-flex justify-content-between bg-warning  p-3 ">
                <Link href="/" className="navbar-brand">
                    <img src="https://hometown.gumlet.io/dist/2.6.144/a6e45d728c63cca6fd7f866095e18031.png?w=300&dpr=1.0" width="100%" height="60" alt="" />
                </Link>
                <div className="d-flex justify-content-between align-items-center w-50">
                    <Link href="/" className="text-decoration-none text-black fs-6 fw-bold">
                        <div >Living</div>
                    </Link>
                    <Link href="/" className="text-decoration-none text-black fs-6 fw-bold">
                        <div >Dining</div>
                    </Link>
                    <Link href="/" className="text-decoration-none text-black fs-6 fw-bold">
                        <div >Bedroom</div>
                    </Link>
                    <Link href="/" className="text-decoration-none text-black fs-6 fw-bold">
                        <div >Sofa</div>
                    </Link>
                    <Link href="/" className="text-decoration-none text-black fs-6 fw-bold">
                        <div >Home Decore</div>
                    </Link>
                    <div className="d-flex fs-6 fw-bold">
                        <Link href="/" className="text-decoration-none text-black m-2">
                            <div ><i className="bi bi-person"></i> |</div>
                        </Link>
                        <Link href="/" className="text-decoration-none text-black m-2" >
                            <div ><i className="bi bi-cart4"></i> |</div>
                        </Link>
                        <Link href="/" className="text-decoration-none text-black m-2">
                            <div ><i className="bi bi-cart4"></i></div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    </>
}