// Tutors div holder

const projects = [
  {
    id: 'card1',
    image: './images/guestOne.jpg',
    image1: './images/square-bg.jpg',
    title: 'Sasha Banky',
    smallheading: 'Well known Fashion tycoon, with blinding dress style',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
  },
  {
    id: 'card2',
    title: 'Kevin Joseph',
    smallheading: 'Blazing Hot and always ready to slay aka (The ladies Man)',
    image: './images/guestTwo.jpg',
    image1: './images/squared-bg.jpg',
    description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
  },
  {
    id: 'card3',
    title: 'Mickayla Stemberg',
    smallheading: 'Lady boss, a two times award fahionist, with jaw dropping looks',
    image: './images/guestThree.jpg',
    image1: './images/squared-bg.jpg',
    description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
  },
  {
    id: 'card4',
    title: 'Mirela Pitt',
    smallheading: 'A brazilian fashionist and CEO of hid-Fashion Limited.',
    image: './images/guestNew.jpg',
    image1: './images/squared-bg.jpg',
    description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
  },
  {
    id: 'card5',
    image: './images/guestFive.jpg',
    image1: './images/squared-bg.jpg',
    title: 'Miss Aubrey',
    smallheading: 'miss world 2025 currently as fashionist',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
  },
  {
    id: 'card5',
    image: './images/guestSix.jpg',
    image1: './images/squared-bg.jpg',
    title: 'Rebeka Biden',
    smallheading: 'number one art professional',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
  },
];
const section = document.getElementById('about');
projects.forEach((project) => {
  const div = document.createElement('div');
  div.className = 'main-container1';
  div.innerHTML = `
   <div class="maincontainerdiv">
        <div class="part1">
        <img class="back-image" src="${project.image1}" alt="image"/>
          <img class="speaker-image" src="${project.image}" alt="image" />
        </div>
        <div class="part2">
            <h2 class="heading">${project.title}</h2>
          <p class = "small-head">
          <i>${project.smallheading}</i></p>
        
            <p class="main-p">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required.
            </p>
        </div
        </div>
        </div>
      `;
  section.appendChild(div);
});