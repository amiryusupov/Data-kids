const SET_LANG = "SET_LANG"

const initialState = {
    lang: localStorage.getItem("lang") || "uz"
}
const LangReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANG:
            state.lang = action.lang
            return state
        default:
            return state
    }
}

export const setLang = (lang) => ({type: SET_LANG, lang})

export default LangReducer