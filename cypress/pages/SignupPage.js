class SignupPage {
    go() {
        cy.visit('/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(deliver) {
        //INSERINDO AS INFORMAÇÕES NOS CAMPOS

        //INFORMAÇAÇÃO PESSOAL
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        // INSERINDO O ENDEREÇO
        cy.get('input[name="postalcode"]').type('62322240')
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.adress.number)
        cy.get('input[name="address-details"]').type(deliver.adress.details)

        //CLICANDO NA OPÇÃO MOTO
        cy.get('img[alt="Moto"]').click()

        //VEREIFIÇANDO A BUSCA DO CEP
        cy.get('input[name="address"]').should('have.value', deliver.adress.street)
        cy.get('input[name="district"]').should('have.value', deliver.adress.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.adress.city_state)

        //A função "attachFile" é uma função exportada do arquivo "cypress-file-upload": "^5.0.8"
        //Na parte do codigo " '/images/' + " foi feita uma concatenação com a pasta'images' da pasta 'fixtures'
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

    }

    submit() {

        //CLICANDO NO ULTIMO BUTTON DA PAGINA
        cy.get('button[type]').click()

    }
    sucess_registration() {
        cy.get('#swal2-title').should('have.text', 'Aí Sim...')
    }
    alertMessageCpf() {
        cy.get('span[class="alert-error"]').should('have.text', 'Oops! CPF inválido')
    }
    alertMessageEmail() {
        cy.get('span[class="alert-error"]').should('have.text', 'Oops! Email com formato inválido.')
    }

    alertMesssageName() {
        cy.contains('.alert-error', 'É necessário informar o nome').should('be.visible')
    }
    alertMessageCpfAll() {
        cy.contains('.alert-error', 'É necessário informar o CPF',).should('be.visible')
    }
    alertMessageEmailAll() {
        cy.contains('.alert-error', 'É necessário informar o email').should('be.visible')
    }
    alertMesssagePostalCode() {
        cy.contains('.alert-error', 'É necessário informar o CEP').should('be.visible')
    }
    alertMesssageNumber() {
        cy.contains('.alert-error', 'É necessário informar o número do endereço').should('be.visible')
    }
    alertMesssageMethodDeliver() {
        cy.contains('.alert-error', 'Selecione o método de entrega').should('be.visible')
    }
    alertMesssageCnh() {
        cy.contains('.alert-error', 'Adicione uma foto da sua CNH').should('be.visible')
    }


}
export default SignupPage;