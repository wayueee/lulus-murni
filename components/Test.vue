<template>
  <div>
    <button @click="addData({ id: 1, name: 'Data A' })">Tambah Data A</button>
    <button @click="addData({ id: 2, name: 'Data B' })">Tambah Data B</button>
    <button @click="addData({ id: 3, name: 'Data C' })">Tambah Data C</button>

    <br><br>

    <button @click="ambilDataDenganID(1)">Ambil Data ID 2</button>
    <p v-if="selectedData">Data Terpilih: {{ selectedData.name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataArray: [],
      selectedData: null,
    }
  },
  methods: {
    addData(data) {
      this.dataArray.push(data)
    },
    ambilDataDenganID(id) {
      this.selectedData = this.dataArray.find(item => item.id === id)
    }
  }
}
</script>
