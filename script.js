function gerarTab() {
    var val1 = document.getElementById('valor')
    var res = document.getElementById('tab')

    if (val1.value.lenght == 0){
        window.alert('Por gentileza digite um número!')
    } else {
        let n = Number(val1.value)
        let c = 1
        tab.innerHTML = ''
        while (c <=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
            c++
        }

    }


}