/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {

    beforeEach(function () {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function () {
        cy.get('#firstName').type('Matheus')
        cy.get('#lastName').type('quality assurance')
        cy.get('#email').type('math@email.com')
        cy.get('#open-text-area').type('ajudar com algo teste de texto logo', {delay: 0 })
        cy.get('button[type="submit"').click()
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
})
