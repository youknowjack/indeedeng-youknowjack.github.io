(function() {
    window.isMobile = window.isMobile || !!(window.matchMedia("(max-width: 48em)").matches)

    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }

    function carouselInit() {
        window.isMobile = window.matchMedia("(max-width: 48em)").matches;
        if(window.matchMedia("(min-width: 48em)").matches) {
            const carousels = document.querySelectorAll('carousel-wrapper')
            carousels.forEach(function(element) {
                element.style.left = "0vw";
                element.style.width = 'auto';
            });
        }
        else {
            const carousels = document.querySelectorAll('carousel-wrapper')
            carousels.forEach(function(element) {
                element.style.width = element.querySelectorAll('carousel-item').length + '00vw';
            });
        }
    }

    carouselInit();
    window.addEventListener('resize', carouselInit);

    function goBackOneScreen(element) {
        if(element.style.left == false || element.style.left == '0vw') element.style.left = '-200vw';
        else element.style.left = (parseInt(element.style.left || 0) + 100).toString()+'vw'
    }

    function goForwardOneScreen(element) {
        if(element.style.left == '-200vw') element.style.left = '0vw';
        else element.style.left = (parseInt(element.style.left || 0) - 100).toString()+'vw'
    }

    function updateBullet(element) {
        const idx = element.style.left.replace(/0+vw/, '').replace('-', '') || '0'
        element.nextElementSibling.querySelector('.current').classList.remove('current')
        element.nextElementSibling.children[idx].classList.add('current')
    }

    function carouselClick(e) {
        if(!isMobile && e.currentTarget.dataset.type.includes('mobile-only')) return true;
        //Is this a link?
        if(e.target.tagName == "A" || e.target.parentElement.tagName == "A") return true;
        e.preventDefault();
        if(window.orgGoBack){
            goBackOneScreen(e.currentTarget);
            window.goBack = false;
            return true;
        }
        if(window.orgGoForward){
            goForwardOneScreen(e.currentTarget);
            window.orgGoForward = false;
            return true;
        }
        if(e.x < window.innerWidth / 2) goBackOneScreen(e.currentTarget)
        else goForwardOneScreen(e.currentTarget);

        if(e.currentTarget.dataset.type.includes('bullet')) updateBullet(e.currentTarget);
    }

    const carousels = document.querySelectorAll('carousel-wrapper');
    carousels.forEach(function(item) {
        item.style.left = '0vw';
        if(item.childElementCount > 1) {
            item.addEventListener('click', carouselClick);
        }
        if(item.dataset.type.includes('bullet')) {
            const controls = document.createElement('carousel-controls')
            for(var i = 1; i <= item.querySelectorAll('carousel-item').length; i++) {
                const a = document.createElement('a')
                a.addEventListener('click', function(event) {
                    event.preventDefault()
                    const currentIndex = Array.prototype.indexOf.call(event.target.parentElement.children, event.target);

                    event.target.parentElement.querySelector('.current').classList.remove('current')
                    event.target.parentElement.previousElementSibling.style.left = '-'+currentIndex+'00vw'
                    event.target.classList.add('current')
                })
                if(i == 1) a.classList.add('current')
                a.href="javascript:;"
                controls.appendChild(a)
            }
            item.insertAdjacentElement('afterend', controls)
        }
    });
    //Make arrows work for the organizations carousel
    const goBack = document.querySelector('.go-back');
    const goForward = document.querySelector('.go-forward');

    function carouselClickBack(e){
        window.orgGoBack = true;
        document.querySelector('#organizations carousel-wrapper').click()
    }
    goBack.addEventListener('click', carouselClickBack);
    function carouselClickForward(e){
        window.orgGoForward = true;
        document.querySelector('#organizations carousel-wrapper').click()
    }
    goForward.addEventListener('click', carouselClickForward);
})()
