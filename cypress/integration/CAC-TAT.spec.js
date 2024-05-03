/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function () {

    beforeEach(function () {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it.only('preenche os campos obrigatórios e envia o formulário', function () {
        cy.get('#firstName').type('Matheus')
        cy.get('#lastName').type('quality assurance')
        cy.get('#email').type('math@email.com')
        cy.get('#open-text-area').type('ajudar com algo teste de texto logo', {delay: 0 })
        cy.contains('button','Enviar').click()
        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Matheus')
        cy.get('#lastName').type('quality assurance')
        cy.get('#email').type('math@email,com')
        cy.get('#open-text-area').type('ajudar com algo teste de texto logo', {delay: 0 })
        cy.get('button[type="submit"').click()

        cy.get('.error').should('be.visible')
    })

    it('campo de telefone continua vazio quando preenchido com valor não-numérico', function(){
        cy.get('#phone').type('teste@').should('have.value', '')
    })

    it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('Matheus')
        cy.get('#lastName').type('quality assurance')
        cy.get('#email').type('math@email.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('ajudar com algo teste de texto logo', {delay: 0 })
        cy.get('button[type="submit"').click()

        cy.get('.error').should('be.visible')
    })

    it.only('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName').type('Matheus').should('have.value','Matheus').clear().should('have.value','')
        cy.get('#lastName').type('quality assurance').should('have.value','quality assurance').clear().should('have.value','')
        cy.get('#email').type('math@email.com').should('have.value','math@email.com').clear().should('have.value', '')
        cy.get('#phone').type('5464655').should('have.value','5464655').clear().should('have.value','')
    })

    it.only('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.get('button[type="submit"').click()

        cy.get('.error').should('be.visible')
    })

    it.only('envia o formuário com sucesso usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()
    })
})

