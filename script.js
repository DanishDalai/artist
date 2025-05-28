// About Section
const aboutSection = document.createElement('section');
aboutSection.id = 'about';
aboutSection.innerHTML = `
  <h2>About Me</h2>
  <p>I am a passionate artist...</p>
`;
document.getElementById('content').appendChild(aboutSection);

// Portfolio Section
const portfolioSection = document.createElement('section');
portfolioSection.id = 'portfolio';
portfolioSection.innerHTML = `
  <h2>My Portfolio</h2>
  <div class="portfolio-item">
    <img src="images/art1.jpg" alt="Art 1">
    <p>Project 1 Description</p>
  </div>
  <div class="portfolio-item">
    <img src="images/art2.jpg" alt="Art 2">
    <p>Project 2 Description</p>
  </div>
`;
document.getElementById('content').appendChild(portfolioSection);
