import { stayService } from '@/services/stay-service.js'

export default {
    state: {
        stays: null,
        filterBy: { propertyType: '', city: '', price: [0,3000], amenities: [], WiFi: '' },
        // labels: stayService.getlabels(),
    },
    getters: {
        stays({ stays }) {
          return stays
        },
        staysToShow({ stays }) {
          const copyStays = JSON.parse(JSON.stringify(stays))
          return copyStays
        },
        getFilterBy({ filterBy }) {
          return filterBy
        },
      },
    mutations: {
        setStays(state, { stays }) {
            state.stays = stays
        },
        saveStay(state, { stay }) {
            const idx = state.stays.findIndex((t) => t._id === stay._id)
            if (idx !== -1) state.stays.splice(idx, 1, stay)
            else state.stays.push(stay)
        },
        removeStay(state, { stayId }) {
            const idx = state.stays.findIndex((t) => t._id === stayId)
            state.stays.splice(idx, 1)
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        },
        // setFilterByKey(state, { filterBy }) {
        //     state.filterBy[filterBy[0]] = filterBy[1]
        // },
        setSort(state, { sortBy }) {
            state.sortBy = sortBy
        },
    },
    actions: {
        loadStays({ commit, state }) {
            stayService.query(state.filterBy).then((stays) => {
                console.log('stays STORE:', stays);

                commit({ type: 'setStays', stays })
            })
        },
      
        saveStay({ commit }, { stay }) {
            stayService.save(stay).then((savedStay) => {
                commit({ type: 'saveStay', stay: savedStay })
            })
        },
        removeStay({ commit }, { stayId }) {
            stayService.remove(stayId).then(() => {
                commit({ type: 'removeStay', stayId })
            })
        },
        setFilter({ dispatch, commit }, { filterBy }) {
            console.log('filterBy:', filterBy);
            commit({ type: 'setFilter', filterBy })
            dispatch({ type: 'loadStays' })
        },
    },
}