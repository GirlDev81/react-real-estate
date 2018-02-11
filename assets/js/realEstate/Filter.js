import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {

    }
    this.cities = this.cities.bind(this)
    this.propertyTypes = this.propertyTypes.bind(this)
    this.rooms = this.rooms.bind(this)
  }

  componentWillMount(){
    this.props.populateAction()
  }
    cities(){
      if(this.props.globalState.populateFormsData.cities != undefined){
        var {cities} = this.props.globalState.populateFormsData

        return cities.map((item) =>{
        return(
          <option key={item} value={item}>{item}</option>
        )
    })
  }
}
    propertyTypes(){
      if(this.props.globalState.populateFormsData.propertyTypes != undefined){
        var {propertyTypes} = this.props.globalState.populateFormsData

        return propertyTypes.map((item) =>{
        return(
          <option key={item} value={item}>{item}</option>
        )
    })
  }
}
    rooms(){
      if(this.props.globalState.populateFormsData.rooms != undefined){
        var {rooms} = this.props.globalState.populateFormsData

        return rooms.map((item) =>{
        return(
          <option key={item} value={item}>{item}+ Bedroom(s)</option>
        )
    })
  }
}


  render () {
    return (
    <section id="filter">
      <div className="inside">
        <h4>FILTER</h4>
            <label htmlFor="Location">Location</label>
            <select name="city" className="city-filter" onChange={this.props.change}>
              <option value="All">Any</option>
                {this.cities()}
            </select>

            <label htmlFor="propertyType">Property Type</label>
            <select name="propertyType" className="propertyType-filter" onChange={this.props.change}>
              <option value="All">Any</option>
                {this.propertyTypes()}
            </select>
            
            <label htmlFor="Bedrooms">Bedrooms</label>
            <select name="bedrooms" className="bedrooms-filter" onChange={this.props.change}>
                {this.rooms()}
            </select>
            <div className="price-filter">
              <span className="title">Price (£)</span>
                <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price}/>
                <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price}/>
            </div>
            <div className="floor-space-filter">
              <span className="title">Floor-Space (sq ft&sup2;)</span>
                <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space}/>
                <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space}/>
            </div>


            <div className="extras-filter">
              <span className="title">Extras</span>
                <label htmlFor="extras">
                  <span>Furnished</span>
                  <input name="furnished" value="furnished" type="checkbox" onChange={this.props.change}/>
                </label>
                <label htmlFor="extras">
                  <span>Parking</span>
                    <input name="parking" value="parking" type="checkbox" onChange={this.props.change}/>
                </label>
                <label htmlFor="extras">
                  <span>Garden</span>
                    <input name="garden" value="garden" type="checkbox" onChange={this.props.change}/>
                </label>
                <label htmlFor="extras">
                  <span>Garage</span>
                    <input name="garage" value="garage" type="checkbox" onChange={this.props.change}/>
                </label>
                <label htmlFor="extras">
                  <span>Shared Ownership</span>
                    <input name="shared_ownership" value="shared_ownership" type="checkbox" onChange={this.props.change}/>
               </label>
            </div>
          </div>
      </section>



    )
  }
}
