const p=document.querySelector('.about_parts');
const note = `
                <h2>1. Definition and Classification</h2>
                <p>Planets are large celestial bodies that orbit a star. In our Solar System, the primary star is the Sun. Planets are classified into two main types:</p>
                <ul>
                    <li><strong>Terrestrial Planets</strong>: These are rocky planets with solid surfaces. In our Solar System, they include Mercury, Venus, Earth, and Mars. They generally have higher densities and are closer to the Sun.</li>
                    <li><strong>Gas Giants and Ice Giants</strong>: 
                        <ul>
                            <li><strong>Gas Giants</strong>: Jupiter and Saturn are the gas giants. They are predominantly composed of hydrogen and helium and have thick atmospheres with deep gaseous layers.</li>
                            <li><strong>Ice Giants</strong>: Uranus and Neptune are ice giants, with a composition that includes a larger proportion of "ices" such as water, ammonia, and methane, compared to hydrogen and helium.</li>
                        </ul>
                    </li>
                </ul>
                <h2>2. Orbital Characteristics</h2>
                <p>Planets orbit a star in an elliptical path. The shape of their orbits can be slightly eccentric (oval-shaped) but are generally close to circular. Key orbital characteristics include:</p>
                <ul>
                    <li><strong>Orbital Period</strong>: The time it takes for a planet to complete one orbit around the star.</li>
                    <li><strong>Orbital Distance</strong>: The average distance from the planet to the star, known as the semi-major axis.</li>
                    <li><strong>Eccentricity</strong>: A measure of how elongated the orbit is.</li>
                </ul>
                <h2>3. Physical Properties</h2>
                <p>Planets exhibit diverse physical characteristics, such as:</p>
                <ul>
                    <li><strong>Size and Mass</strong>: Planets vary widely in size and mass. For example, Jupiter is the largest planet in our Solar System, while Mercury is the smallest.</li>
                    <li><strong>Surface and Atmosphere</strong>: Surface features can range from rocky terrain and mountains to icy surfaces and deep oceans. Atmospheres vary in composition and density, affecting weather and climate.</li>
                </ul>
                <h2>4. Planetary Systems</h2>
                <p>A planetary system consists of a star and the planets and other objects that orbit it. The study of these systems extends beyond our Solar System to include exoplanets (planets orbiting stars other than the Sun).</p>
                <ul>
                    <li><strong>Exoplanets</strong>: Detected using methods such as the transit method (observing dimming of a star as a planet passes in front of it) or radial velocity (measuring star's wobble due to gravitational influence of a planet).</li>
                </ul>
                <h2>5. Formation and Evolution</h2>
                <p>Planets form from the protoplanetary disk of gas and dust surrounding a young star. Over time, particles collide and coalesce to form planetesimals, which then accrete to form planets.</p>
                <ul>
                    <li><strong>Planetary Differentiation</strong>: During formation, heavier elements sink towards the center, forming a core, while lighter materials form the mantle and crust.</li>
                </ul>
                <h2>6. Habitability</h2>
                <p>The potential for a planet to support life depends on various factors including:</p>
                <ul>
                    <li><strong>Location in the Habitable Zone</strong>: The region around a star where conditions might allow liquid water to exist.</li>
                    <li><strong>Atmospheric Conditions</strong>: A stable atmosphere that can regulate temperature and protect against harmful radiation.</li>
                </ul>
            `;
