function changeContent(type) {
    let content = '';
    const imge=document.getElementById('image_tech');
    imge.src='spacetech/'+type+'.jpg'
    switch(type) {
        case 'satellites':
            content = `
                <h2>Satellites</h2>
                <p>Satellites are crucial for modern technology and science. They are artificial objects launched into orbit around Earth or other celestial bodies. Their applications are vast and varied:</p>
                <ul>
                    <li><strong>Communication Satellites:</strong> Facilitate global telecommunications, enabling everything from phone calls to internet connectivity. Notable examples include the Intelsat and Iridium networks.</li>
                    <li><strong>Weather Satellites:</strong> Monitor atmospheric conditions, track storms, and provide data for weather forecasting. Key satellites include the GOES series and the European Meteosat satellites.</li>
                    <li><strong>Earth Observation Satellites:</strong> Provide imagery and data for environmental monitoring, disaster management, and urban planning. Examples include Landsat and Copernicus satellites.</li>
                    <li><strong>Navigation Satellites:</strong> Enable GPS systems for location tracking and navigation. The Global Positioning System (GPS) and Galileo are prominent examples.</li>
                </ul>
                <p>Satellites play a pivotal role in enhancing our understanding of Earth and beyond, supporting everything from daily weather forecasts to complex space missions.</p>
            `;
            
            break;
        case 'rocket_propulsion':
            content = `
                <h2>Rocket Propulsion Systems</h2>
                <p>Rocket propulsion systems are the backbone of space exploration. They operate on Newton's Third Law of Motion, where the expulsion of mass generates thrust. Key types of rocket propulsion include:</p>
                <ul>
                    <li><strong>Liquid Propellant Engines:</strong> These engines use liquid fuel and oxidizers, such as liquid hydrogen and liquid oxygen, to produce high thrust. They offer precise control and are used in many space missions, including NASA's Space Shuttle.</li>
                    <li><strong>Solid Propellant Engines:</strong> Utilize solid fuels, like those in the Space Shuttle's Solid Rocket Boosters, to provide high thrust with a simpler and more reliable design. They are often used for initial launches and military applications.</li>
                    <li><strong>Hybrid Engines:</strong> Combine liquid and solid propellants to leverage the advantages of both types. They offer a balance of efficiency and control, used in some commercial and experimental rockets.</li>
                    <li><strong>Ions and Electric Propulsion:</strong> Use electric fields to accelerate ions to generate thrust. Though less powerful than chemical rockets, they are highly efficient for long-duration missions, such as those planned for interplanetary travel.</li>
                </ul>
                <p>Advancements in rocket propulsion technology continue to drive progress in space exploration, from launching satellites to manned space missions.</p>
            `;
           
            break;
        case 'spacecraft':
            content = `
                <h2>Spacecraft</h2>
                <p>Spacecraft are vehicles designed to travel through space, carrying instruments or astronauts. They come in various forms depending on their mission:</p>
                <ul>
                    <li><strong>Space Probes:</strong> Unmanned spacecraft sent to explore distant planets and celestial bodies. Notable probes include Voyager 1 and 2, which have traveled beyond our solar system, and the New Horizons probe that explored Pluto.</li>
                    <li><strong>Space Shuttles:</strong> Reusable spacecraft designed to transport astronauts and cargo to and from space. NASA's Space Shuttle program, which included the Atlantis, Discovery, and Endeavour shuttles, was instrumental in building the ISS.</li>
                    <li><strong>Space Capsules:</strong> Designed to return safely to Earth, typically used for crewed missions. The Apollo Command Module, Soyuz spacecraft, and SpaceX’s Dragon capsule are prominent examples.</li>
                    <li><strong>Interplanetary Spacecraft:</strong> Designed to travel to other planets or celestial bodies. Examples include NASA’s Mars rovers and the European Space Agency’s Rosetta mission to Comet 67P.</li>
                </ul>
                <p>Spacecraft have revolutionized our ability to explore and understand the universe, leading to groundbreaking discoveries and advancements in science and technology.</p>
            `;
            break;
        case 'space_stations':
            content = `
                <h2>Space Stations</h2>
                <p>Space stations are habitable satellites that support human life for extended periods. They serve as research laboratories and platforms for scientific experimentation:</p>
                <ul>
                    <li><strong>International Space Station (ISS):</strong> A collaborative effort between NASA, Roscosmos, ESA, JAXA, and CSA. The ISS orbits Earth and serves as a microgravity laboratory for scientific research in various fields, including biology, physics, and astronomy.</li>
                    <li><strong>Mir:</strong> The Soviet space station, operational from 1986 to 2001, was a precursor to the ISS. It played a crucial role in developing long-duration spaceflight technologies and hosted international crews.</li>
                    <li><strong>Tiangong:</strong> China's space station program, with modules like Tiangong-1 and Tiangong-2. The upcoming Tiangong space station aims to provide a long-term presence in orbit and support scientific research and international cooperation.</li>
                    <li><strong>Planned Space Stations:</strong> Future plans include NASA’s Lunar Gateway, a space station intended to orbit the Moon and support Artemis missions to the lunar surface.</li>
                </ul>
                <p>Space stations provide valuable insights into living and working in space, helping prepare for future missions to the Moon, Mars, and beyond.</p>
            `;
            break;
        case 'space_rovers':
            content = `
                <h2>Space Rovers</h2>
                <p>Space rovers are robotic vehicles designed to explore the surface of other planets and moons. They are equipped with scientific instruments to conduct experiments and gather data:</p>
                <ul>
                    <li><strong>Curiosity Rover:</strong> A car-sized rover exploring Mars since 2012. It analyzes rock samples, studies the Martian atmosphere, and searches for signs of past life.</li>
                    <li><strong>Opportunity Rover:</strong> Operated on Mars from 2004 to 2018, Opportunity provided critical data on Martian geology and climate, including evidence of ancient water flows.</li>
                    <li><strong>Perseverance Rover:</strong> Launched in 2021, Perseverance is focused on astrobiology, including the search for signs of past life, and collecting samples for future return missions. It also tests new technologies for future human missions to Mars.</li>
                    <li><strong>Future Rovers:</strong> Planned missions include the European ExoMars rover, which will search for signs of life and study Mars’ climate and geology.</li>
                </ul>
                <p>Space rovers have revolutionized our understanding of other planets, providing detailed information about their surfaces and potential for habitability.</p>
            `;
            break;
        case 'space_telescopes':
            content = `
                <h2>Space Telescopes</h2>
                <p>Space telescopes are observatories positioned in orbit to avoid atmospheric interference and provide clear, detailed images of celestial objects:</p>
                <ul>
                    <li><strong>Hubble Space Telescope:</strong> Launched in 1990, Hubble has provided stunning images of distant galaxies, nebulae, and exoplanets. Its observations have been crucial in expanding our understanding of the universe.</li>
                    <li><strong>James Webb Space Telescope:</strong> Scheduled to succeed Hubble, JWST will observe the universe in the infrared spectrum, allowing scientists to study the formation of the first galaxies and the atmospheres of exoplanets.</li>
                    <li><strong>Chandra X-ray Observatory:</strong> Observes X-ray emissions from cosmic phenomena, such as black holes and supernova remnants. It provides insights into high-energy processes and the structure of the universe.</li>
                    <li><strong>Upcoming Telescopes:</strong> Future missions include the Nancy Grace Roman Space Telescope, which will study dark energy and exoplanets.</li>
                </ul>
                <p>Space telescopes have significantly enhanced our view of the cosmos, contributing to groundbreaking discoveries and advancing our understanding of the universe.</p>
            `;
            break;
        case 'space_suits':
            content = `
                <h2>Space Suits</h2>
                <p>Space suits are specially designed garments that protect astronauts from the extreme conditions of space:</p>
                <ul>
                    <li><strong>Pressure Garment:</strong> Maintains internal pressure to counteract the vacuum of space, ensuring the astronaut’s safety and comfort.</li>
                    <li><strong>Life Support System:</strong> Provides oxygen, manages temperature, and handles waste products. This system is crucial for long-duration space missions and extravehicular activities (EVAs).</li>
                    <li><strong>Helmet and Visor:</strong> Protects the astronaut’s head and eyes from micrometeoroids, space debris, and radiation. It also includes a communication system for contact with mission control.</li>
                    <li><strong>Suit Improvements:</strong> Advances include enhanced mobility, better thermal insulation, and integrated communication systems to improve functionality during EVAs.</li>
                </ul>
                <p>Space suits are essential for astronaut safety and effectiveness during spacewalks, scientific experiments, and other activities outside spacecraft.</p>
            `;
            break;
        case 'navigation_systems':
            content = `
                <h2>Spacecraft Navigation Systems</h2>
                <p>Spacecraft navigation systems are vital for accurate trajectory control and positioning in space:</p>
                <ul>
                    <li><strong>Inertial Navigation Systems:</strong> Use gyroscopes and accelerometers to measure the spacecraft’s motion and orientation, enabling precise navigation and control.</li>
                    <li><strong>Star Trackers:</strong> Measure the positions of stars to determine spacecraft orientation and positioning. They provide high-precision guidance for space missions.</li>
                    <li><strong>Ground-Based Tracking:</strong> Employs large Earth-based antennas and radar to monitor and guide spacecraft, providing additional accuracy and support for long-range missions.</li>
                    <li><strong>Deep Space Navigation:</strong> Utilizes advanced techniques like gravitational assists and precise trajectory calculations for interplanetary missions.</li>
                </ul>
                <p>Advancements in navigation technology continue to enhance the accuracy and efficiency of space missions, enabling more complex and ambitious explorations.</p>
            `;
            break;
        case 'communication_systems':
            content = `
                <h2>Communication Systems</h2>
                <p>Communication systems are essential for maintaining contact between spacecraft and Earth:</p>
                <ul>
                    <li><strong>Radio Frequency (RF) Communications:</strong> Utilize electromagnetic waves to transmit data, including telemetry, commands, and scientific information. Different frequency bands are used for various types of communication.</li>
                    <li><strong>Optical Communications:</strong> Employ laser technology to achieve high-data-rate transmissions. They offer greater bandwidth and data transfer rates compared to traditional RF communications.</li>
                    <li><strong>Deep Space Network (DSN):</strong> A network of large ground-based antennas that supports long-range communications with spacecraft. It provides crucial support for missions beyond Earth’s orbit.</li>
                    <li><strong>Communication Innovations:</strong> Include advancements in signal processing, error correction, and network management to improve data reliability and efficiency.</li>
                </ul>
                <p>Communication systems play a crucial role in the success of space missions, ensuring that data and commands are transmitted accurately and efficiently.</p>
            `;
            break;
        case 'space_sensors':
            content = `
                <h2>Space-Based Sensors</h2>
                <p>Space-based sensors are instruments deployed in space to monitor various phenomena and collect data:</p>
                <ul>
                    <li><strong>Remote Sensing Sensors:</strong> Collect data on Earth’s surface, atmosphere, and oceans. They provide valuable information for climate monitoring, resource management, and disaster response.</li>
                    <li><strong>Radiation Detectors:</strong> Measure cosmic and solar radiation levels to study space weather and its effects on spacecraft and astronauts. Instruments like the Cosmic Ray Telescope contribute to this research.</li>
                    <li><strong>Imaging Sensors:</strong> Capture high-resolution images of celestial objects and phenomena. Space telescopes and observatories rely on these sensors to observe distant galaxies and stars.</li>
                    <li><strong>Magnetometers:</strong> Measure magnetic fields in space, providing insights into planetary magnetospheres and space weather interactions.</li>
                </ul>
                <p>Space-based sensors provide critical data for scientific research, environmental monitoring, and space mission support, enhancing our understanding of the universe and our planet.</p>
            `;
            break;
        case 'satellite_imagery':
            content = `
                <h2>Satellite Imagery</h2>
                <p>Satellite imagery refers to images of Earth or other celestial bodies captured by satellites. It plays a crucial role in various applications:</p>
                <ul>
                    <li><strong>Earth Observation:</strong> Satellite imagery provides detailed views of Earth's surface, enabling environmental monitoring, urban planning, and disaster management. It helps track deforestation, climate change, and natural disasters.</li>
                    <li><strong>Military and Intelligence:</strong> Provides critical information for national security and defense. High-resolution images are used for surveillance, reconnaissance, and strategic planning.</li>
                    <li><strong>Agriculture:</strong> Assists in monitoring crop health, soil conditions, and land use. Farmers use satellite imagery to optimize irrigation, assess crop yields, and manage pests.</li>
                    <li><strong>Climate Research:</strong> Satellite data contributes to understanding climate patterns, greenhouse gas emissions, and atmospheric conditions, supporting global climate models and policies.</li>
                </ul>
                <p>Satellite imagery has revolutionized our ability to observe and understand Earth, offering insights that are essential for science, security, and everyday life.</p>
            `;
            break;
        default:
            content = '<p>Select a technology to view more details.</p>';

    }

    document.getElementById('content').innerHTML = content;
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