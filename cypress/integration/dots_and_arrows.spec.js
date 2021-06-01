/// <reference types="cypress" />
describe('Integration tests for React Leaf Carousel testing dots and arrows functionality', () => {
    beforeEach(() => {
        cy.visit('/')
    })
context('Testing dots functionality', function() {

    it('TC001- Testing if 3 dots are visible within 1000 viewpoint ', () => {
        cy.get('[data-testid="infinite-carousel-dots"]').find('button').should('have.length', 3)
    })

    it('TC002- Testing if 3 dots are visible within 320 viewpoint ', () => {
        cy.viewport(Cypress.env('mobileViewportWidth'), Cypress.env('testViewportHeight'))
        cy.get('[data-testid="infinite-carousel-dots"]').find('button').should('have.length', 3)
    })

    it('TC003- left most dot-button should be active and first 2 images should be visible', () => {

        cy.get('[data-index="0"]')
            .find('i')
            .should('have.class', 'InfiniteCarouselDotIcon InfiniteCarouselDotActiveIcon')

        cy.get('[alt="Image1"]').should('be.visible')
        cy.get('[alt="Image2"]').should('be.visible')
    })
    it ('TC004- 2nd dot-button should be active and next 2 images should be visible', ()=> {
        cy.get('[data-index="1"]')
            .click()
            .find('i')
            .should('have.class', 'InfiniteCarouselDotIcon InfiniteCarouselDotActiveIcon')

        cy.get('[alt="Image3"]').should('be.visible')
        cy.get('[alt="Image4"]').should('be.visible')
    })
    it ('TC005- right most dot-button should be active and 2 images should be visible including the last image', ()=> {
        cy.get('[data-index="2"]')
            .click()
            .find('i')
            .should('have.class', 'InfiniteCarouselDotIcon InfiniteCarouselDotActiveIcon')
        cy.get('[alt="Image6"]').should('be.visible')
        cy.get('[alt="Image7"]').should('be.visible')
    })
})

context('Testing arrow buttons functionality', function (){

    it('TC006- Testing arrow navigation and correct events trigger', () => {

        cy.get('[alt="Image1"]').should('be.visible')
        cy.get('[alt="Image2"]').should('be.visible')
        cy.get('[name="infinite-carousel-button-next"]').click()
        cy.get('[alt="Image3"]').should('be.visible')
        cy.get('[alt="Image4"]').should('be.visible')
            .wait(300)

        cy.get('[name="infinite-carousel-button-previous"] ').wait(3000).click()
        cy.get('[alt="Image1"]').should('be.visible')
        cy.get('[alt="Image2"]').should('be.visible')
        cy.get('[alt="Image3"]').should('be.visible')
    })
})
})