const solarSystemOverview = `
<h2>The Solar System</h2>
            <p>The Solar System is a complex and dynamic collection of celestial bodies bound together by gravity. It consists of the Sun, eight planets, their moons, dwarf planets, asteroids, comets, and meteoroids. Here is an overview of the main components of the Solar System:</p>
            
            <h3>1. The Sun</h3>
            <p><strong>Description:</strong> The Sun is a star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, radiating energy in the form of light and heat.</p>
            <p><strong>Importance:</strong> The Sun's gravitational force keeps the Solar System intact, and its energy supports life on Earth and drives the weather and climate.</p>
            
            <h3>2. The Planets</h3>
            <p>The Solar System has eight recognized planets, which are divided into two categories:</p>
            
            <h4>Terrestrial Planets (Rocky Planets):</h4>
            <ul>
                <li><strong>Mercury:</strong> Smallest planet. Closest to the Sun. Extreme temperatures with no atmosphere.</li>
                <li><strong>Venus:</strong> Similar size and structure to Earth. Thick, toxic atmosphere causing extreme greenhouse effect. Hottest planet.</li>
                <li><strong>Earth:</strong> Only planet known to support life. Has water in all three states: solid, liquid, gas. Atmosphere rich in nitrogen and oxygen.</li>
                <li><strong>Mars:</strong> Known as the Red Planet due to iron oxide on its surface. Has the largest volcano and canyon in the Solar System.</li>
            </ul>
            
            <h4>Gas Giants:</h4>
            <ul>
                <li><strong>Jupiter:</strong> Largest planet. Has a Great Red Spot, a giant storm. Many moons, including Ganymede, the largest moon in the Solar System.</li>
                <li><strong>Saturn:</strong> Known for its prominent ring system. Second-largest planet. Numerous moons, including Titan, which has a thick atmosphere.</li>
            </ul>
            
            <h4>Ice Giants:</h4>
            <ul>
                <li><strong>Uranus:</strong> Has a blue-green color due to methane in the atmosphere. Rotates on its side, possibly due to a collision.</li>
                <li><strong>Neptune:</strong> Farthest planet from the Sun. Known for its intense blue color and strong winds.</li>
            </ul>
            
            <h3>3. Dwarf Planets</h3>
            <ul>
                <li><strong>Pluto:</strong> Once considered the ninth planet, now classified as a dwarf planet.</li>
                <li><strong>Eris, Haumea, Makemake, and Ceres:</strong> Other recognized dwarf planets in the Solar System.</li>
            </ul>
            
            <h3>4. Moons</h3>
            <p><strong>Description:</strong> Natural satellites that orbit planets. Vary greatly in size and composition.</p>
            <p><strong>Examples:</strong> Earth's Moon, Jupiter's Ganymede, and Saturn's Titan.</p>
            
            <h3>5. Asteroids</h3>
            <p><strong>Location:</strong> Mostly found in the asteroid belt between Mars and Jupiter.</p>
            <p><strong>Description:</strong> Small rocky bodies that orbit the Sun. Vary in size from tiny pebbles to hundreds of kilometers in diameter.</p>
            
            <h3>6. Comets</h3>
            <p><strong>Description:</strong> Composed of ice, dust, and rocky material. When they approach the Sun, they heat up and display a glowing coma and a tail.</p>
            <p><strong>Origin:</strong> Most come from the Kuiper Belt or the Oort Cloud.</p>
            
            <h3>7. Meteoroids, Meteors, and Meteorites</h3>
            <ul>
                <li><strong>Meteoroids:</strong> Small particles from comets or asteroids.</li>
                <li><strong>Meteors:</strong> When meteoroids enter Earth's atmosphere and burn up, creating a streak of light.</li>
                <li><strong>Meteorites:</strong> Meteoroids that survive the atmosphere and reach Earth's surface.</li>
            </ul>
            
            <h3>8. Formation and Evolution</h3>
            <p><strong>Nebular Hypothesis:</strong> The Solar System formed about 4.6 billion years ago from a giant molecular cloud. Gravity caused the cloud to collapse, forming a spinning disk with the Sun at the center.</p>
            <p><strong>Planetary Formation:</strong> Planets formed from the remaining material through the process of accretion.</p>
            
            <h3>9. Exploration</h3>
            <p>Numerous space missions have been sent to explore the Solar System, including:</p>
            <ul>
                <li><strong>Voyager 1 and 2:</strong> Provided detailed images and data on the outer planets.</li>
                <li><strong>Mars rovers (e.g., Curiosity, Perseverance):</strong> Exploring the Martian surface.</li>
                <li><strong>New Horizons:</strong> Conducted a flyby of Pluto and is exploring the Kuiper Belt.</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>The Solar System is a fascinating and diverse system that continues to captivate scientists and astronomers. Its study helps us understand the origins of our planet, the potential for life elsewhere, and the fundamental processes governing planetary systems.</p>
        `;
