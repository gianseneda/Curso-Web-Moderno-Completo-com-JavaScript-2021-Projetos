<template>
  <v-container fluid>
    <v-form>
      <v-file-input
        label="Selecione as Legendas"
        prepend-icon="mdi-message-text"
        append-outer-icon="mdi-send"
        multiple
        outlined
        chips
        v-model="files"
        @click:append-outer="processSubtitles"
      />
    </v-form>
    <div class="pills">
      <Pill
        v-for="word in groupedWords"
        :key="word.name"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
import Pill from "./Pill";
import { ipcRender } from "electron";

export default {
  components: { Pill },
  data: function() {
    return {
      files: [],
      groupedWords: [],
    };
  },
  methods: {
    processSubtitles() {
      const paths = this.files.map((f) => f.path);
      ipcRender.send("process-subtitles", paths);
      ipcRender.on("process-subtitles", (event, resp) => {
        this.groupedWords = resp;
      });
    },
  },
};
</script>

<style>
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
