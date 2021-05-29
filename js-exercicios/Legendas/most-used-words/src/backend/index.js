const { ipcMain } = require("electron");

ipcMain.on("process-subtitles", (event, paths) => {
  console.log(paths);

  event.reply("process-subtitles", [
    { name: "i", amount: 1234 },
    { name: "you", amount: 900 },
    { name: "he", amount: 853 },
    { name: "she", amount: 853 },
    { name: "our", amount: 1330 },
    { name: "house", amount: 23 },
  ]);
});