const galaxy=`
        <section>
            <h2>Definition and Classification</h2>
            <p>A galaxy is a massive, gravitationally bound system consisting of stars, stellar remnants, interstellar gas, dust, dark matter, and more. They are the fundamental building blocks of the universe. Galaxies are generally classified into three main types based on their visual morphology:</p>
            <ul>
                <li><strong>Spiral Galaxies:</strong> These have a flat, rotating disk containing stars, gas, and dust, along with a central concentration of stars known as the bulge. The Milky Way is a well-known example of a spiral galaxy. Spiral galaxies can be further classified into normal spirals (S) and barred spirals (SB), depending on whether they have a central bar structure.</li>
                <li><strong>Elliptical Galaxies:</strong> These have an elongated, elliptical shape and lack the distinct structure seen in spiral galaxies. They contain older, low-metallicity stars and have less interstellar gas and dust. Elliptical galaxies are classified from E0 (nearly spherical) to E7 (more elongated).</li>
                <li><strong>Irregular Galaxies:</strong> These galaxies do not have a defined shape and often appear chaotic. They typically have more active star formation and are rich in gas and dust. The Large and Small Magellanic Clouds are examples of irregular galaxies.</li>
            </ul>
        </section>
        <section>
            <h2>Structure and Components</h2>
            <ul>
                <li><strong>Stars:</strong> The primary visible component of galaxies. They can range from small, cool red dwarfs to massive, hot blue giants.</li>
                <li><strong>Stellar Remnants:</strong> Includes white dwarfs, neutron stars, and black holes.</li>
                <li><strong>Interstellar Medium:</strong> Comprises gas (mostly hydrogen and helium) and dust that fills the space between stars.</li>
                <li><strong>Dark Matter:</strong> An invisible component that does not emit light but exerts gravitational forces, influencing the galaxy's structure and dynamics.</li>
            </ul>
        </section>
        <section>
            <h2>Formation and Evolution</h2>
            <p>Galaxies formed from the primordial density fluctuations in the early universe. They evolve through processes such as mergers with other galaxies, star formation, and supernova explosions. Over billions of years, galaxies can undergo significant changes in structure and composition.</p>
        </section>
        <section>
            <h2>Galaxy Groups and Clusters</h2>
            <p>Galaxies are not isolated; they exist in groups and clusters. Groups typically contain a few to several dozen galaxies, while clusters can hold hundreds or even thousands. These large structures play a crucial role in galaxy evolution and dynamics.</p>
        </section>
        <section>
            <h2>Observational Techniques</h2>
            <p>Astronomers study galaxies using various methods, including optical telescopes, radio telescopes, and space-based observatories. Observations across different wavelengths (e.g., X-ray, infrared) provide insights into various aspects of galaxies, such as their formation history, structure, and the presence of dark matter.</p>
        </section>
        <section>
            <h2>The Role in the Universe</h2>
            <p>Galaxies are essential for understanding the universe's large-scale structure. They are the sites of star formation, chemical enrichment, and the formation of planetary systems. The study of galaxies helps us comprehend the cosmos's past, present, and future.</p>
        </section>
    `;
    const uni=`
                <section>
                    <h2>Origin and Evolution</h2>
                    <p><strong>1. Big Bang Theory:</strong> The most widely accepted explanation for the origin of the universe is the Big Bang Theory. It posits that the universe began as an extremely hot and dense point around 13.8 billion years ago and has been expanding ever since.</p>
                    <p><strong>2. Expansion:</strong> Observations, such as the redshift of distant galaxies, show that the universe is expanding. This means that galaxies are moving away from each other, and the universe is getting larger over time.</p>
                    <p><strong>3. Cosmic Microwave Background (CMB):</strong> The CMB is the afterglow of the Big Bang, providing a snapshot of the infant universe. It is a faint radiation that fills the universe and can be observed in all directions.</p>
                </section>
                <section>
                    <h2>Structure and Composition</h2>
                    <p><strong>1. Galaxies and Stars:</strong> The universe contains billions of galaxies, each with billions of stars. Galaxies come in various shapes, such as spiral, elliptical, and irregular. Our solar system is located in the Milky Way galaxy.</p>
                    <p><strong>2. Dark Matter and Dark Energy:</strong> Observations suggest that visible matter makes up only a small fraction of the universe's total mass-energy content. Dark matter, which does not emit or interact with electromagnetic radiation, and dark energy, which is thought to be responsible for the accelerated expansion of the universe, are believed to constitute the majority of the universe's content.</p>
                    <p><strong>3. Cosmic Structures:</strong> The universe has a vast hierarchical structure, from stars and planetary systems to galaxies, clusters of galaxies, and superclusters. These structures form a web-like pattern called the "cosmic web."</p>
                </section>
                <section>
                    <h2>Theoretical Models and Future Outlook</h2>
                    <p><strong>1. Cosmology:</strong> The study of the universe's origin, evolution, and eventual fate is known as cosmology. It involves models and theories such as the Big Bang Theory, Inflation Theory (which explains the rapid expansion after the Big Bang), and the theory of General Relativity (which describes gravity's role in shaping the universe).</p>
                    <p><strong>2. Future Scenarios:</strong> The ultimate fate of the universe is still uncertain. Potential scenarios include continued expansion, a Big Freeze (where the universe reaches a state of thermodynamic equilibrium), or a Big Crunch (where the universe might eventually collapse back on itself).</p>
                </section>
                <section>
                    <h2>Key Concepts</h2>
                    <p><strong>1. Space-Time:</strong> The universe is often described in terms of space-time, a four-dimensional continuum where space and time are interconnected. Objects with mass and energy can warp this space-time, creating what we perceive as gravity.</p>
                    <p><strong>2. Observable Universe:</strong> The observable universe is the part we can see from Earth, extending about 46 billion light-years in every direction. Beyond this, there may be more universe that is not observable due to the finite speed of light and the age of the universe.</p>
                    <p><strong>3. Multiverse Theory:</strong> Some theories suggest the existence of multiple, possibly infinite, universes beyond our own, though this remains speculative and unproven.</p>
                </section>
            `;
        // const ig=document.getElementsByClassName('icon_img');
function changingdisplay(k){
    if(k==='Planets')
    {
        p.innerHTML=note;
        
    }else if(k==='solar')
    {
        // p.style.backgroundColor="black";     
        p.innerHTML=solarSystemOverview;
    }else if(k==='galaxy')
    {
        p.innerHTML=galaxy;
    }else if(k==='universe')
    {
        p.innerHTML=uni;
    }
    const img = document.querySelector('.parts'); // Use querySelector to select the image element
    img.src = 'spaceparts/' + k + '.jpg';
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

function openPopup() {
    document.getElementById('loginPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('loginPopup').style.display = 'none';
}

document.querySelector('.login').addEventListener('click', openPopup);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulate form submission
    console.log('Username:', username);
    console.log('Password:', password);
    
    // Hide popup after form submission
    closePopup();
    
    // Here you would send the data to your server
    // For example, using fetch API:
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
