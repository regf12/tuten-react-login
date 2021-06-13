import React, { useEffect } from 'react'
import Router from 'next/router'
import { signIn, useSession } from "next-auth/client"


export default function Page() {
  const [session, loading] = useSession();

	useEffect(() => {
		if(session){
			Router.push('/home')
		}else if (session?.error === "RefreshAccessTokenError") {
      signIn();
    }
  });

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
			{!session && (
        signIn()
      )}
    </>
  )
}