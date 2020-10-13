import auction from '../../common/static_data/auction.js';

const auctionReducer = (state = auction, action) => {

    switch(action.type) {
        default:
            return state;
    }

}

export default auctionReducer;