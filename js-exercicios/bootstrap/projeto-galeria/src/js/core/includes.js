import $ from "jquery";

const loadHtmlSuccessCallbacks = [];

export function onLoadHtmlSuccess(callback) {
  if (!loadHtmlSuccessCallbacks.includes(callback)) {
    loadHtmlSuccessCallbacks.push(callback);
  }
}

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
          loadHtmlSuccessCallbacks.forEach((callback) => callback(data));
          loadIncludes(e); //se houver outro wm-include em outros filhos deste elemento
        },
      });
    });
}

loadIncludes();
