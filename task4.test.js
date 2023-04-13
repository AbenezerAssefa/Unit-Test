const capitalize = require('./task4')
test('Capitalized string passed', ()=>{
    expect(capitalize('ABENI')).toEqual("ABENI")
})