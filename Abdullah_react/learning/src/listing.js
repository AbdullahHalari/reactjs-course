import React, { Component } from 'react'

export default class Listing extends Component {
  render() {
      const planet = [
          { name: "Mars", isGasPlanet: false },
          { name: "Earth", isGasPlanet: false },
          { name: "Jupiter", isGasPlanet: true },
          { name: "Venus", isGasPlanet: false },
          { name: "Neptune", isGasPlanet: true },
          { name: "Uranus", isGasPlanet: true },
      ];
    return (
      <div>
            <div>
                {planet.map(
                    (planet, key) => <h1> {planet.name} {planet.isGasPlanet ? <p>heloo</p> : <p>hi</p>} </h1>,

                )}
            </div>
            <div>
                {planet.map(
                    (planet, key) => !planet.isGasPlanet && <h1> {planet.name} </h1>
                )}
            </div>
      </div>
    )
  }
}
