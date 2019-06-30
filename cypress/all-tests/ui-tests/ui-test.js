/// <reference types="Cypress" />
import SearchResultsPage from "../../page-objects/searchResultsPage";
import AccessoriesPage from "../../page-objects/accessoriesPage";

describe('Some test', () => {
    beforeEach(() => {
      cy.fixture('product').then(data => {
        cy.wrap(data).as('productData');
      });
    })
  
    it('Positive: Search', () => {
      cy.get('@productData').then( (productData) => {
        cy.log("GIVEN User is at Accessories Page");
        AccessoriesPage.open();
    
        cy.log("WHEN User performs search product by name");
        AccessoriesPage.performSearh(productData.name);
    
        cy.log("THEN User expects ...");
        SearchResultsPage.getProductByDocId(productData.url)
          .should('exist');
      });
    });
})