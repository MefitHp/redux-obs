const LOAD_STORIES = 'modules/stories/LOAD_STORIES';
const CLEAR_STORIES = 'modules/stories/CLEAR_STORIES';

const stories = [
    {
        "by": "callnumlock",
        "id": 1263129,
        "title": "Inside by AI: Lorem ipsum",
        "url": "http://www.facebook.com/"
    },
    {
        "by": "callnumlock2",
        "id": 1263119,
        "title": "Inside by AI: Lorem ipsum",
        "url": "http://www.facebook.com/"
    },
    {
        "by": "callnumlock",
        "id": 1263229,
        "title": "Lorem Lorem: Lorem ipsum",
        "url": "http://www.facebook.com/"
    },
];
const initState = {
    items: []
}



export default function storiesReducer(state = initState, action){
    switch(action.type){
        case LOAD_STORIES:
            return {
                items: stories
            }

        case CLEAR_STORIES: 
            return { 
                items: []
            }
        default: return state;
    }
}

export const loadStories = () => {
    return {
        type: LOAD_STORIES
    }
}

export const clearStories = () => {
    return {
        type: CLEAR_STORIES
    }
}