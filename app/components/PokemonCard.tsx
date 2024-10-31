import React, { ReactElement } from 'react'
import { Pokemon } from '../utils/types';
import Link from 'next/link';

interface IProps {
  pokemon: Pokemon;
}


const PokemonCard = ({ pokemon }: IProps ): ReactElement => {
  const { name } = pokemon

  return (
    <div className='border-2 border-white w-28'>
      <p>{name}</p>
      <button>
        <Link href={`/${name}`} >
          show more
        </Link>
      </button>
    </div>
  )
}

export default PokemonCard;
