
Cypress._.times(3,function(){
    it('teste a aba privacidade independente', function(){

        cy.visit('./src/privacy.html')

        cy.contains('Talking About Testing')
})
})