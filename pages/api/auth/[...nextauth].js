import NextAuth from "next-auth"
import axios from 'axios';
import Providers from "next-auth/providers"

const options = {
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        app: { label: "App", type: "text" },
      },
      authorize: async (credentials, req) => {
				let user = null
				let bookings = null

				await axios.put('https://dev.tuten.cl:443/TutenREST/rest/user/testapis%40tuten.cl', {email: credentials.email}, { headers: {
					'Accept': 'application/json', 
					'Content-Type': 'application/json', 
					'App': credentials.app, 
					'Password': credentials.password 
				} })
				.then((response) => {
					user = {name: response.data.sessionTokenBck , email: response.data.email, image: credentials.app }
				})
				.catch((err) => {
					console.log('user error: ', err)
				})

				return Promise.resolve(user)
      }
    })
  ]
}

export default (req, res) => NextAuth(req, res, options)