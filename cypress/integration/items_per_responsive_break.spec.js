/// <reference types="cypress" />
//Note because of lazy loading being turned on am not able to capture the images that are not on screen and for theat i had to disable them.
describe('Integration tests for React Leaf Carousel number of items per responsive break point', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    context('Testing if correct number of visible images in the given breakpoint', function () {
        it('TC001- it should display only 2 images within 320 mobile mode breakpoint', () => {
            cy.viewport(Cypress.env('mobileViewportWidth'), Cypress.env('testViewportHeight'))


            cy.get('[alt="Image1"]').should('be.visible')
            cy.get('[alt="Image2"]').should('be.visible')
           // cy.get('[alt="Image4"]').should('not.be.visible')
            //cy.get('[alt="Image5"]').should('not.be.visible')
        })

        it('TC02- it should display only 3 images within 720 tablet mode breakpoint', () => {
            cy.viewport(Cypress.env('tabletViewportwidth'), Cypress.env('testViewportHeight'))


            //cy.get('[alt="Image7"]').should('not.be.visible')
            cy.get('[alt="Image1"]').should('be.visible')
            cy.get('[alt="Image2"]').should('be.visible')
            cy.get('[alt="Image3"]').should('be.visible')
            cy.get('[alt="Image4"]').should('not.be.visible')
        })

        it('TC03- it should display only 4 images within 1000 laptop mode breakpoint', () => {
            cy.viewport(Cypress.env('laptopViewportWidth'), Cypress.env('testViewportHeight'))


            cy.get('[alt="Image1"]').should('be.visible')
            cy.get('[alt="Image2"]').should('be.visible')
            cy.get('[alt="Image3"]').should('be.visible')
            cy.get('[alt="Image4"]').should('be.visible')
            cy.get('[alt="Image5"]').should('not.be.visible')
            //cy.get('[alt="Image6"]').should('not.be.visible')
           // cy.get('[alt="Image7"]').should('not.be.visible')
           // cy.get('[alt="Image8"]').should('not.be.visible')
            //cy.get('[alt="Image9"]').should('not.be.visible')
        })
    })
})