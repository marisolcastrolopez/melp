import React, { Component } from 'react';
import '../style/card.css';
import data from '../data/data.json';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
// import './index.css';

class Cards extends Component {
  

  render() {
    console.log(this.props.data);
    const data = (Array.isArray(this.props.data))? this.props.data : this.props.data.restaurants;
    return (
      <div>
        <MDBContainer>
          {data.map((item, index) => (
            <div key={index}>
              <MDBRow>
                <MDBCol size="4" xs="4">
                  <div>
                    <img
                      src={item.image}
                      alt="icon-btn"
                      style={{ height: `${4.5}rem`, width: `${4.5}rem` }}
                    />
                  </div>
                </MDBCol>
                <MDBCol size="6" xs="6">
                  <h6>{item.name}</h6>
                  <p>{item.description}</p>
                </MDBCol>
                <MDBCol size="2" xs="2">
                  <span>{item.raiting}</span> <br />
                  <span>${item.price}</span>
                </MDBCol>
              </MDBRow>
            </div>
          ))}
        </MDBContainer>
      </div>
    );
  }
}

export default Cards;
