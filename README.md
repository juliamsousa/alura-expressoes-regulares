# alura-expressoes-regulares

- Exemplo: encontrar um CNPJ, por exemplo: 15.123.321/8883-22
- Regex: \d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}

- Exemplo:     126.1.112.34, 128.126.12.244, 192.168.0.34
- Regex: \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3} podemos variar a quantidade de caracteres

- Exemplo: João Fulano,123.456.789-00,21 de Maio de 1993,(21) 3079-9987,Rua do Ouvidor,50,20040-030,Rio de Janeiro
- Regex: \d{5}-\d{3}

- Exemplo: (21) 93216-2345
- Regex: \(\d{2}\)\ \d{5}-\d{4} ou \(\d{2}\) \d{4}-\d{4}

- { numero }: quantifier, quantas vezes o caracter vai repetir
- ( . ): uma literal que significa qualquer tipo de caracter
- ( ? ): define um valor como opcional, pode vir uma ou nenhuma vez. 
- Exemplo Regex CPF com pontos opcionais: \d{1,3}\.?\d{1,3}\.?\d{1,3}\.?\d{1,3}

- São bastante utilizados para manipulação em csv, validação de formulários, entre outros.

## Classe de caracteres

Conjunto de caracteres que pode aparecer em determinada posição.

- Definição: [-.]: nesse caso na posição especificada pode aparecer um traço ou ponto.[]
Nesse caso o ponto possui seu valor de caracter não de literal.

- Exemplo: [123456789] ou [0-9]: define uma classe que varia de 0 a 9 e equivale a \d

- Exemplo: No <code>for</code>, o valor de <code>i</code> começa de zero e é incrementado a cada volta enquanto <code>i < 10</code>, portando o bloco de código do for é executado 10 vezes.

A sua tarefa agora é criar uma regex que procurará o <code> ou </code> dentro do alvo acima. Mãos à obra!

- Regex: </?code>

- Exemplo de classe de caracteres com dois intervalos: [1-36-9]

- Classe para whitespaces: \s captura tab e espaços em branco

- {1,} ou de forma mais resumida utiliza-se + : quantifier que indica que o caractere aparecerá uma ou mais vezes

- w: wordchar [A-Za-z0-9_]

## Quantifiers
      {?}  - zero ou uma vez.

      {*} - zero ou mais vezes.

      {+} - uma ou mais vezes.

      {n} - exatamente n vezes.

      {n,} - no mínimo n vezes.

      {n,m} - no mínimo n vezes, no máximo m vezes.

- Exemplo: No vídeo vimos como definir uma regex para encontrar a data. Agora precisamos garantir que o nosso usuário preencha um horário que siga esse padrão: 19h32min16s.

Qual expressão regular podemos usar nesse padrão?

- Regex: \d{2}h\d{2}min\d{2}s ou [0-9]{2}h[0-9]{2}min[0-9]{2}s

- Exemplo: Como seria a expressão regular que devemos usar para validarmos a placa de um carro?

Exemplo de placa: KMG-8089

Regex: [A-Z]{3}-\d{4}

- Exemplo: Ajude Gilberto e, claro, seus alunos, separando do arquivo CSV os nomes e as notas dos alunos que tiraram de 7.2 a 7.9 para que o professor "camarada" possa aprová-los!

9.8 - Robson, 7.1 - Teresa, 4.5 - Armênio, 6.5 - Zulu, 7.7 - Stefania, 7.8 - João, 5.0 - Romeu, 7.2 - Pompilho, 3.1 - Reinaldo, 7.3 - Bernadete, 4.7 - Cinério 

Regex: 7.[2-9]\s+-\s+[A-Z][a-zã]+

- Exemplo: Escreva uma expressão regular que faça match apenas com as palavras GARROTE, SERROTE e ROTEIRO. Não esqueça de usar nossa ferramenta para testar nossas expressões regulares.

- Regex: [A-Z]*ROT[A-Z]+

      Quando definimos uma classe, a grande maioria dos meta chars são interpretados como caracteres literais, ou seja, não são mais meta-chars!


      Apenas os caracteres \ (barra invertida), - (hífen) e ^ (circunflexo) realmente são meta-chars dentro de uma classe.

## Melhoria de Código

Para simplificar as Regex podemos definir suas partes como variáveis, temos como exemplo uma Regex para capturar uma data 

    [0123]?\d\s+de\s+[A-Z][a-zç]{1,8}\s+de\s+[12]\d{3}

