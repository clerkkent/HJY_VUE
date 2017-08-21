import * as types from '../mutation-types'
import axios from 'axios'
const state = {
    dataa: {

    },
    text: 1,
    show: false, //选择车牌状态控制
    ViolationList: "",
    Carlist: "",
    CarFirst: ['京', '津', '渝', '沪', '冀', '晋', '辽', '吉', '黑', '苏', '浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '琼', '川', '黔', '云', '陕', '甘', '青', '台', '蒙', '桂', '宁', '新', '藏', '港', '澳'],
    carsign: "京",
    CarDefault: false,
    cid: "",
    user_id: "",
    token: ""
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
    },
    changecarsign({ commit, state }, payload) {
        console.log(payload)
        commit(types.CHANGECARSIGN, payload.carsign)
    },
    cid({ commit, state }, payload) {
        console.log(payload)
        commit(types.CID, payload.cid)
    },
    login({ commit, state }, payload) {
        commit(types.LOGIN, payload)
    },
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
    },
    [types.CHANGECARSIGN](state, res) {
        state.carsign = res
    },
    [types.CID](state, res) {
        state.cid = res
    },
    [types.LOGIN](state, res) {
        state.user_id = res.user_id
        state.token = res.token
    }
}
export default {
    state,
    actions,
    mutations
}