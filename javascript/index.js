const botao01 = document.querySelector('.botao01')

        const fechar01 = document.querySelector('.fechar01')

        botao01.addEventListener('click', clicar01)

        fechar01.addEventListener('click', clicar02)

        function clicar01() {
            let elemento = document.querySelector('.conteudo03')
            let display =  window.getComputedStyle(elemento, null).getPropertyValue('display')

            console.log('Você abriu!!') //temp

            if(display === 'none') {
                elemento.style.display = 'inline-block'
            }
        }

        function clicar02() {
            let elemento = document.querySelector('.conteudo03')
            let display = window.getComputedStyle(elemento, null).getPropertyValue('display')
            
            console.log('Você fechou!!') //temp

            if(display === 'block') {
                elemento.style.display = 'none'
            }
        }

        const botao02 = document.querySelector('.buttontest')

        const inputUser = document.querySelector('.input01')

        botao02.addEventListener('click', clicar03)

        let click00 = false

        let valor01 = " "

        function getVal() {
            const inputValue = document.querySelector('.input01').value

            valor01 = inputValue
        }

        function clicar03() {
            click00 = true

            if (click00 == true) {
                valor01 = valor01.replace(/ /g, "+")

                location.assign(`https://portal.ufac.br/biblioteca/pesquisa/resultado.action?keyword=${valor01}`)
            }
        }