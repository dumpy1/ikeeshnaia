const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const btnClose = document.querySelector('.btn-close');
const catalogList = document.querySelector('.catalog-list');
const subCatalog = document.querySelector('.subcatalog');
const subCatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');

// overlay

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);


function openMenu (event) {
    catalog.classList.add('open');
    overlay.classList.add('active')
}
function closeMenu (event) {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu();
}

function openSubMenu  (event) {
event.preventDefault();
const target = event.target
const itemList = target.closest('.catalog-list__item');
if (target) {
    subCatalogHeader.innerHTML = itemList.innerHTML;
    subCatalog.classList.add('subopen');
}
};

const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
}

btnBurger.addEventListener( "click", openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        closeMenu();
        
    }
})

catalogList.addEventListener('click' , openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);

