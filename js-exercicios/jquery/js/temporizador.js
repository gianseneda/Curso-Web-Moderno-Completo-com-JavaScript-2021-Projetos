(function ($) {
  $.fn.temporizador = function (opcoes) {
    const opcoesFinais = $.extend(
      {
        mensagem: "Em Breve!",
        horario: "23:59:59",
      },
      opcoes
    ); //extend usa valores padroes

    const horaDezena = $('<span class="digito"></span>').html(0);
    const horaUnidade = $('<span class="digito"></span>').html(0);
    const minutoDezena = $('<span class="digito"></span>').html(0);
    const minutoUnidade = $('<span class="digito"></span>').html(0);
    const segundoDezena = $('<span class="digito"></span>').html(0);
    const segundoUnidade = $('<span class="digito"></span>').html(0);

    const separadorHora = $('<span class="separador"></span>').html(":");
    const separadorMinuto = $('<span class="separador"></span>').html(":");
    const mensagem = $('<div class="mensagem"></div>').html(
      opcoesFinais.mensagem
    );

    $(this).addClass("temporizador");
    $(this).append(
      horaDezena,
      horaUnidade,
      separadorHora,
      minutoDezena,
      minutoUnidade,
      separadorMinuto,
      segundoDezena,
      segundoUnidade,
      mensagem
    );

    const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/);
    const horarioAlvo = regex.exec(opcoesFinais.horario); //pegando acesso à hora, minuro e segundos separados

    let temporizador = setInterval(() => {
      const agora = new Date();
      const alvo = new Date();
      alvo.setHours(horarioAlvo[1]);
      alvo.setMinutes(horarioAlvo[2]);
      alvo.setSeconds(horarioAlvo[3]);

      const diferencaEmMili = alvo.getTime() - agora.getTime();
      if (diferencaEmMili >= 0) {
        const diferenca = regex.exec(new Date(diferencaEmMili).toISOString());
        //console.log(diferenca);

        horaDezena.html(diferenca[1][0]);
        horaUnidade.html(diferenca[1][1]);
        minutoDezena.html(diferenca[2][0]);
        minutoUnidade.html(diferenca[2][1]);
        segundoDezena.html(diferenca[3][0]);
        segundoUnidade.html(diferenca[3][1]);
        //primeiro indice é o elemento de hora, minuto e segundo e o segundo indice os digitos dezenas e unidade
      } else {
        clearInterval(temporizador);
      }
    }, 1000);

    return this;
  };
})(jQuery);
