import React, { Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name:"joe"
    }
    this.loopListings=this.loopListings.bind(this)
  }

loopListings (){
  var {listingsData} = this.props

  if(listingsData == undefined || listingsData.length == 0){
    return "Sorry your filter did not match any listing"
  }

    return listingsData.map((listing, index)=>{
      if(this.props.globalState.view == 'box'){
        return (
          /// BOX VIEW ///
          <div className="col-md-3" key={index}>
            <div className="listing">
              <div className="listing-image" style={{background:`url("${listing.image}") no-repeat center center`}}>
                <span className="address">{listing.address}</span>
                <div className="details">


                       <div className="col-md-12">
                          <div className="listing-details">
                             <div className="floor-space">
                                <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                                <span>{listing.floorSpace} sq ft&sup2;</span>
                             </div>
                             <div className="bedrooms">
                                <i className="fa fa-bed" aria-hidden="true"></i>
                                <span>{listing.bedrooms} Bedroom</span>
                             </div>
                             <div className="furnished">
                                <i className="fa fa-television" aria-hidden="true"></i>
                                <span>{listing.furnished}</span>
                             </div>
                          </div>
                          <div className="view-btn">
                            View Listing
                          </div>
                        </div>
                    </div>
                </div>
                 <div className="bottom-info">
                  <span className="price">£{listing.price}</span>
                  <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>{listing.city}, {listing.postcode}</span>
                 </div>
                </div>
              </div>
          )
      }else{
      return (
        /// LONG VIEW ///
        <div className="col-md-12 col-lg-6" key={index}>
          <div className="listing">
            <div className="listing-image" style={{background:`url("${listing.image}") no-repeat center center`}}>
              <span className="address">{listing.address}</span>
              <div className="details">
                     <div className="col-md-12 col-lg-6">
                        <div className="listing-details">
                           <div className="floor-space">
                              <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                              <span>{listing.floorSpace}sq ft&sup2;</span>
                           </div>
                           <div className="bedrooms">
                              <i className="fa fa-bed" aria-hidden="true"></i>
                              <span>{listing.bedrooms} Bedroom</span>
                           </div>
                           <div className="furnished">
                              <i className="fa fa-television" aria-hidden="true"></i>
                              <span>{listing.furnished}</span>
                           </div>
                        </div>

                        <div className="view-btn">
                          View Listing
                        </div>
                      </div>
                  </div>
              </div>
               <div className="bottom-info">
                <span className="price">£{listing.price}</span>
                <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>{listing.city}, {listing.postcode}</span>
               </div>
              </div>
            </div>
        )
      }
    })
  }

  render () {
    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" onChange={this.props.change}/>
        </section>

        <section className="sortby-area">
            <div className="results">{this.props.globalState.filteredData.length} Results found</div>
            <div className="sort-options">
              <select name="sortby" className="sortby" onChange={this.props.change}>
                <option value="price-dsc">Lowest Price</option>
                <option value="price-asc">Highest Price</option>
              </select>
              <div className="view">
                <i className="fa fa-th-list" aria-hidden="true" onClick={this.props.changeView.bind(null, "long")}></i>
                <i className="fa fa-th" aria-hidden="true" onClick={this.props.changeView.bind(null, "box")}></i>
              </div>
            </div>
        </section>

      <section className="listings-results">
        {this.loopListings()}

      </section>

      <section id="pagination">
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>
      </section>


    )
  }
}
