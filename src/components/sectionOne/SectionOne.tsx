import { GiFemale, GiMale } from 'react-icons/gi';
import { BsCircleFill } from 'react-icons/bs';
import { useCharacter } from '../../hooks/useGlobalState';
import { getNumberOfEpisodes } from '../../tools/getNumberOfEpisodes';
import {
  GeneralContainer,
  NameCharacter,
  ImgContainer,
  ImgCharacter,
  GeneralInfoContainer,
  ListEpisodesContent,
  GenreContent,
  AliveOrDeathContent,
  EpisodesContainer,
} from './SectionOne.elements';

export const SectionOne = () => {
  const { highlightedChar } = useCharacter();

  let name: string = '';
  let id: number = 0;
  let status: string = '';
  let gender: string = '';
  let image: string = '';
  let episode: string[] = [];

  if (highlightedChar) {
    ({ name, id, status, gender, image, episode } = highlightedChar);
  }

  let isAlive: boolean | undefined = true;
  let isMale: boolean = true;

  const getStatusAndGender = (status: string, gender: string) => {
    if (status === 'Alive') {
      isAlive = true;
    } else if (status === 'Dead') {
      isAlive = false;
    } else {
      isAlive = undefined;
    }
    if (gender === 'Male') {
      isMale = true;
    } else {
      isMale = false;
    }
    return { isAlive, isMale };
  };

  getStatusAndGender(status, gender);
  const NumberOfEpisodes = getNumberOfEpisodes(episode);
  return (
    <>
      {highlightedChar && (
        <GeneralContainer>
          <div>
            <NameCharacter>
              <div>{`N° ${highlightedChar?.id}`}</div>
              <div>{highlightedChar?.name}</div>
            </NameCharacter>
            <ImgContainer>
              <ImgCharacter src={highlightedChar?.image} alt="testImg" />
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
                <BsCircleFill
                  size="2rem"
                  color={isAlive ? 'green' : isAlive === false ? 'red' : 'grey'}
                />
              </AliveOrDeathContent>
            </GeneralInfoContainer>
            <EpisodesContainer>
              <div>Appears in episodes:</div>
              <ListEpisodesContent>{NumberOfEpisodes}</ListEpisodesContent>
            </EpisodesContainer>
          </div>
        </GeneralContainer>
      )}
    </>
  );
};
