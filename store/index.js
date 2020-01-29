
export const state = () => ({
    darkMode: localStorage.getItem('darkMode') || false
})

export const mutations = {
    TOGGLE_DARKMODE(state, val)
    {
        if (state.darkMode) {
            localStorage.removeItem('darkMode')
            state.darkMode = false
        }
        else {
            state.darkMode = true
            localStorage.setItem('darkMode', true)
        }
    }
}

export const actions = {
    toggleDarkMode( {commit}, payload ) {
        commit('TOGGLE_DARKMODE', payload)
    }
}
