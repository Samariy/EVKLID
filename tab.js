document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn__tab').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.section-how-content').forEach(function(tabContent) {
                tabContent.classList.remove('section-how-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('section-how-content-active')
        })
    })
})

    