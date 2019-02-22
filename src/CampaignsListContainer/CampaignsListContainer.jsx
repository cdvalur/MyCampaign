import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import CampaignsList from '../CampaignsList/CampainsList';
import CampaignInfo from '../CampaignInfo/CampaignInfo';
import './CampaignsListContainer.css';

class CampaignsListContainer extends Component {
    constructor(props){
        super(props);
        const campaignList = JSON.parse(localStorage.getItem('campaignList'));
        this.state = {
            campaignList: campaignList || [],
            selectedCampaign: '',
        }
    }
    setCampaignList  = (list) => {
        this.setState({
            campaignList: list,
        });
        localStorage.setItem('campaignList', JSON.stringify(list));
    }
    addNewCampaign = () => {
        const newCampaignName = prompt('Please Enter Campaign Name', '');
        if(newCampaignName === null || newCampaignName === ''){
            return false;
        } else {
            const currentTime = this.getTime(new Date());
            const campaign = {
                name: newCampaignName,
                createdTime: currentTime,
                isActiveCampaign: true,
                comment: '',
                history:[{
                    type: 'Created By',
                    name: 'Muni',
                }],
            };
            const currentList = this.state.campaignList || [];
            currentList.push(campaign);
            this.setCampaignList(currentList);
        }


    }
    getTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    deleteCampaign = (id) => {
        const currentList = this.state.campaignList;
        currentList.splice(id,1);
        this.setCampaignList(currentList);
    }
    renameCampaign = (id) => {
        const currentList = this.state.campaignList;
       const findCampaign = currentList.find((item, index) => {
           return index === id;
       })
       const renameCampaign = prompt('Please Rename Your Campaign', findCampaign.name);
       if(renameCampaign === null || renameCampaign === ''){
           return false;
       } else {
           const newList = currentList.map((item, index) => {
                if(index === id){
                    item.name = renameCampaign;
                    item.history.push({
                        type: 'Renamed By',
                        name: 'Nitin',
                    });
                }
                return item;
           })
       this.setCampaignList(newList);
       }
    }
    pauseResumeCampaign = (id) => {
        const currentList = this.state.campaignList;
       const newList = currentList.map((item, index) => {
        if(index === id){
            item.isActiveCampaign = !item.isActiveCampaign
            item.history.push({
                type: 'Paused By',
                name: 'Krishna',
            })
        }
        return item;
   })
    this.setCampaignList(newList);
    }
    addComment = (id) => {
        const currentList = this.state.campaignList;
        const comment = prompt('Please Enter Your Comment', '');
       if(comment === null || comment === ''){
           return false;
       } else {
           const newList = currentList.map((item, index) => {
                if(index === id){
                    item.comment = comment;
                    item.history.push({
                        type: 'Commented By',
                        name: 'Chandra',
                    })
                }
                return item;
           })
       this.setCampaignList(newList);
       }
    }
    selectedItem = (item) => {
        this.setState({
            selectedCampaign: item,
        })
    }
    render(){
        return (<div className="campaignListContainer">
            <div className="headerBlock">
                <h2>All Campaigns</h2>
                <div className="listHeader">CampaignList</div> 
                <button type="button" className="createBtn" onClick={this.addNewCampaign}> + Create New </button>
            </div>
            <CampaignsList 
            campaignList={this.state.campaignList}
            deleteCampaign={this.deleteCampaign}
            renameCampaign={this.renameCampaign}
            addComment={this.addComment}
            pauseResumeCampaign={this.pauseResumeCampaign}
            selectedItem={this.selectedItem}
            ></CampaignsList>
            {this.state.campaignList.length > 0 && <CampaignInfo selectedCampaign={this.state.selectedCampaign}></CampaignInfo> }
        </div>)
    }
}
export default CampaignsListContainer;