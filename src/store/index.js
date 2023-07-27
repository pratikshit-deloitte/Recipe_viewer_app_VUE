import {createStore} from 'vuex'
import state from "./state"
import * as getters from "./getters"
import * as mutations from "./getters"
import * as actions from "./getters"
const store = createStore({
    state,
    actions,
    mutations,
    getters,
})

export default store