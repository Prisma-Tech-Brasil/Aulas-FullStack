# Redirecionamento de Telas

## Opção 1: Múltiplos Arquivos HTML (Redirecionamento)
Nesta opção, cada "nível de acesso" é um arquivo .html separado. É a forma mais intuitiva para iniciantes entenderem a estrutura de pastas e links.

Como funciona: O JavaScript valida as credenciais e usa o objeto window.location para mudar a URL do navegador.

Código Chave:

```JavaScript
if (usuario === "admin") {
    window.location.href = "admin.html"; // Vai para a página do administrador
} else {
    window.location.href = "usuario.html"; // Vai para a página do aluno
}
```
Prós: Organização simples; cada página tem seu próprio CSS e HTML isolados.

Contras: O navegador precisa carregar um novo arquivo do zero a cada troca.

## Opção 2: Single Page Application (Troca de Visibilidade)
Tudo acontece dentro de um único arquivo index.html. Você esconde ou mostra partes da página conforme a necessidade. É a base de como frameworks modernos (como React ou Vue) funcionam.

Como funciona: Você cria três <div> ou <section> principais (Login, Dashboard Admin, Dashboard Aluno). No CSS, você define as áreas de dashboard como display: none; por padrão.

Código Chave:

```JavaScript
function mostrarPainel(id) {
    // Esconde o login
    document.getElementById('tela-login').style.display = 'none';
    // Mostra a tela correta
    document.getElementById(id).style.display = 'block';
}

if (usuario === "admin") {
    mostrarPainel('painel-admin');
}
```
Prós: A troca é instantânea e não há recarregamento de página.

Contras: O arquivo HTML pode ficar muito longo e "bagunçado" se houver muito conteúdo.
