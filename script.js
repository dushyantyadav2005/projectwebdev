const historyData = [
  {
    era: "Formation and Early Years",
    events: [
      { year: 1958, description: "NASA was established on July 29, 1958, in response to the Soviet Union's successful launch of Sputnik. The agency absorbed NACA (National Advisory Committee for Aeronautics) and other related organizations." },
      { year: 1961, description: "President John F. Kennedy set the goal of landing a man on the Moon by the end of the 1960s, spurring the Apollo program." }
    ]
  },
  {
    era: "The Space Race and Moon Landing",
    events: [
      { year: 1961, description: "Alan Shepard became the first American in space with a suborbital flight on Mercury-Redstone 3." },
      { year: 1962, description: "John Glenn orbited the Earth, marking a significant milestone in the Mercury program." },
      { year: 1969, description: "Apollo 11 landed the first humans on the Moon. Neil Armstrong and Buzz Aldrin walked on the lunar surface on July 20, 1969, while Michael Collins orbited above." }
    ]
  },
  // Add more eras and events as needed
];

function populateHistorySection(data) {
  const historySection = document.querySelector('.history .history-content');
  historySection.innerHTML = ''; // Clear existing content

  data.forEach(eraData => {
    const eraDiv = document.createElement('div');
    eraDiv.classList.add('era');

    const eraTitle = document.createElement('h3');
    eraTitle.textContent = eraData.era;
    eraDiv.appendChild(eraTitle);

    const eventList = document.createElement('ul');
    eraData.events.forEach(event => {
      const eventItem = document.createElement('li');
      eventItem.innerHTML = `<strong>${event.year}:</strong> ${event.description}`;
      eventList.appendChild(eventItem);
    });

    eraDiv.appendChild(eventList);
    historySection.appendChild(eraDiv);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('toggle-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      this.textContent = 'Switch to Light Mode';
    } else {
      this.textContent = 'Switch to Dark Mode';
    }
  });

  populateHistorySection(historyData);

  const missions = [
    { title: 'Apollo 11', text: 'Details about Mission 1', link: 'mission1.html', img: 'images/apollo-11.jfif' },
    { title: 'Mars rover', text: 'Details about Mission 2', link: 'mission2.html', img: 'images/mars-exploration-rovers-sprits-and-opportunity.webp' },
    { title: 'Apollo 11', text: 'Details about Mission 3', link: 'mission3.html', img: 'images/apollo-11.jfif' },
    { title: 'Hubble space teliscope', text: 'Details about Mission 4', link: 'mission4.html', img: 'images/hubble.jfif' },
    { title: 'Voyager 1', text: 'Details about Mission 5', link: 'mission5.html', img: 'images/voyager-1.jfif' },
    { title: 'Parker solar probe', text: 'Details about Mission 6', link: 'mission6.html', img: '../images/parker-solar-probe.jfif' }
  ];
  
  const achievements = [
    { title: 'Gemini', text: 'Details about Achievement 1', link: 'achievement1.html', img: 'images/gemini.jfif' },
    { title: 'Skylab', text: 'Details about Achievement 2', link: 'achievement2.html', img: 'images/skylab.jfif' },
    { title: 'Artemis ', text: 'Details about Achievement 3', link: 'achievement3.html', img: 'images/Artemis.jfif' },
    { title: 'Freedom 7', text: 'Details about Achievement 4', link: 'achievement4.html', img: 'images/freedom-7.jfif' },
    { title: 'Space Shuttle ', text: 'Details about Achievement 5', link: 'achievement5.html', img: 'images/space-shuttle.jfif' },
    { title: 'Voyager 1 ', text: 'Details about Achievement 6', link: 'achievement6.html', img: 'images/voyager-1.jfif' }
  ];
  
  const futurePlans = [
    { title: ' ', text: 'Details about Future Plan 1', link: 'future1.html', img: 'images/' },
    { title: ' ', text: 'Details about Future Plan 2', link: 'future2.html', img: 'images/' },
    { title: ' ', text: 'Details about Future Plan 3', link: 'future3.html', img: 'images/' },
    { title: ' ', text: 'Details about Future Plan 4', link: 'future4.html', img: 'images/' },
    { title: ' ', text: 'Details about Future Plan 5', link: 'future5.html', img: 'images/' },
    { title: ' ', text: 'Details about Future Plan 6', link: 'future6.html', img: 'images/' }
  ];

  function createCard(data) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundImage = `url(${data.img})`;
    card.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.text}</p>
      <a href="${data.link}">Read More</a>
    `;
    return card;
  }

  function populateContainer(container, data) {
    container.innerHTML = ''; // Clear existing content
    data.forEach((item) => {
      container.appendChild(createCard(item));
    });
    // Duplicate the cards to enable seamless scrolling
    data.forEach((item) => {
      container.appendChild(createCard(item));
    });
    // Set the custom property for the number of cards
    container.style.setProperty('--card-count', data.length * 2);
    // Adjust animation duration based on the number of cards
    const duration = (data.length * 2) + 's';
    container.style.setProperty('--animation-duration', duration);
  }

  const missionsContainer = document.querySelector('.missions .cards-container');
  const achievementsContainer = document.querySelector('.achievements .cards-container');
  const futurePlansContainer = document.querySelector('.future-plans .cards-container');

  populateContainer(missionsContainer, missions);
  populateContainer(achievementsContainer, achievements);
  populateContainer(futurePlansContainer, futurePlans);

  // Set specific animations for each section
  const animations = {
    'missions': 'slide-left',
    'achievements': 'slide-right',
    'future-plans': 'slide-left'
  };

  Object.keys(animations).forEach(section => {
    document.querySelector(`.${section} .cards-container`).classList.add(animations[section]);
  });
});
