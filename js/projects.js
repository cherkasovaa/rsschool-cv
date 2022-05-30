import { object } from './objects.js';

const createTechnologiesList = (technologies) => {
  const list = document.createElement('ul');
  list.className = 'technologies';
  
  technologies.forEach(el=> {
    const item = document.createElement('li');
    item.className = "technologies__item";

    item.textContent = el;
    list.appendChild(item);
  });

  return list.innerHTML;
}

const createProjectBlockTemplate = (parent, obj) => {
  const {title, link, path, description, technologies} = obj;
  const wrapper = document.createElement('div');
  wrapper.className = 'project';

  const node = `
        <h5 class="project__title">${title}</h5>
        <div class="project__wrapper">
          <a class="project__link" href="${link}" target="_blank" rel="noopener noreferrer">
            <img class="project__screen" src="./images/${path}" alt=${description}/>
          </a>
          <div class="project__info">
            <h3 class="project__technologies">Using technologies:</h3>
            ${createTechnologiesList(technologies)}
          </div>
        </div>
    `;

  wrapper.innerHTML = node;
  parent.append(wrapper);
};

const renderProjects = (object) => {
for(const key in object){
    const block = document.querySelector(`.${key}`);

    object[key].forEach((el) => createProjectBlockTemplate(block, el));
  }
}

renderProjects(object);