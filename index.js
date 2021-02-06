var material = [
    {id:1, price: 650, name: 'Античное Дерево',src: 'img/AnitchnoeTree650.jpeg', description: 'В зависимости от назначения, условий строительства и эксплуатации зданий и сооружений подбираются соответствующие строительные материалы, которые обладают определёнными качествами и защитными свойствами от воздействия на них различной внешней среды. Учитывая эти особенности, любой строительный материал должен обладать определёнными строительно-техническими свойствами.'},
    {id:2, price: 670, name: 'Старый кирпитч',src: 'img/oldStone670.jpeg', description: 'В зависимости от назначения, условий строительства и эксплуатации зданий и сооружений подбираются соответствующие строительные материалы, которые обладают определёнными качествами и защитными свойствами от воздействия на них различной внешней среды. Учитывая эти особенности, любой строительный материал должен обладать определёнными строительно-техническими свойствами.'},
    {id:3, price: 490, name: 'Старый кирпитч (малый)',src: 'img/oldStoneSmall490.jpeg', description: 'В зависимости от назначения, условий строительства и эксплуатации зданий и сооружений подбираются соответствующие строительные материалы, которые обладают определёнными качествами и защитными свойствами от воздействия на них различной внешней среды. Учитывая эти особенности, любой строительный материал должен обладать определёнными строительно-техническими свойствами.'},
    {id:4, price: 750, name: 'Рваный сланец',src: 'img/RvaniSlanec750.jpeg', description: 'В зависимости от назначения, условий строительства и эксплуатации зданий и сооружений подбираются соответствующие строительные материалы, которые обладают определёнными качествами и защитными свойствами от воздействия на них различной внешней среды. Учитывая эти особенности, любой строительный материал должен обладать определёнными строительно-техническими свойствами.'}
]

var toHTML= material.map(value=>`<div>
                                    <div class='material-container' id='container'>
                                        <h1>
                                            ${value.name}
                                        </h1>
                                        <img src="${value.src}" alt="">
                                        <div>

                                            <button id="button" data-show='${value.name}'>
                                                Описание
                                            </button>

                                            <div class="description" id="${value.name}">
                                                ${value.description}
                                                
                                            </div>

                                        </div>
                                        <div>
                                            <h3>Цена: ${value.price} руб/м2</h3>
                                        </div>
                                        <div>
                                            <button id='order' data-order="${value.id}">Заказать</button>
                                        </div>
                                    </div>
                                    <div id='${value.id}' class='modal'>
                                        <div class='modal__title'>
                                            Название товара: ${value.name}
                                        </div>
                                        <div class='input1'>
                                            Ваше имя:<input placeholder="Введите ваше имя"></input>
                                        </div>
                                        <div>
                                            Ваш телефон:<input value='+7'></input>
                                        </div>
                                        <div>
                                            <button id='send'>Отправить</button>
                                            <button id='cancel' data-cancel="${value.id}">Отменить</button>
                                        </div>
                                        
                                    </div>
                                </div>`)

var block = document.getElementById('body')

block.insertAdjacentHTML('beforeend', toHTML)


var btn = document.getElementById('button')



document.addEventListener('click', event=>{
    event.preventDefault()
    var show = document.getElementById(event.target.dataset.show)
    
    $(show).slideToggle(500)

})

document.addEventListener('click',(event)=>{
    var order = document.getElementById(event.target.dataset.order)
    
    $(order).slideToggle(500)
})





document.addEventListener('click', (event)=>{
    var cancel = document.getElementById(event.target.dataset.cancel)
    $(cancel).slideToggle(500)
})


