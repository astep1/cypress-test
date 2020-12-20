
//базовая структура теста
describe('Our first suite', () => {

    it('first tesst', () => {

    })

    it('second tesst', () => {
        
    })

    it('third tesst', () => {
        
    })
});

//второй сьют в этом же тестовом файле:
describe('Our second suite', () => {

    it('first tesst', () => {

    })

    it('second tesst', () => {
        
    })

    it('third tesst', () => {
        
    })
});

//Вложенная структура:
describe('Nested structure', () => {

    describe('nested test', () => {

    })


    it('first tesst', () => {

    })

    it('second tesst', () => {
        
    })

    it('third tesst', () => {
        
    })
});


//beforeEach
describe('Our second suite', () => {
    beforeEach('code before every test', () => {
        //some repetitive code например логин
        //дабы не писать ф-цию логина перед каждым тестом
        //и был создан beforeEach()
    })


    it('1 tesst', () => {

    })

    it('2 tesst', () => {

    })

    it('3 tesst', () => {

    })
   
});