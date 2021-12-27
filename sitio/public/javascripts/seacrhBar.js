
const $$ = id => document.getElementById(id);

$$('search').addEventListener('click', e => {
    
    e.preventDefault();
    $$('search').elements[0].value!='' && $$('search').submit()
})