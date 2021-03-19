const panels = document.querySelectorAll('.panel')

// Adding event listerner to update the "active" class.
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
    })
})

// Helper function to remove 'active' classes.
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}