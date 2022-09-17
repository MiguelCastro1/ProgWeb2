import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        email:'',
        nome:'',
        logado: false,
        tipoUsuario: 'visitante',
        id: null
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            return {
                email: action.payload.email,
                nome: action.payload.nome,
                logado: true,
                tipoUsuario: action.payload.tipoUsuarioId == 2 ? 'cliente' : 'colaborador',
                id: action.payload.id,
            }
        },
        logout: state => initialState
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;