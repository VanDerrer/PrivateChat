import Vue from 'vue';
import Vuex from 'vuex';
import crypto from './Crypto.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: { 
        user: {},
        allMessages: [],
        users: []
    },
    mutations: {
        setUser(state, user) {
            state.user = user
            console.log('setuser', state.user);
        },
        clearData(state){
            state.user = {};
            state.allMessages = [];
            state.users = []
        },
        SOCKET_newMessage(state, data){
            state.allMessages.push(crypto.decryptData(data));
        },
        SOCKET_updateUsersList(state, users){
            state.users = users,
            console.log('updateUser', state.user);
        }
    },

});


