/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            ANIMALS: 'Animals',
            FILMS: 'Films',
            FOOD: 'Food',
            SKILL_NAME: '%s Facts',
            GET_FACT_MESSAGE: 'Here\'s your fact : ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s, Here\'s your fact : ',
            HELP_MESSAGE: 'You can say tell me a fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            FALLBACK_MESSAGE: 'The Facts skill can\'t help you with that.  It can help you discover facts if you say tell me a fact. What can I help you with?',
            FALLBACK_REPROMPT: 'What can I help you with?',
            ERROR_MESSAGE: 'Sorry, an error occurred.',
            PREFERENCE_ERROR: 'Sorry, I am unable to retrieve your personalized identity.',
            STOP_MESSAGE: 'Goodbye!',
            CONFIRMATION_MESSAGE: 'Ok %s, I have added %s as a favorite topic',
            ANIMALS_FACTS:
                [
                    'The blue whale is probably the largest animal that has ever existed on Earth, and can reach 30 meters in length and weigh 180 tons.',
                    'The smallest fish in the world measures 8 millimeters.',
                    'Sea fish can suffer from thirst.',
                    'There are fish in the depths that generate their own light.',
                    'The hedgehogs see everything yellow.'
                ],
            FILMS_FACTS:
                [
                    'In Now You See Me, Isla Fisher almost drowned in front of the entire cast and crew while filming a scene with an underwater magic trick.',
                    'Julie Andrews was actually flung into the mud every single time the helicopter passed her while filming that iconic hilltop scene in The Sound of Music.',
                    ' In Joker, Joaquin Phoenix lost 52 pounds to play the role of Arthur Fleck.',
                    'In La La Land, writer-director Damien Chazelle actually incorporated Ryan Gosling worst audition experience into the movie.',
                    'Lon Chaney, who played the title characters in The Hunchback of Notre Dame and The Phantom of the Opera, did his own makeup for the roles.'
                ],
            FOOD_FACTS:
                [
                    'Carrots actually come in many different colors.',
                    'Dynamite is technically made out of peanuts.',
                    'German chocolate cake did not originate in Germany.',
                    'A dentist is responsible for the creation of cotton candy',
                    'There is only one Froot Loop flavor'
                ]
        }
    },
    es: {
        translation: {
            ANIMALS: 'Animales',
            FILMS: 'Películas',    
            FOOD: 'Comida',
            SKILL_NAME: '%s Curiosidades',
            GET_FACT_MESSAGE: 'Aquí está tu curiosidad: ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Vale %s, Aquí está tu curiosidad: ',
            HELP_MESSAGE: 'Puedes decir dime una curiosidad del espacio o puedes decir salir... Cómo te puedo ayudar?',
            HELP_REPROMPT: 'Como te puedo ayudar?',
            FALLBACK_MESSAGE: 'La habilidad de Hechos no puede ayudarte con eso. Puede ayudarte a descubrir hechos si dices cuéntame un hecho. ¿En qué te puedo ayudar?',
            FALLBACK_REPROMPT: 'Como te puedo ayudar?',
            ERROR_MESSAGE: 'Lo sentimos, se ha producido un error.',
            PREFERENCE_ERROR: 'Lo siento, no puedo recuperar su identidad personalizada',
            STOP_MESSAGE: 'Adiós!',
            CONFIRMATION_MESSAGE: 'Vale %s, he añadido %s como curiosidad favorita.',
            ANIMALS_FACTS:
                [
                    'La ballena azul es probablemente el animal de mayor tamaño que ha existido en la Tierra, y que puede alcanzar los 30 metros de longitud y llegar a pesar 180 toneladas.',
                    'El pez más pequeño del mundo mide 8 milímetros.',
                    'Los peces de mar pueden padecer de sed.',
                    'Hay peces en las profundidades que generan su propia luz.',
                    'Los erizos ven todo de color amarillo.'
                ],
            FILMS_FACTS:
                [
                    'En Now You See Me, Isla Fisher casi se ahoga frente a todo el elenco y el equipo mientras filmaba una escena con un truco de magia bajo el agua.',
                    'Julie Andrews fue arrojada al lodo cada vez que el helicóptero la pasó mientras filmaba esa icónica escena en la cima de una colina en The Sound of Music.',
                    'En Joker, Joaquin Phoenix perdió 52 libras para interpretar el papel de Arthur Fleck.',
                    'En La La Land, el escritor y director Damien Chazelle incorporó la peor experiencia de audición de Ryan Gosling en la película',
                    'Lon Chaney, que interpretó a los personajes principales en El jorobado de Notre Dame y El fantasma de la ópera, hizo su propio maquillaje para los papeles'
                ],
            FOOD_FACTS:
                [
                    'Las zanahorias en realidad vienen en muchos colores diferentes.',
                    'La dinamita está técnicamente hecha de cacahuetes.',
                    'El pastel de chocolate alemán no se originó en Alemania.',
                    'Un dentista es el responsable de la creación del algodón de azúcar',
                    'Solo hay un sabor de Froot Loop'
                ]    
        }
    }
}