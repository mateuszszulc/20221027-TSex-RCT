import React, { ReactNode, useContext, useState } from 'react'

interface UserContextShape {
	name: string
	isAuth: boolean
	logIn(name: string): void
	logOut(): void
}

// Dopuszczalne rozwiązanie bo niżej w linii :28 będziemy z tego rozliczeni
const UserContext = React.createContext({} as UserContextShape);

function CurrentUserProvider({ children }: { children: ReactNode }) {
	const [name, setName] = useState('')
	const [isAuth, setAuth] = useState(false)

	const logIn = (name: string) => {
		setName(name)
		setAuth(true)
	}

	const logOut = () => {
		setName('')
		setAuth(false)
	}

	return (
		<UserContext.Provider value={{ name, isAuth, logIn, logOut }}>
			{children}
		</UserContext.Provider>
	)
}
// Używanie kontekstu i dobre podpowiadanie składni:
function IWillUseContext() {
	const { name, isAuth, logIn, logOut } = useContext(UserContext)
	return <div>{isAuth}</div>
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	CurrentUserProvider,
	UserContext
}
