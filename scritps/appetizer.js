const Appetizer =(value) => {
const appetizercontent = document.createElement('div');
  appetizercontent.setAttribute('class', 'container');

  const appetizerH1 = document.createElement("h1")
  appetizerH1.setAttribute('class', 'text-center my-3 pt-5 mb-5');
  appetizerH1.innerHTML = 'Appetizers';

  const appetizerList = document.createElement('ul');
  appetizerList.setAttribute('class', 'appetizerList');

  const appetizerItems = () => {
    const list = document.createElement('li');
    list.setAttribute('class', 'nav-item list-unstyled mx-2');

    const appetizer1 = document.createElement('h1');
    appetizer1.setAttribute('id', 'appetizer1');
    appetizer1.setAttribute('class', 'text-center');
    appetizer1.innerHTML = 'Nachos';
    list.appendChild(appetizer1);
    const appetizerParagraph1 = document.createElement('p');
    appetizerParagraph1.setAttribute('class', 'my-3 pb-3');
    appetizerParagraph1.innerHTML = 'We always have fresh cheeze with the best nacho cips.';
    list.appendChild(appetizerParagraph1);




return appetizerList
};
  appetizercontent.appendChild(appetizerH1);
  appetizercontent.appendChild(appetizerItems());

return appetizercontent
}

export default Appetizer;