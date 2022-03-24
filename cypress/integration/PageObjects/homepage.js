//CSS selectors for homepage
const homepageHeader = "a > .block"; 

class Homepage {
    getHomepage() {
        return cy.visit('https://app.thestorygraph.com/');
    }

    checkOnHomepage() {
        cy.get(homepageHeader).should('be.visible');
    }
}

export default Homepage