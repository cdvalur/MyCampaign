import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CampaignInfo.css';

class CampaignInfo extends Component {

    render(){
        const { selectedCampaign } = this.props;
        const history = selectedCampaign.history || [];
        return (<div className="campaignInfo">
            History
            {history.map((item) => {
                return (<div>
                    <div>{item.type}</div>
                    <div>{item.name}</div>
                </div>)
            })}
        </div>)
    }
}
CampaignInfo.defaultProps = {
    selectedCampaign: {},
}
CampaignInfo.propTypes = {
    selectedCampaign: PropTypes.objectOf(PropTypes.object),
}
export default CampaignInfo;