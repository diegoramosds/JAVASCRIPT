// // -----------------------------------------------
// // Questão 1 – Classe e Objeto
// // Desenvolvido por: Diego Ramos
// // -----------------------------------------------

// public class Questao1 {

//     // Classe Aluno com atributos nome e matrícula
//     static class Aluno {
//         String nome;
//         String matricula;
//     }

//     public static void main(String[] args) {
//         // Cria um objeto Aluno com seus dados
//         Aluno aluno = new Aluno();
//         aluno.nome = "Diego Ramos";
//         aluno.matricula = "24089457-5";

//         // Exibe os dados no console
//         System.out.println("Nome: " + aluno.nome);
//         System.out.println("Matrícula: " + aluno.matricula);
//     }
// }

// -----------------------------------------------
// Questão 2 – Encapsulamento
// Desenvolvido por: Diego Ramos
// -----------------------------------------------

// public class Questao2 {

//     // Classe Aluno com atributos privados
//     static class Aluno {
//         private String nome;
//         private String matricula;

//         // Métodos getters e setters
//         public String getNome() {
//             return nome;
//         }

//         public void setNome(String nome) {
//             this.nome = nome;
//         }

//         public String getMatricula() {
//             return matricula;
//         }

//         public void setMatricula(String matricula) {
//             this.matricula = matricula;
//         }
//     }

//     public static void main(String[] args) {
//         // Cria o objeto Aluno
//         Aluno aluno = new Aluno();
//         aluno.setNome("Diego Ramos");
//         aluno.setMatricula("2025001");

//         // Altera o nome usando o setter
//         aluno.setNome("Diego R. Silva");

//         // Exibe novamente os dados usando getters
//         System.out.println("Nome: " + aluno.getNome());
//         System.out.println("Matrícula: " + aluno.getMatricula());
//     }
// }  

// // Questão 3 – Herança
// public class Questao3 {

//     // Classe base Pessoa
//     static class Pessoa {
//         String nome;
//     }

//     // Classe Aluno herda de Pessoa
//     static class Aluno extends Pessoa {
//         String curso;
//         String matricula;
//     }

//     // Classe Professor também herda de Pessoa
//     static class Professor extends Pessoa {
//         String disciplina;
//     }

//     public static void main(String[] args) {
//         // Cria um aluno com seus dados
//         Aluno aluno = new Aluno();
//         aluno.nome = "Diego Ramos";
//         aluno.matricula = "2025001";
//         aluno.curso = "Análise e Desenvolvimento de Sistemas";

//         // Cria um professor com dados fictícios
//         Professor professor = new Professor();
//         professor.nome = "Carlos Oliveira";
//         professor.disciplina = "Programação Orientada a Objetos";

//         // Exibe os atributos de ambos
//         System.out.println("Aluno: " + aluno.nome + " - Matrícula: " + aluno.matricula + " - Curso: " + aluno.curso);
//         System.out.println("Professor: " + professor.nome + " - Disciplina: " + professor.disciplina);
//     }
// }


// // Questão 4 – Polimorfismo

// public class Questao4 {

//     // Classe base Pessoa
//     static class Pessoa {
//         String nome;

//         // Método que será sobrescrito
//         public String apresentar() {
//             return "Olá, meu nome é " + nome + ".";
//         }
//     }

//     // Classe Aluno herda de Pessoa
//     static class Aluno extends Pessoa {
//         String curso;
//         String matricula;

//         @Override
//         public String apresentar() {
//             return "Sou o aluno " + nome + ", matrícula " + matricula + ", cursando " + curso + ".";
//         }
//     }

//     // Classe Professor herda de Pessoa
//     static class Professor extends Pessoa {
//         String disciplina;

//         @Override
//         public String apresentar() {
//             return "Sou o professor " + nome + " e leciono " + disciplina + ".";
//         }
//     }

//     public static void main(String[] args) {
//         // Cria objetos
//         Aluno aluno = new Aluno();
//         aluno.nome = "Diego Ramos";
//         aluno.matricula = "2025001";
//         aluno.curso = "Análise e Desenvolvimento de Sistemas";

//         Professor professor = new Professor();
//         professor.nome = "Carlos Oliveira";
//         professor.disciplina = "Programação Orientada a Objetos";

//         // Demonstra polimorfismo
//         System.out.println(aluno.apresentar());
//         System.out.println(professor.apresentar());
//     }
// }




// // Questão 5 – Interface

public class Questao5 {

    // Interface com método abstrato
    interface Avaliado {
        String avaliarDesempenho();
    }

    // Classe Aluno implementa a interface Avaliado
    static class Aluno implements Avaliado {
        String nome;
        String matricula;
        String curso;

        @Override
        public String avaliarDesempenho() {
            return "Aluno " + nome + " obteve ótimo desempenho!";
        }
    }

    public static void main(String[] args) {
        // Cria o objeto Aluno
        Aluno aluno = new Aluno();
        aluno.nome = "Diego Ramos";
        aluno.matricula = "2025001";
        aluno.curso = "Análise e Desenvolvimento de Sistemas";

        // Invoca o método da interface
        System.out.println(aluno.avaliarDesempenho());
    }
}

