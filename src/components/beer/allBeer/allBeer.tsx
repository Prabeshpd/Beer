import * as React from 'react';
import ReactTooltip from 'react-tooltip';
import { PunkBeerInterface } from '../../../types/Beer';

interface InjectedProps {
  beers: PunkBeerInterface[];
}
function AllBeer(props: InjectedProps): React.ReactElement {
  const { beers } = props;

  return (
    <div className="mln-16 grid-x grid-margin-x">
      {beers.map((beer, index) => {
        const { name, tagline, description, imageUrl, ingredients } = beer;
        const ingredientsKeys = Object.keys(ingredients);
        const ingredientsInBeer = ingredientsKeys.join(', ');

        return (
          <div className="callout mln-4 cell medium-12 large-6" key={`${index}_${name}`}>
            <div className="media-object">
              <div className="media-object-section">
                <div className="cell small-4">
                  <a data-tip={ingredientsInBeer}>
                    {' '}
                    <img src={imageUrl} alt="" style={{ width: '80px', height: '200px' }} onMouseOver={() => {}} />
                  </a>
                  <ReactTooltip />
                </div>
              </div>
              <div className="media-object-section ml-18 mt-5">
                <h5>
                  <strong>{name}</strong>
                </h5>
                <h6 style={{ color: '#DAA520' }}>{tagline}</h6>
                <p>{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeer;
