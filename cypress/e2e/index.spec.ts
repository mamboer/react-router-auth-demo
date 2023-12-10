const IMAGE_URL = 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6'
const AUTHOR_URL = 'https://unsplash.com/@cenali'

describe('Basic flow', () => {
	beforeEach(() => {
		cy.viewport('macbook-13')
	})

	it('Should render the fruit gallery correctly', () => {
		cy.visit('/')

		cy.findAllByTestId('FruitCard').should('have.length', 6)
		cy.findAllByTestId('FruitCardImage')
			.first()
			.should('have.attr', 'src')
			.and('contain', IMAGE_URL)
		cy.findAllByTestId('FruitImageAuthor')
			.first()
			.should('have.text', 'Matheus Cenali')
			.and('have.attr', 'href', AUTHOR_URL)
			.click()
		cy.findAllByTestId('FruitCardName').first().should('have.text', 'Apple')
	})

	it('Should navigate to the details page on click', () => {
		cy.visit('/')
		cy.findAllByTestId('FruitCardName').first().click()
		cy.location('pathname').should('eq', `/apple`)
	})
})
