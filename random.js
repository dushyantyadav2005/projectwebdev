const planets = [
    { 
        name: "Mercury", 
        image: "planetimage/mercury.jpg", 
        equatorialDiameter: "4,880 km", 
        polarDiameter: "4,880 km", 
        mass: "3.30 × 10<sup>23</sup> kg", 
        moons: "0", 
        orbitDistance: "57,910,000 km (0.39 AU)", 
        orbitPeriod: "88 days", 
        surfaceTemperature: "-173 to 427°C"
    },
    { 
        name: "Venus", 
        image: "planetimage/venus.jpg", 
        equatorialDiameter: "12,104 km", 
        polarDiameter: "12,104 km", 
        mass: "4.87 × 10<sup>24</sup> kg", 
        moons: "0", 
        orbitDistance: "108,200,000 km (0.72 AU)", 
        orbitPeriod: "225 days", 
        surfaceTemperature: "462°C"
    },
    { 
        name: "Earth", 
        image: "planetimage/earth.jpg", 
        equatorialDiameter: "12,756 km", 
        polarDiameter: "12,714 km", 
        mass: "5.97 × 10<sup>24</sup> kg", 
        moons: "1 (The Moon)", 
        orbitDistance: "149,598,262 km (1 AU)", 
        orbitPeriod: "365.24 days", 
        surfaceTemperature: "-88 to 58°C"
    },
    { 
        name: "Mars", 
        image: "planetimage/mars.jpg", 
        equatorialDiameter: "6,779 km", 
        polarDiameter: "6,752 km", 
        mass: "6.42 × 10<sup>23</sup> kg", 
        moons: "2 (Phobos and Deimos)", 
        orbitDistance: "227,939,100 km (1.52 AU)", 
        orbitPeriod: "687 days", 
        surfaceTemperature: "-125 to 20°C"
    },
    { 
        name: "Jupiter", 
        image: "planetimage/jupiter.jpg", 
        equatorialDiameter: "139,820 km", 
        polarDiameter: "139,820 km", 
        mass: "1.90 × 10<sup>27</sup> kg", 
        moons: "79", 
        orbitDistance: "778,340,821 km (5.20 AU)", 
        orbitPeriod: "4,333 days", 
        surfaceTemperature: "-108°C"
    },
    { 
        name: "Saturn", 
        image: "planetimage/saturn.jpg", 
        equatorialDiameter: "116,460 km", 
        polarDiameter: "108,728 km", 
        mass: "5.68 × 10<sup>26</sup> kg", 
        moons: "83", 
        orbitDistance: "1,426,666,422 km (9.58 AU)", 
        orbitPeriod: "10,759 days", 
        surfaceTemperature: "-139°C"
    },
    { 
        name: "Uranus", 
        image: "planetimage/uranus.jpg", 
        equatorialDiameter: "50,724 km", 
        polarDiameter: "49,648 km", 
        mass: "8.68 × 10<sup>25</sup> kg", 
        moons: "27", 
        orbitDistance: "2,870,658,186 km (19.22 AU)", 
        orbitPeriod: "30,687 days", 
        surfaceTemperature: "-197°C"
    },
    { 
        name: "Neptune", 
        image: "planetimage/neptune.jpg", 
        equatorialDiameter: "49,244 km", 
        polarDiameter: "48,600 km", 
        mass: "1.02 × 10<sup>26</sup> kg", 
        moons: "14", 
        orbitDistance: "4,498,396,441 km (30.05 AU)", 
        orbitPeriod: "60,190 days", 
        surfaceTemperature: "-201°C"
    },
    { 
        name: "Pluto", 
        image: "planetimage/Pluto.jpeg", 
        equatorialDiameter: "2,377 km", 
        polarDiameter: "2,370 km", 
        mass: "1.30 × 10<sup>22</sup> kg", 
        moons: "5", 
        orbitDistance: "5,906,380,000 km (39.48 AU)", 
        orbitPeriod: "90,560 days", 
        surfaceTemperature: "-223°C"
    },
    { 
        name: "Eris", 
        image: "planetimage/eris.jpeg", 
        equatorialDiameter: "2,326 km", 
        polarDiameter: "2,326 km", 
        mass: "1.66 × 10<sup>22</sup> kg", 
        moons: "1", 
        orbitDistance: "10,120,000,000 km (68 AU)", 
        orbitPeriod: "558 years", 
        surfaceTemperature: "-243°C"
    },
    { 
        name: "Haumea", 
        image: "planetimage/eris.jpeg", 
        equatorialDiameter: "1,632 km", 
        polarDiameter: "1,000 km", 
        mass: "4.01 × 10<sup>21</sup> kg", 
        moons: "2", 
        orbitDistance: "6,457,000,000 km (43 AU)", 
        orbitPeriod: "284 years", 
        surfaceTemperature: "-241°C"
    }
];

