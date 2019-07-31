import {
    cube
} from './math'
import printMe from './print.js'
import _ from 'lodash'

function component() {
    _.join([1, 2], ',')
    var element = document.createElement('pre')
    element.innerHTML = ['Hello webpack!', '5 cubed is equal to' + cube(5)].join('\n\n')
    return element
}

document.body.appendChild(element)