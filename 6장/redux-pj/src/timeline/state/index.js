import createReducer from "../../common/createReducer";

export const types = {
    ADD: 'timeline/ADD',
    REMOVE: 'ftimeline/REMOVE',
    EDIT: 'timeline/EDIT',
    INCREASE_NEXT_PAGE: 'timeline/INCREASE_NEXT_PAGE',
    REQUEST_LIKE : 'timeline/REQUEST_LIKE',
    ADD_LIKE: 'timeline/ADD_LIKE',
    SET_LOADING: 'timeline/SET_LOADING'

}
//action
// const ADD = 'timeline/ADD';
// const REMOVE = 'ftimeline/REMOVE';
// const EDIT = 'timeline/EDIT';
// const INCREASE_NEXT_PAGE = 'timeline/INCREASE_NEXT_PAGE';

export const actions = {
    addTimeline : timeline => ({type: types.ADD, timeline}),
    removeTimeline : timeline => ({type: types.REMOVE, timeline}),
    editTimeline : timeline => ({type: types.EDIT, timeline}),
    increaseNextPage : () => ({type: types.INCREASE_NEXT_PAGE}),
    requestLike: timeline => ({type: types.REQUEST_LIKE, timeline}),
    addLike: (timelineId, value) => ({type: types.ADD_LIKE, timelineId, value}),
    setLoading: isLoading => ({type: types.SET_LOADING, isLoading})
}


//action create 함수
// export const addTimeline = timeline => ({type: ADD, timeline});
// export const removeTimeline = timeline => ({type: REMOVE, timeline});
// export const editTimeline = timeline => ({type: EDIT, timeline});
// export const increaseNextPage = () => ({type: INCREASE_NEXT_PAGE});

const INITIAL_STATE = {timelines: [], nextPage: 0, isLoading: false};
const reducer = createReducer(INITIAL_STATE,{
    [types.ADD]: (state, action) => state.timelines.push(action.timeline),
    [types.REMOVE]: (state, action) => (state.timelines = state.timelines.filter(
        timeline => timeline.id !== action.timeline.id
    )),
    [types.EDIT] : (state, action) =>{
        const index = state.timelines.findIndex(
            timeline => timeline.id === action.timeline.id
        );
        if(index >=0){
            state.timelines[index] = action.timeline;
        }
    },
    [types.INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
    [types.ADD_LIKE] : (state, action) =>{
        const timeline = state.timelines.find(
            item => item.id === action.timelineId
        );
        if(timeline){
            timeline.likes += action.value;
        }
    },
    [types.SET_LOADING]: (state, action) =>(state.isLoading = action.isLoading)
});

export default reducer;