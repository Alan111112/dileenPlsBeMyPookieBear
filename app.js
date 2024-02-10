const $btnYes = document.querySelector('.js-yes'),
    $btnNo = document.querySelector('.js-no'),
    $confirm = document.querySelector('.js-confirm'),
    $dialog = document.querySelector('.js-dialog'),
    $body = document.querySelector('body')

    let counter = 0

    $btnYes.addEventListener('mouseover', (e) =>{
        e.target.innerHTML = 'YES IM YOUR LITTLE POOKIE GIRL'
    })

    $btnYes.addEventListener('click', () => {
        $body.classList.add('yes')
    })

    $btnNo.addEventListener('mouseover', (e) => {
        const $target = e.target

        $target.style.top = `${Math.random() * 200}px`
        $target.style.right = `${Math.random() * 200}px`
        $target.style.left = `${Math.random() * 200}px`
        $target.style.down = `${Math.random() * 200}px`


        if (counter >= 2) {
            $target.innerHTML = 'HAHAHHAHAHA YOU CANT CATCH ME'
        }
        if (counter >= 6) {
            $target.innerHTML = 'are you still tryinggg'
        }
        if (counter >= 9) {
            $target.innerHTML = 'you have no choice HAHAHAHHHA'
        }

        counter += 1
    })