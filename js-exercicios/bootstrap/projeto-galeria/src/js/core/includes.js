import $ from "jquery";

function loadIncludes(parent) {
  //lerá os atributos wm-include e seus pais, caso passemos este parametro
  if (!parent) parent = "body";
  $(parent)
    .find("[wm-include]")
    .each(function (i, e) {
      const url = $(e).attr("wm-include");
      $.ajax({
        url,
        success(data) {
          $(e).html(data);
          $(e).removeAttr("wm-include"); //para ela nao ser lida depois da primeira vez

          loadIncludes(e); //se houver outro wm-include em outros filhos deste elemento
        },
      });
    });
}

loadIncludes();
