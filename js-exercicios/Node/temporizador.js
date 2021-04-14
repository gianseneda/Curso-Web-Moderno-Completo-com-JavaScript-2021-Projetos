const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5*19**3", function () {
  console.log("Executando Tarefa 1!", new Date().getSeconds());
}); //de 5 em 5 segundos, de qualquer minuto, às 12 horas de uma terca, sem mes nem dia certo

setTimeout(function () {
  tarefa1.cancel();
  console.log("Cancelando Tarefa 1!");
}, 2000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 12;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log("Executando Tarefa 2!", new Date().getSeconds());
});
