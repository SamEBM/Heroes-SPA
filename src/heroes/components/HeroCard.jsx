import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const CharactersByHero = ({alter_ego, characters}) => {
    if (alter_ego === characters) return (<></>);
    return <p>{characters}</p>
};

export const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters, }) => {
    
    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    return (
        <div className='col animate__animated animate__fadeInUp'>
            <div className='card'>
                <div className="row no-gutter">
                    <div className='col-4'>
                        <img src={heroImageUrl} className='card-img' alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='cart-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>
                            <CharactersByHero characters={characters} alter_ego={alter_ego}/>
                            <p className='card-text'>
                                <small className='text-muted'>{first_appearance}</small>
                            </p>
                            
                            <Link className='btn btn-outline-dark' to={`/hero/${id}`}>More...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
