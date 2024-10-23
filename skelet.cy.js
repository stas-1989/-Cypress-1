describe('проверка авторизации', function () {
    
    it('верный пароль и верный логин', function () {
    cy.visit('https://login.qa.studio/'); //зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восс. пароль
    
    cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
    cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
    cy.get('#loginButton').click(); //нажал войти
    
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю что после автриз вижу текст
    cy.get('#messageHeader').should('be.visible'); //текст виден пользователюы
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверяю что крести виден пользователю
})

it('верный пароль и неверный логин', function () {
    cy.visit('https://login.qa.studio/'); //зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восс. пароль
    
    cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
    cy.get('#pass').type('iLoveqastudio7'); //ввели верный пароль
    cy.get('#loginButton').click(); //нажал войти
    
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю что после автриз вижу текст
    cy.get('#messageHeader').should('be.visible'); //текст виден пользователюы
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверяю что крести виден пользователю
})

it('проверка что в логине есть @', function () {
    cy.visit('https://login.qa.studio/'); //зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восс. пароль
    
    cy.get('#mail').type('germandolnikov.ru'); //ввели логин без @
    cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
    cy.get('#loginButton').click(); //нажал войти
    
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю что после автриз вижу текст
    cy.get('#messageHeader').should('be.visible'); //текст виден пользователюы
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверяю что крести виден пользователю
})

it('проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); //зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восс. пароль
    
    
    cy.get('#forgotEmailButton').click(); //нажимаю восстановить пароль
    cy.get('#mailForgot').type('german@dolnikov.ru');//ввел почту для восстановления
    cy.get('#restoreEmailButton').click();//нажать отпавить код

    
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверяю на совпадение текст
    cy.get('#messageHeader').should('be.visible'); //текст виден пользователюы
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверяю что крести виден пользователю
})

})  




 //+найти поле логин и ввести верный логин
 //+найти поле ввести и ввести правильный логин
 //+найти кнопку войти и нажать на нее
 //+проверить, что аворизация прошла успешно
