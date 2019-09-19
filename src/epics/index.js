import { combineEpics, ofType } from 'redux-observable';
import { switchMap, delay } from 'rxjs/operators';
import { of } from 'rxjs'
import { LOAD_STORIES, clearStories } from '../reducers';


const loadStoriesEpic = (action$) => {
    // console.log(action$);
    // return action$;
    console.log(action$);
    return action$.pipe(
        ofType(LOAD_STORIES),
        switchMap(() => {
            return of(clearStories()).pipe(delay(2000))
        })
    );
}

export const rootEpic = combineEpics(loadStoriesEpic);