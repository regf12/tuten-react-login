import Link from "next/link";
import { signOut, useSession } from "next-auth/client"

const Navigation = () =>{
	const [session, loading] = useSession()

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				{/* <Link href="/">
					<a className="navbar-brand">Home</a>
				</Link> */}
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						{session && (
							<>
								<li className="nav-item">
									{/* <button onClick={signOut}>Sign out</button> */}
									<a className="nav-link" onClick={signOut}>Sign out</a>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	)
	
}

export default Navigation;
