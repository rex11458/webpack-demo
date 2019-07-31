function getComponent() {
    return import('lodash').then(({
        default: _
    }) => {
        var element = document.createElement('pre')
        element.innerHTML = _.join(['Hello"," webpack!'], ' ')
        return element
    }).catch(error => console.log(error))
}

getComponent().then(component => {
    document.body.appendChild(component)
})