const stars = [
    { 
        name: "Sun", 
        image: "planetimage/sun.jpeg", 
        spectralType: "G2V", 
        mass: "1.989 × 10<sup>30</sup> kg", 
        radius: "696,340 km", 
        luminosity: "3.828 × 10<sup>26</sup> W", 
        temperature: "5,778 K", 
        distance: "0 light-years"
    },
    { 
        name: "Sirius", 
        image: "planetimage/sirius.jpeg", 
        spectralType: "A1V", 
        mass: "4.18 × 10<sup>30</sup> kg", 
        radius: "1.71 × 10<sup>6</sup> km", 
        luminosity: "1.71 × 10<sup>28</sup> W", 
        temperature: "9,940 K", 
        distance: "8.6 light-years"
    },
    { 
        name: "Alpha Centauri A", 
        image: "planetimage/alpha_centauri_a.jpg", 
        spectralType: "G2V", 
        mass: "1.10 × 10<sup>30</sup> kg", 
        radius: "1.22 × 10<sup>6</sup> km", 
        luminosity: "1.52 × 10<sup>26</sup> W", 
        temperature: "5,790 K", 
        distance: "4.37 light-years"
    },
    { 
        name: "Betelgeuse", 
        image: "planetimage/alpha_centauri_a.jpg", 
        spectralType: "M1-M2", 
        mass: "1.6 × 10<sup>30</sup> kg", 
        radius: "1.2 × 10<sup>9</sup> km", 
        luminosity: "1.2 × 10<sup>31</sup> W", 
        temperature: "3,500 K", 
        distance: "642 light-years"
    },
    { 
        name: "Rigel", 
        image: "planetimage/alpha_centauri_a.jpg", 
        spectralType: "B8Ia", 
        mass: "2.2 × 10<sup>31</sup> kg", 
        radius: "7.0 × 10<sup>8</sup> km", 
        luminosity: "1.6 × 10<sup>31</sup> W", 
        temperature: "11,000 K", 
        distance: "860 light-years"
    },
    { 
        name: "Vega", 
        image: "planetimage/alpha_centauri_a.jpg", 
        spectralType: "A0V", 
        mass: "2.1 × 10<sup>30</sup> kg", 
        radius: "2.36 × 10<sup>6</sup> km", 
        luminosity: "1.7 × 10<sup>28</sup> W", 
        temperature: "9,602 K", 
        distance: "25 light-years"
    },
    { 
        name: "Altair", 
        image: "planetimage/alpha_centauri_a.jpg", 
        spectralType: "A7V", 
        mass: "1.79 × 10<sup>30</sup> kg", 
        radius: "1.71 × 10<sup>6</sup> km", 
        luminosity: "1.9 × 10<sup>28</sup> W", 
        temperature: "7,550 K", 
        distance: "16.7 light-years"
    },
    { 
        name: "Proxima Centauri", 
        image: "planetimage/alpha_centauri_a.jpg", 
        spectralType: "M5.5Vc", 
        mass: "2.50 × 10<sup>29</sup> kg", 
        radius: "1.49 × 10<sup>6</sup> km", 
        luminosity: "3.59 × 10<sup>24</sup> W", 
        temperature: "3,042 K", 
        distance: "4.24 light-years"
    },
    { 
        name: "Arcturus", 
        image: "planetimage/alpha_centauri_a.jpg", 
        spectralType: "K1.5 III", 
        mass: "1.2 × 10<sup>30</sup> kg", 
        radius: "2.16 × 10<sup>7</sup> km", 
        luminosity: "1.3 × 10<sup>29</sup> W", 
        temperature: "4,290 K", 
        distance: "36.7 light-years"
    },
    { 
        name: "Aldebaran", 
        image: "planetimage/alpha_centauri_a.jpg", 
        spectralType: "K5 III", 
        mass: "1.96 × 10<sup>30</sup> kg", 
        radius: "4.55 × 10<sup>7</sup> km", 
        luminosity: "7.5 × 10<sup>28</sup> W", 
        temperature: "4,030 K", 
        distance: "65 light-years"
    },
    { 
        name: "Deneb", 
        image: "planetimage/alpha_centauri_a.jpg", 
        spectralType: "A2 Ia", 
        mass: "7.8 × 10<sup>30</sup> kg", 
        radius: "2.3 × 10<sup>8</sup> km", 
        luminosity: "1.5 × 10<sup>31</sup> W", 
        temperature: "8,500 K", 
        distance: "2,600 light-years"
    }
];

