
import SignupPage from '../pages/SignupPage'
var signup = new SignupPage
// before(function(){
// cy.log('Tudo aqui é executado uma vez ANTES de TODOS os casos de testes')
//   })
//   beforeEach(function(){
//       cy.log('Tudo aqui é executado sempre ANTES de cada caso de teste')
//   })
//    after(function(){
//        cy.log('Tudo aqui é executado uma unica vez DEPOIS de TODOS os casos de testes')
//    })
//   afterEach(function(){
//       cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste')
//    })

describe('Cadastro', () => {


    beforeEach(function () {
        cy.fixture('deliver').then((massa_de_dados) => {
            this.deliver = massa_de_dados
        })
    })

    it('Cadastro de usuario com sucesso', function () {

        //ENTRANDO NA PAGINA 
        signup.go()
        //INSERINDO AS INFORMAÇÕES NOS CAMPOS & VEREIFIÇANDO A BUSCA DO CEP
        signup.fillForm(this.deliver.personal_information)
        //CLICANDO NO BUTTON FINAL
        signup.submit()
        //FAQZENDO A VERIFICAÇÃO DA MENSAGEM+
        signup.sucess_registration()

    })

    it('CPF incorreto', function () {

        //ENTRANDO NA PAGINA 
        signup.go()
        //INSERINDO AS INFORMAÇÕES NOS CAMPOS & VEREIFIÇANDO A BUSCA DO CEP
        signup.fillForm(this.deliver.cpf_invalid)
        //CLICANDO NO BUTTON FINAL
        signup.submit()
        //FAZENDO A VERIFICAÇÃO DA MENSAGEM
        signup.alertMessageCpf()
    })

    it('Email invalido', function () {

        //ENTRANDO NA PAGINA 
        signup.go()
        //INSERINDO AS INFORMAÇÕES NOS CAMPOS & VEREIFIÇANDO A BUSCA DO CEP
        signup.fillForm(this.deliver.email_invalid)
        //CLICANDO NO BUTTON FINAL
        signup.submit()
        //FAQZENDO A VERIFICAÇÃO DA MENSAGEM
        signup.alertMessageEmail()
    })

    it('Campos obrigatorios', function () {

        //ENTRANDO NA PAGINA 
        signup.go()
        //CLICANDO NO BUTTON FINAL
        signup.submit()
        //FAQZENDO A VERIFICAÇÃO DA MENSAGEM
        signup.alertMesssageName()
        signup.alertMessageCpfAll()
        signup.alertMessageEmailAll()
        signup.alertMesssagePostalCode()
        signup.alertMesssageNumber()
        signup.alertMesssageMethodDeliver()
        signup.alertMesssageCnh()
        

     
    })
})


