/**
 * all texts in all languages
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

export const getText = (text: string) => {
    switch(text){
        case 'Welcome Title(ENG)':
            return "I'm Web Developer Pedro Foltram"
            
        case 'Welcome Title(PT-BR)':
            return "Pedro Foltram Desenvolvedor Web"
        
        case 'Welcome Text(ENG)':
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctusnec ullamcorper mattis, pulvinar dapibus leop llamcorper, lorem ipsum."
        
        case 'Welcome Text(PT-BR)':
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctusnec ullamcorper mattis, pulvinar dapibus leop llamcorper, lorem ipsum."
        
        case 'About Title(PT-BR)':
            return 'Sobre Mim'

        case 'About Title(ENG)':
            return 'About Me'
    }
}