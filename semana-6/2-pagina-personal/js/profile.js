const profile = (profileData, technologiesData) => {
  const { name, shortName, slogan, description, urlPhoto, urlCv } = profileData;

  const profileInfo = document.querySelector('.profile__info');
  const profileFigure = document.querySelector('.profile__figure');

  document.querySelector('.profile__info-title').innerHTML = name;
  document.querySelector('.profile__info-subtitle').innerHTML = slogan;
  document.querySelector('.profile__info-description').innerHTML = description;
  document.querySelector('.profile__info-link').innerHTML = 'CV';
  document.querySelector('.profile__info-link').href = urlCv;
  document.querySelector('.profile__info-link[href="#projects"]').innerHTML = 'Proyectos';

  document.querySelector('.profile__figure-image').src = urlPhoto;
  document.querySelector('.profile__figure-image').alt = shortName;
  document.querySelector('.profile__figure-tech-one').src = technologiesData[0].image;
  document.querySelector('.profile__figure-tech-one').alt = technologiesData[0].name;
  document.querySelector('.profile__figure-tech-two').src = technologiesData[1].image;
  document.querySelector('.profile__figure-tech-two').alt = technologiesData[1].name;
  document.querySelector('.profile__figure-tech-three').src = technologiesData[2].image;
  document.querySelector('.profile__figure-tech-three').alt = technologiesData[2].name;
  document.querySelector('.profile__figure-tech-four').src = technologiesData[3].image;
  document.querySelector('.profile__figure-tech-four').alt = technologiesData[3].name;

  const documentScroll = () => {
    profileInfo.style.marginTop = `-${scrollY}px`;
    profileFigure.style.marginTop = `-${scrollY}px`;
  };

  document.addEventListener('scroll', documentScroll);
}

export default profile;