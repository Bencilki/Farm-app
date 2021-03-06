const {Farm} = require("./index")
const {Wheat, Sugarcane} = require("./crops")
const{Cow, Horse, Pig} = require("./animals")

//test create new farm
test("A new Farm can be created", ()=> {
  const farm = new Farm()
  expect(farm).toBeTruthy()
})
//test farm class can have a name
test('A Farm can have a name', () => {
  const farm = new Farm('TEST_NAME')
  expect(farm.name).toBe('TEST_NAME')
})

//testing Farm classs - adding new crops
test('We can add a crop to our farm', () => {
  const farm = new Farm('TEST_NAME')
  farm.addCrop(new Wheat(100))
})

//testing total income from crops 
//(first is it array or value and then the value is correct or not?
test('The income of an empty farm is 0', () => {
  const farm = new Farm('TEST_NAME')
  expect(farm.calculateIncome()).toBe(0)
})
test('The income of a 100 Wheat + 100 Sugarcane farm is X', () => {
  const farm = new Farm('TEST_NAME')
  farm.addCrop(new Wheat(100))
  farm.addCrop(new Sugarcane(100))
  expect(farm.calculateIncome()).toBeCloseTo(1918.37, 1)
})
//test the adding animals and calculating income from animals
test('Animals can be added to the farm', () => {
  const farm = new Farm()
  farm.addAnimal(new Cow(100))
})

test('Animals will be taken into account for calculateIncome', () => {
  const farm = new Farm()
  farm.addAnimal(new Cow(100))
  expect(farm.calculateIncome()).not.toBe(0)
})

test('The income of a full farm', () => {
  const farm = new Farm('TEST_NAME')
  farm.addCrop(new Wheat(100))
  farm.addCrop(new Sugarcane(100))
  farm.addAnimal(new Cow(100))
  farm.addAnimal(new Horse(10))
  farm.addAnimal(new Pig(5))
  expect(farm.calculateIncome()).toBeCloseTo(2884.4, 1)
})