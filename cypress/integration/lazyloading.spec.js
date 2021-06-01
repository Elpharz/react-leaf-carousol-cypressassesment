describe('Integration tests for React Leaf Carousel testing lazy loading images', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    // we can wait for the <img> element to appear
    // but the image has not been loaded yet.
    context('Testing lazy load image', function () {

        it('TC001 waits for the image to load on view port 200', () => {
            cy.viewport(Cypress.env('testViewportWidth'), Cypress.env('testViewportHeight'))
            cy.get('[alt="Image1"]').should('be.visible')
            cy.get('[alt="Image2"]').should('not.be.visible')



            // Let's wait for the actual image to load
           // cy.waitForResource('kpl-1.jpg')

        })
        it('TC002 waits for the image to load on view port 200', () => {
            cy.viewport(Cypress.env('mobileViewportwidth'), Cypress.env('testViewportHeight'))
            cy.get('[alt="image2"]').should('be.visible').and(($img) => {
                    // "naturalWidth" and "naturalHeight" are set when the image loads
                    expect(
                        $img[0].naturalWidth, 'image has natural width').to.be.greaterThan(0)
            })
           // cy.get('[alt="Image1"]').should('be.visible')
           // cy.get('[alt="Image2"]').should('not.be.visible')



            // Let's wait for the actual image to load
            // cy.waitForResource('kpl-1.jpg')

        })
    })
})