const galaxies = [
    { 
        name: "Milky Way", 
        image: "planetimage/all.png", 
        type: "Spiral", 
        diameter: "100,000 light-years", 
        stars: "100-400 billion", 
        distance: "0 light-years", 
        mass: "1.5 × 10<sup>12</sup> M<sub>☉</sub>", 
        constellation: "None"
    },
    { 
        name: "Andromeda", 
        image: "planetimage/all.png", 
        type: "Spiral", 
        diameter: "220,000 light-years", 
        stars: "1 trillion", 
        distance: "2.5 million light-years", 
        mass: "1.2 × 10<sup>12</sup> M<sub>☉</sub>", 
        constellation: "Andromeda"
    },
    { 
        name: "Triangulum", 
        image: "planetimage/all.png", 
        type: "Spiral", 
        diameter: "60,000 light-years", 
        stars: "40 billion", 
        distance: "3 million light-years", 
        mass: "5 × 10<sup>11</sup> M<sub>☉</sub>", 
        constellation: "Triangulum"
    },
    { 
        name: "Messier 87", 
        image: "planetimage/all.png", 
        type: "Elliptical", 
        diameter: "120,000 light-years", 
        stars: "1 trillion", 
        distance: "53 million light-years", 
        mass: "2.4 × 10<sup>12</sup> M<sub>☉</sub>", 
        constellation: "Virgo"
    },
    { 
        name: "Sombrero Galaxy", 
        image: "planetimage/all.png", 
        type: "Spiral", 
        diameter: "50,000 light-years", 
        stars: "800 billion", 
        distance: "28 million light-years", 
        mass: "8 × 10<sup>11</sup> M<sub>☉</sub>", 
        constellation: "Virgo"
    },
    { 
        name: "Whirlpool Galaxy", 
        image: "planetimage/all.png", 
        type: "Spiral", 
        diameter: "60,000 light-years", 
        stars: "230 billion", 
        distance: "23 million light-years", 
        mass: "1 × 10<sup>11</sup> M<sub>☉</sub>", 
        constellation: "Canes Venatici"
    },
    { 
        name: "Large Magellanic Cloud", 
        image: "planetimage/all.png", 
        type: "Irregular", 
        diameter: "14,000 light-years", 
        stars: "10 billion", 
        distance: "163,000 light-years", 
        mass: "1.5 × 10<sup>10</sup> M<sub>☉</sub>", 
        constellation: "Doradus"
    },
    { 
        name: "Small Magellanic Cloud", 
        image: "planetimage/all.png", 
        type: "Irregular", 
        diameter: "7,000 light-years", 
        stars: "3 billion", 
        distance: "200,000 light-years", 
        mass: "7 × 10<sup>9</sup> M<sub>☉</sub>", 
        constellation: "Tucana"
    },
    { 
        name: "Pinwheel Galaxy", 
        image: "planetimage/all.png", 
        type: "Spiral", 
        diameter: "170,000 light-years", 
        stars: "1 trillion", 
        distance: "21 million light-years", 
        mass: "1.1 × 10<sup>12</sup> M<sub>☉</sub>", 
        constellation: "Ursa Major"
    },
    { 
        name: "Centaurus A", 
        image: "planetimage/all.png", 
        type: "Lenticular", 
        diameter: "60,000 light-years", 
        stars: "100 billion", 
        distance: "10 million light-years", 
        mass: "5 × 10<sup>11</sup> M<sub>☉</sub>", 
        constellation: "Centaurus"
    }
];

