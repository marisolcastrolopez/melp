import React, { Component } from 'react';
import '../style/card.css';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

class Cards extends Component {
  render() {
    const data = (Array.isArray(this.props.data))? this.props.data : this.props.data.restaurants;
    return (
      <div>
        <MDBContainer>
          {data.map((item, index) => (
            <div key={index}>
              <MDBRow className="cardstyle">
                <MDBCol size="4" xs="4">
                  <div>
                    <img
                      src={item.image}
                      alt="icon-btn"
                      style={{ height: `${6}rem`, width: `${6}rem` }}
                    />
                  </div>
                </MDBCol>
                <MDBCol size="6" xs="6">
                  <h6>{item.name}</h6>
                  <p>{item.shortDescription}</p>
                  <p>{item.address.street}</p>
                </MDBCol>
                <MDBCol size="2" xs="2">
                  <span><i style={{display: "block", fontSize: 10}} class="fas fa-star"></i> {item.rating}</span> <br />
                  <span>${item.avgPrice}</span>
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
