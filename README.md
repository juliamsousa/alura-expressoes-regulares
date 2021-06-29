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

- Exemplo: [123456789] ou [0-9]: define uma classe que varia de 0 a 9 e equivale a \d.