import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

class ListItem extends Component {

render(){
    const { item, id } = this.props;
    const itmeNum = Number(id) + 1;
    return (
        <div className="listItem" id={id} onClick={() => { this.props.selectedItem(item) }}>
            <div className="nameBlock">
                <div className="itemNum">{itmeNum}</div>
                <div className="itemName">Campaign {itmeNum} - {item.name}<br/> <span className="createdTime">Created at {item.createdTime}</span></div>
            </div>
            <div className="listActions">
                <button type="button"onClick={() => { this.props.pauseResumeCampaign(id) }}>{item.isActiveCampaign? 'Pause' : 'Resume'} </button>
                <button type="button" onClick={() => { this.props.addComment(id) }}>Comment</button>
                <button type="button" onClick={() => { this.props.renameCampaign(id) }}>Rename</button>
                <button type="button" onClick={() => { this.props.deleteCampaign(id) }}>Delete</button>
            </div>
        </div>
    )
}

}
ListItem.defaultProps = {
    item: {},
    id: 0,
}
ListItem.propTypes = {
    item: PropTypes.objectOf(PropTypes.object),
    id: PropTypes.Number,
    deleteCampaign: PropTypes.func.isRequired,
    renameCampaign: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    pauseResumeCampaign: PropTypes.func.isRequired,
    selectedItem: PropTypes.func.isRequired,
}
export default ListItem;