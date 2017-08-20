import * as types from '../mutation-types'
import axios from 'axios'
const state = {
    dataa: {

    },
    text: 1,
    show: false, //选择车牌状态控制
    ViolationList: "",
    Carlist: "",
    CarFirst: ["京", "沪", "浙"]
}
const getters = {
    changeText: state => {
        return state.text * 100;
    }
}
const actions = {
    indexinfo({ commit, state }, payload) {
        axios.get(
            "/toutiao/index?type=top&key=89a2a8effd3699b71bc9b4f4f9f1b7cf"
        ).then(function(res) {
            commit(types.INDEXINFO, res.data.result.data)
        }).catch(function(error) {
            console.log(error);
        });
    },
    dealpopum({ commit, state }, payload) {
        commit(types.HIDEPOPUM, false)
    },
    carsignshow({ commit, state }, payload) {
        commit(types.CARSIGNSHOW, true)
    },
    carsignhide({ commit, state }, payload) {
        commit(types.CARSIGNHIDE, false)
    }
}
const mutations = {
    [types.INDEXINFO](state, res) {
        state.dataa = res
    },
    [types.HIDEPOPUM](state, res) {
        state.show = res
    },
    [types.CARSIGNSHOW](state, res) {
        state.show = res
    },
    [types.CARSIGNHIDE](state, res) {
        state.show = res
    }
}
export default {
    state,
    actions,
    mutations
}