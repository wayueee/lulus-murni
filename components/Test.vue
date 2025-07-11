<template>
  <div>
    <button @click="addData()">Tambah Data Grup</button>

    <br><br>

    <button @click="ambilDataDenganID(2)">Ambil Data ID 2</button>
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
    addData() {
      const newGroup = {
        groupName: 'Grup 1',
        items: [
          { id: 1, name: 'Data A' },
          { id: 2, name: 'Data B' },
          { id: 3, name: 'Data C' }
        ]
      }
      this.dataArray.push(newGroup)
    },
    ambilDataDenganID(id) {
      // Ambil semua item dari setiap grup dan gabungkan jadi satu array
      const allItems = this.dataArray.flatMap(group => group.items)

      // Temukan item berdasarkan id
      this.selectedData = allItems.find(item => item.id === id)
    }
  }
}
</script>