Que pode ser escrita como: 

      var DIA  = "[0123]?\d"; 
      var _DE_ = "\s+de\s+";
      var MES  = "[A-Za-z][a-zç]{1,8}";
      var ANO  = "[12]\d{3}";

      var stringRegex = DIA + _DE_ +  MES + _DE_ + ANO;

Essa string passamos para a regex engine do JavaScript:

      var objetoRegex  = new RegExp(stringRegex, 'g');

## Âncora: 

A âncora auxilia no problema de se encontrar palavras específicas, ela seleciona apenas uma 
posição no texto, âncoras marcam uma posição específica no alvo. 

- b: A word boundary é uma âncora, representadapor \b, permite definir limites para uma palavra, de modo
que verifica se há algum worchar antes e após a marcação da âncora.

- ^: É uma âncora que demarca o início da expressão alvo, ou seja, o que se espera no início da expressão
avaliada.

- $: É a âncora que demarca o fim da expressão, ou seja, o que se espera ao final da expressão avaliada.

A combinação das âncoras ^ e $ permitem avaliar uma linha completa. 

      ^o-que-espera-no-inicio.+o-que-espera-ao-final$

Existe a inversão do \b, o non-word-boundary: \B (B maiúsculo), seleciona sílabas, ou seja, está limitada
por uma wordchar.

## Grupos

Um grupo é definido através de parênteses () e pode ser utilizado para retornar um tipo de dados específico
ou para definir um tipo de dados como opcional. Para marcar um grupo como opcional, basta colocá-lo entre
() e utilizar o marcador ?. Para um tipo de dado que desejamos apenas selecionar e não retornar marcamos 
como não capturado através dos operadores (?:). 

Exemplo de grupo aplicado em datas: ([0123]?\d)\s+de\s+([A-Z][a-zç]{1,8})\s+de\s+([12]\d{3})
Exemplo de grupo que retorna um usuário de um email: ([a-z.]{4,14}[a-z\d])@(?:caelum.com.br|alura.com.br)

exemplo: Seguem alguns emails que devem ser pegos pela regex:

donkey.kong@kart.com.br
bowser1@games.info 
super-mario@nintendo.JP
TEAM.donkey-kong@MARIO.kart1.nintendo.com

Regex: ([A-Za-z\d.-]+)@(([a-zA-Z\d]+)\.)*(([a-zA-Z\d]+)\.)?([a-zA-Z\d]+)


## Expressões Gananciosas e Preguiçosas

O meta-char ., o +, igualmente * e {} são também assim, e sempre selecionam o máximo de caracteres 
possíveis, se não for configurado diferente,ou seja, podemos dizer que não queremos "ganância" e sim 
preguiçoso ou hesitante. Isso se faz, novamente pelo caractere ?. Desse modo a expressão buscará até
o primeiro item com aquela configuração.

Todos os quantifiers são gananciosos por padrão. Isso significa que eles automaticamente selecionam o máximo de caracteres por padrão. 

## Backreference

Back-reference é uma referência para um texto já encontrado. Pode ser utilizada em grupos, para encontrar
dados de um mesmo grupo.

Exemplo de Regex para se selecionar uma tag html, de modo que temos o mesmo nome na tag de abertura e na 
tag de fechamento:

            <(h1|h2).+?>([\w\sõãí.]+)<\/\1>
            <(p[1-9])>.*<\/\1>

Há uma alternativa para resolver esse problema de abertura da tag. Podemos definir uma classe de caracteres
que seleciona tudo que não é um >. Essa negação é feita através da meta-char ^. 
           
            <h1[^>]+>



Essa negação é algo muito comum nas regexes. Há circunstâncias em que é mais fácil definir o que não queremos em vez de dizer o que queremos. A negação ^ ajuda nisso. Isso também é a razão da existência de classes como \W (com W maiúsculo) e \D (com D maiúsculo).

O \W é a non-word char, ou seja tudo que não é um word char. \W é um atalho para [^\w].

A classe \D, por sua vez, é um non-digit, ou seja, \D é um atalho para [^\d]

Repare também que não usamos a meta-char ^ como âncora pois aparece dentro de uma classe [^>].

## Regex e HTML

O HTML5 introduziu para as tags input o atributo pattern. Ele recebe como atributo expressões regulares, 
inclusive, quando o formulário for submetido e o valor digitado pelo usuário não for compatível com a 
expressão, o próprio navegador exibirá automaticamente uma mensagem para o usuário indicando que o campo é 
inválido.

## DOCs

http://www.goulart.pro.br/cbasico/Calculo_dv.htm

https://www.cjdinfo.com.br/utilitario-calculo-digito-modulo-11

regexr.com

regex101.com/