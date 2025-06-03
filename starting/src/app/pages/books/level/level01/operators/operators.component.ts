import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-operators',
  imports: [CommonModule],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.css'
})
export class OperatorsComponent {
  /** Operador Lógico (||) operador OR */
  /**Descrição: Retorna o primeiro valor verdadeiro encontrado ou o último valor se todos forem falsos */
  a = 0;
  b = null;
  c = 'Olá';
  resultadoLogico = this.a || this.b || this.c;

  /** Operador de Coalescência Nula (??) (Nullish Coalscence Operator) */
  /** Descrição: Retornar o valor da direita APENAS se o valor da esquerda for NULL ou UNDEFINED*/
  valor1 = null;
  valor2 = undefined;
  valor3 = 0;
  valor4 = 'Texto';
  resultadoCoalescencia = this.valor1 ?? this.valor2 ?? this.valor3 ?? this.valor4

  /** Operador Ternário no TS 
   * Descrição: Verifica se uma propriedade ou metodo existe antes de acessálo e evita erros
  */
  idade = 18;
  resultadoTernario = this.idade >= 18 ? 'É Maior' : 'É Menor' ;

  /** Operador de Atribuição Condicional (?) (Optional Chaining)
   * 
   */

  resultadoAtribuicaoCondicional = {
    nome: 'joão',
    endereco: {cidade: 'Lisboa'},
    contato: {telefone: undefined}
  }

  /**Operador de Negação (!) (Logical NOT)
   * Inverte o valor
   */
   /**Operador de DUPLA Negação (!!) (Double NOT)
   * Converte um valor para boleano
  */
  operadorNegacao = false;
  operadorNegacaoNumero = 0;

  ngOnInit(): void{
    console.log(this.resultadoAtribuicaoCondicional?.endereco?.cidade);  // Saída: "Lisboa"
    console.log(this.resultadoAtribuicaoCondicional?.contato?.telefone); // Saída: undefined Explicação: Se qualquer parte da cadeia for undefin
  }

}
