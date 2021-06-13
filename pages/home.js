import React from "react"
import axios from 'axios';
import { signIn, useSession, getSession } from "next-auth/client"

import Container from "../components/Container";
import Head from "next/head";
import Bookings from "../components/Bookings";

const Home = (props) => {
	const [session, loading] = useSession()

	if (loading) {
		return <p>Loading...</p>
	}

	return (
		<>
			{session ? (
				<Container>
					<Head>
						<title>Home</title>
					</Head>
					<div>
						<h1>Bookings</h1>
						{<Bookings bookings={props.bookings} />}
					</div>
				</Container>
			) : (
				signIn()
			)}
		</>
	)
}

Home.getInitialProps = async (ctx) => {
	let resJSON = []
	let session = await getSession(ctx)

	if (session && session.user) {
		await axios.get('https://dev.tuten.cl:443/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true', { headers: {
			'Accept': 'application/json', 
			'Content-Type': 'application/json',
			'App': session.user.image, 
			'adminemail': session.user.email,
			'token': session.user.name
		} })
		.then((response) => {
			resJSON = response.data
		})
		.catch((err) => {
			//console.log('error: ', err)
		})
	}

  return {
		bookings: resJSON
  };
};

export default Home