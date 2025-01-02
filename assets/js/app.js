let cl = console.log;

const sideBarToggle = document.getElementById('sideBarToggle');
const sidebar = document.getElementById('sidebar');
const sideBarClose = document.getElementById('sideBarClose');
const backDrop = document.getElementById('backDrop');

const onSidebarToggle = () => {
    sidebar.classList.toggle('show')
    backDrop.classList.toggle('d-none')
}











sideBarToggle.addEventListener('click', onSidebarToggle);
sideBarClose.addEventListener('click', onSidebarToggle);
backDrop.addEventListener('click', onSidebarToggle);




