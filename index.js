const names = ['Семен', 'Иван', 'Петр', 'Татьяна']
const ages = [18, 27, 74, 34]

const namesWithAges = []
namesWithAges.length = 4

for (let i = 0; i < namesWithAges.length; i++) {
    namesWithAges[i] = names[i] + " "  + ages[i] + " лет/год(а/ов)"
    console.log(namesWithAges[i]);
}