(function() {

    window.isMobile = window.isMobile || !!(window.matchMedia("(max-width: 48em)").matches)

    document.querySelector('.mobile-menu').addEventListener('click', function(e) {
        if(window.isMobile) {
            const mobileWrapper = e.currentTarget
            const closeIconClasses = mobileWrapper.firstElementChild.classList;
            const openIconClasses = mobileWrapper.lastElementChild.classList;

            if(closeIconClasses.contains('hidden')) closeIconClasses.remove('hidden')
            else closeIconClasses.add('hidden')

            if(openIconClasses.contains('hidden')) openIconClasses.remove('hidden')
            else openIconClasses.add('hidden')

            const mobileMenu = document.querySelector('nav ul')
            if(mobileMenu.classList.contains('open')) mobileMenu.classList.remove('open')
            else mobileMenu.classList.add('open')
        }
    })


    document.querySelectorAll('nav a').forEach(function(element) {
        element.addEventListener('click', function(e) {
            const anchor = e.target.href.split('#').pop();
            if(anchor.indexOf('//') != -1){
                return true;
            }
            e.preventDefault()
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
            document.querySelector('#'+anchor).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
            if(document.querySelector('nav ul.open')) {
                document.querySelector('.mobile-menu').click()
            }
            return false;
        })
    })
})()
