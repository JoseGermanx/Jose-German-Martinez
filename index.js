const prompt = require('prompt-sync')();
prompt('Bienvenido a la aplicación escrita en javascript para crear tu tarjeta de presentación, presiona Enter para iniciar y sigue los pasos....')
const name = prompt('Indícame tu nombre: ');
const lastName = prompt('Indícame tu apellido: ');
const profession = prompt('Si tienes alguna profesión, indícamela por favor: ');
const tech1 = prompt('Ingresa una tecnología con la que trabajes: ');
const tech2 = prompt('Ingresa otra tecnología con la que trabajes: ');

const tecnologias = [];
tecnologias.push(tech1);
tecnologias.push(tech2);

class IntroduceMySelf {
  constructor(name, lastName, profession, technologies) {
    this.name = name;
    this.lastName = lastName;
    this.profession = profession;
    this.technologies = technologies;
  }

  crearPresentacion(){
    return {
      Nombre: this.name,
      Apellido: this.lastName,
      Profesion: this.profession,
      Tecnologias: this.technologies
    }
  }

  mensajeSuperior(){
    console.log("######### Tarjeta de presentación ##########")
    console.log("############################################")
  }
  mensajeInferior(){
    console.log("--------------------------------------------")
    console.log("################ Gracias ###################")
  }
  
}

const jG = new IntroduceMySelf(name, lastName, profession, tecnologias);

jG.mensajeSuperior();
console.log(jG.crearPresentacion())
jG.mensajeInferior();
