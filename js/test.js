//  Definimos target, que é o texto alvo -->
var target = "11a22b33c";

//  Podemos criar a Regex utilizando seu contrutor -->
//  Nesse caso é preciso escapar cada \ para serem interpretadas -->
var exp = new RegExp('(\\d\\d)(\\w)', 'g');

//  Definição em forma literal, mais simples e menos verbosa -->
exp = /(\d\d)(\w)/g;

//  Expressão de teste. Ela retornará true apenas se o alvo seguir o padrão da expressão. -->
exp.test(target);

//  Obtem como resultado as partes do alvo, que atendem à nossa expressão regular -->
exp.exec(target);

// Exemplo trocar todos os hífens por uma /
// string alvo
var anoMesDia = '2007-12-31';

// definiçao da expressao regular
var exp = /-/g

// metodo replace que aceita uma expressao regular
// substitui os valores que correspondem a regex pelo valor passado
anoMesDia = anoMesDia.replace(exp, '/');

// Exemplo arquivo CSV sem separadores padronizados
// string alvo
var arquivo = '100,200-150,200;20';

// definicao da expressao regular
var exp = /[,;-]/;

// a funcao split tambem aceita uma regex como parametro
// Nela, podemos passar um separador que ele se encarregará de 
// criar um array com cada item considerando o separador utilizado
var valores = arquivo.split(exp);

// Resultado ["100", "200", "150", "200", "20"]

// Precisamos extrair essas string num array, ou seja, 
// uma lista de código para que o desenvolvedor possa verificar se 
// cada um desses códigos existe no sistema. 
var codigos = 'A121B12112C12212F12G01';

// definicao da expressao regular
var exp = /[A-Za-z]\d+/g

// Toda string em JavaScript possui o método match. 
// Ele aceita uma expressão regular e retorna em um array todas 
// as partes do alvo que atendem a expressão regular.
var codigosExtraidos = codigos.match(exp);

// resultado: ["A121", "B12112", "C12212", "F12", "G01"]