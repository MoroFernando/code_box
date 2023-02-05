
window.onload = function() {

  aplicaHighlight()

  fetch('https://api.github.com/repos/highlightjs/highlight.js/contents/src/styles')
    .then(response => response.json())
    .then(files => {
      var seletor = document.getElementById("seletor-tema");

      files.forEach(file => {
        var option = document.createElement("option");
        option.value = file.name;
        option.text = file.name.replace(".css", "");
        seletor.appendChild(option);
      });

      seletor.addEventListener("change", function() {
        var selectedOption = seletor.options[seletor.selectedIndex].value;
        var linkCSS = document.getElementById("hljs_css");
        linkCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/" + selectedOption.replace(".css", ".min.css");
      });
    });

};

const linguagem = document.querySelector('.seletor-linguagem')
const areaCodigo = document.querySelector('.main-editor-codigo')
const botao = document.querySelector('.code-highlight-button')

function aplicaHighlight() {

  const codigo = areaCodigo.innerText
  areaCodigo.innerHTML = `<pre><code class="preview hljs ${linguagem.value}" id="editor-codigo" aria-label="editor-codigo" contenteditable="true" spellcheck="false"></code></pre>`
  areaCodigo.querySelector('code').textContent = codigo
  hljs.highlightElement(areaCodigo.querySelector('code'))

}

botao.addEventListener('click', () => {
  aplicaHighlight()
})
