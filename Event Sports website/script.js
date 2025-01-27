// Toggle sidebar visibility
const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.toggle('active');
    overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
};

// Close sidebar when overlay is clicked
document.querySelector('.overlay').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.remove('active');
    document.querySelector('.overlay').style.display = 'none';
});

// Search functionality
const searchInput = document.querySelector('.search');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const movies = document.querySelectorAll('.movie');
    
    movies.forEach(movie => {
        const title = movie.querySelector('h3').textContent.toLowerCase();
        movie.style.display = title.includes(query) ? 'block' : 'none';
    });
});
