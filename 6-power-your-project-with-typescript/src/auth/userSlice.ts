import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface UserState {
	name: string;
	email: string;
}

const initialState: UserState = {
	name: '',
	email: ''
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logInUser: (state: Draft<UserState>, action: PayloadAction<string>) => {
			const [name] = action.payload.split('@')
			state.name = name;
			state.email = action.payload;
		},
		logOutUser: (state: Draft<UserState>) => {
			state.name = '';
			state.email = '';
		}
	},
})

export const { logInUser, logOutUser } = userSlice.actions

export const selectUser = (state: RootState) => {
	const { name, email } = state.user;
	return { name, email }
};
export const selectIsAuth = (state: RootState) => Boolean(state.user.name && state.user.email);

export default userSlice.reducer
