import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    const heroes = getHeroesByName(q);

    const {searchHero, onInputChange} = useForm({
        searchHero: q,
    });

    const onSearchSubmit = (ev) => {
        ev.preventDefault();
        navigate(`?q=${searchHero}`);
    };

    return (
        <>
            <h1 className='text-center mt-2'>Search Heroes</h1>
            <hr />

            <div className="row">
                <div className='col-5'>
                    <h4>Who is your hero?</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input value={searchHero} onChange={onInputChange} className='form-control' name="searchHero" type="text" autoComplete="off" placeholder='Search a hero' />
                        <button className='btn btn-outline-primary mt-2'>Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>

                    {
                        !q && 
                        <div className='alert alert-primary animate__animated animate__fadeIn'>Search a hero</div>
                    }

                    {
                        !heroes.length && q && 
                        <div className='alert alert-danger animate__animated animate__fadeIn'> Unable to find a hero with <b>{q}</b></div>
                    }

                    {
                        heroes.map( hero => (
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