function pickRandomPlanet() {
    const randomIndex = Math.floor(Math.random() * planets.length);
    const planet = planets[randomIndex];

    document.getElementById('planet-info').style.display = 'flex';
    document.getElementById('planet-image').src = planet.image;
    document.getElementById('planet-name').textContent = `${planet.name} Planet Profile`;
    document.getElementById('equatorial-diameter').innerHTML = planet.equatorialDiameter;
    document.getElementById('polar-diameter').innerHTML = planet.polarDiameter;
    document.getElementById('mass').innerHTML = planet.mass;
    document.getElementById('moons').innerHTML = planet.moons;
    document.getElementById('orbit-distance').innerHTML = planet.orbitDistance;
    document.getElementById('orbit-period').innerHTML = planet.orbitPeriod;
    document.getElementById('surface-temperature').innerHTML = planet.surfaceTemperature;
}

function closePlanetInfo() {
    document.getElementById('planet-info').style.display = 'none';
}

function pickRandomStar() {
    const randomIndex = Math.floor(Math.random() * stars.length);
    const star = stars[randomIndex];

    document.getElementById('star-info').style.display = 'flex';
    document.getElementById('star-image').src = star.image;
    document.getElementById('star-name').textContent = `${star.name} Star Profile`;
    document.getElementById('spectral-type').innerHTML = star.spectralType;
    document.getElementById('star-mass').innerHTML = star.mass;
    document.getElementById('star-radius').innerHTML = star.radius;
    document.getElementById('star-luminosity').innerHTML = star.luminosity;
    document.getElementById('star-temperature').innerHTML = star.temperature;
    document.getElementById('star-distance').innerHTML = star.distance;
}

function closeStarInfo() {
    document.getElementById('star-info').style.display = 'none';
}

function pickRandomGalaxy() {
    const randomIndex = Math.floor(Math.random() * galaxies.length);
    const galaxy = galaxies[randomIndex];

    document.getElementById('galaxy-info').style.display = 'flex';
    document.getElementById('galaxy-image').src = galaxy.image;
    document.getElementById('galaxy-name').textContent = `${galaxy.name} Galaxy Profile`;
    document.getElementById('galaxy-type').innerHTML = galaxy.type;
    document.getElementById('galaxy-diameter').innerHTML = galaxy.diameter;
    document.getElementById('galaxy-stars').innerHTML = galaxy.stars;
    document.getElementById('galaxy-distance').innerHTML = galaxy.distance;
    document.getElementById('galaxy-mass').innerHTML = galaxy.mass;
    document.getElementById('galaxy-constellation').innerHTML = galaxy.constellation;
}

function closeGalaxyInfo() {
    document.getElementById('galaxy-info').style.display = 'none';
}

function gotopage(k)
{
    if(k==='home')
    {
        window.location.href = 'index.html';
    }
    else{
        window.location.href = k+'.html';
    }
}
