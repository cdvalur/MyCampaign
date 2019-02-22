import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
import './CampainsList.css';

class CampaignsList extends Component { 
render(){
    const { campaignList } = this.props;
    return (
        <div className="campaignList">
            {campaignList.map( (item, index) => {
                return (
                <ListItem 
                    item={item} 
                    key={index}
                    id={index}
                    deleteCampaign={this.props.deleteCampaign}
                    renameCampaign={this.props.renameCampaign}
                    addComment={this.props.addComment}
                    pauseResumeCampaign={this.props.pauseResumeCampaign}
                    selectedItem={this.props.selectedItem}>
                    </ListItem>)
            })}
        </div>
    )
}

}
CampaignsList.defaultProps = {
    campaignList: [],
}
CampaignsList.propTypes = {
    campaignList: PropTypes.arrayOf(PropTypes.object),
    deleteCampaign: PropTypes.func.isRequired,
    renameCampaign: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    pauseResumeCampaign: PropTypes.func.isRequired,
    selectedItem: PropTypes.func.isRequired,
}
export default CampaignsList;