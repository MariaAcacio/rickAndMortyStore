import React from 'react';
import TestImg from '../../img/rickyandmortyimg.jpg';
import TestImg2 from '../../img/bethRAM.jpg';
import TestImg3 from '../../img/mortyRAM.jpg';
import { GiFemale, GiMale } from 'react-icons/gi';
import { BsCircleFill } from 'react-icons/bs';
import {
  GeneralContainer,
  NameCharacter,
  ImgContainer,
  ImgCharacter,
  GeneralInfoContainer,
  ListEpisodesContent,
  GenreContent,
  AliveOrDeathContent,
} from './SectionOne.elements';

type myCharacter = {
  name: string;
  id: number;
  status: string;
  gender: string;
  picture: string;
  episodes: string;
};

const mockeoApiRAM = [
  {
    name: 'Rick',
    id: 1,
    status: 'alive',
    gender: 'male',
    picture: TestImg,
    episodes: '10,11,45,67,78,5,345,5,7,8,9,5,6',
  },
  {
    name: 'Beth Smith',
    id: 5,
    status: 'unknown',
    gender: 'female',
    picture: TestImg2,
    episodes: '4,6,5,8,0',
  },
  {
    name: 'Morty Smith',
    id: 2,
    status: 'death',
    gender: 'male',
    picture: TestImg3,
    episodes: '1,3,6,5,7',
  },
];
const selecterCharacter = mockeoApiRAM[2];

export const SectionOne = () => {
  const { name, id, picture, episodes } = selecterCharacter;
  let isAlive: boolean | undefined = true;
  let isMale: boolean = true;
  const getStatusAndGender = (highlightedCharacter: myCharacter) => {
    const { status, gender } = highlightedCharacter;
    if (status === 'alive') {
      isAlive = true;
    } else if (status === 'death') {
      isAlive = false;
    } else {
      isAlive = undefined;
    }
    if (gender === 'male') {
      isMale = true;
    } else {
      isMale = false;
    }
    return { isAlive, isMale };
  };
  getStatusAndGender(selecterCharacter);
  return (
    <GeneralContainer>
      <div>
        <NameCharacter>
          <div>{`N° ${id}`}</div>
          <div>{name}</div>
        </NameCharacter>
        <ImgContainer>
          <ImgCharacter src={picture} alt="testImg" />
        </ImgContainer>
        <GeneralInfoContainer>
          <GenreContent>
            {isMale ? (
              <GiMale color="#116FAD" size="2rem" />
            ) : (
              <GiFemale color="#DB0284" size="2rem" />
            )}
          </GenreContent>
          <AliveOrDeathContent>
            {isAlive ? (
              <BsCircleFill size="2rem" color="green" />
            ) : isAlive === false ? (
              <BsCircleFill size="2rem" color="red" />
            ) : (
              <BsCircleFill size="2rem" color="grey" />
            )}
          </AliveOrDeathContent>
        </GeneralInfoContainer>
        <ListEpisodesContent>{`Appears in episodes: ${episodes}`}</ListEpisodesContent>
      </div>
    </GeneralContainer>
  );
};
