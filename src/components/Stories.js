import React from 'react'
import {connect} from 'react-redux'
import { loadStories, clearStories } from '../reducers'

const Stories = (props) => {
    return (
        <div>
            <button type="button" onClick={()=>props.loadStories()}>Load Top 3 Stories</button>
            <button type="button" onClick={()=>props.clearStories()}>Clear</button>
            <StoryList {...props} />
        </div>
    )
}

const StoryList = (props) => {
    const hasNoLength = props.items.length === 0;
    
    if(hasNoLength) return <p>No hay</p>;
    return (
        <div>
            {props.items.map(item => <Story {...item} key={item.id} />)}
        </div>
    )
}

const Story = ({title}) => {
    return <p>{title}</p>
}

const mapStateToProps = (state)=> state;
const mapDispatch = dispatch => {
    return {
        loadStories: ()=>dispatch(loadStories()),
        clearStories: ()=>dispatch(clearStories())
    }
}
export default connect(mapStateToProps, mapDispatch)(Stories);
