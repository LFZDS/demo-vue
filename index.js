// m - v
var obj = {}
var txtTest = document.querySelector('input')
var divTest = document.querySelector('div')
Object.defineProperty(obj, 'key1', {
    set: (newValue) => {
        divTest.innerHTML = newValue
        txtTest.value = newValue
        return newValue
    },
    get: () => {

    }
})
// v -m

txtTest.addEventListener('input',()=>{
    obj.key1 = txtTest.value
})
