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
    }
}