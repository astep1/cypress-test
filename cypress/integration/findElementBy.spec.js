/// <reference types="cypress" />

describe('my first demo suite', () => {

    it('first demo test', () => {
        
        cy.visit('/')

        //0) find by Text:
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        /* ПРИМЕР:
        <input _ngcontent-iku-c19="" 
        
        data-cy="imputEmail1" 
        
        fullwidth="" 
        
        id="inputEmail123424234" 
        nbinput="" 
        placeholder="Email" 
        type="email" 
        ng-reflect-full-width="" 
        
        class="input-full-width size-medium shape-rectangle"> 
        */

        //Types of Locators:
        //1) find element by Tag name
        cy.get('input')

        //2) find by ID
        cy.get('#inputEmail1') //но чтобы дать понять сайпресу что это ID а не tag name - ставим # перед именем id

        //3) find by class name
        cy.get('.input-full-width') //для классов - точечка

        //4) find by Attribute Name
        cy.get('[placeholder]') //[имя атрибута] (любой на выбор, нам понравился плейсхолдер)

        //5) find by Attribute with Value
        cy.get('[placeholder="Email"]')

        //6) find by Class Value
        cy.get('[class="input-full-width size-medium shape-rectangle"]') //разница от пункта 3) в том,что тут надо предоставить ВСЕ значения для class

        //Комбинирование поисков элементов:
        //7) find elem by Tag Name and Attribute Value
        cy.get('input[placeholder="Email"]') //просто пишем все слитно,безпробелов

        //Несколько атрибутов:
        //8) find by a few different attributes:
        cy.get('[placeholder="Email"][nbinput]')
        cy.get('[data-cy="imputEmail1"][type="email]') //etc. кол-ство атрибутов неграничено

        //9) by Tag name, attribute with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width') //все слитно,безпробелов. но каждый поиск в своем стиле

        //10) The most recomended way by Cypress:
        cy.get('[data-cy="imputEmail1"]')
    })


    //it.only чтобы запустить только этот тест:
    it('second test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signInButton"]').click()
        cy.contains('Sign in') //найдет только первую кнопку. так работает метод contains

        //чтобы найти вторую:
        cy.contains('[status="warning"]','Sign in') //сначала селектор, потом текст

        //еще один способ. найти уникальный элемент - подняться к родителю - найти его детей:
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('.custom-checkbox')
            .click()


        //эй сайпрес,найди nb-card, который содержит 'Horizontal form' и в пределах этого nb-cart найди веб-элемент с атрибутом type="email
        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')
    })

    it.only('then and wrap methods', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //тесты для Using the Grid form:
        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

        //тесты для Basic form:
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')


        //cypress style:
        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passLabelFirst).to.equal('Password')
        })
    })
})