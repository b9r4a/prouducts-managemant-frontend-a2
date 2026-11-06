<script setup>
import { getProducts } from "../api/proudcts";
</script>

<script>
export default {
  name: "ProductManager",
  data() {
    return {
      prodcts: [],
    };
  },
  methods: {
    async loadproducts() {
      this.prodcts = await getProducts();
    },
  },
  mounted(){
    this.loadproducts()
  }
};
</script>

<template>
  <main class="flex justify-center items-center felx-col min-h-screen">
    <h1 class="text-3xl">Termeek kezelese</h1>

    <table class="flex flex-col w-full p-4">
      <thead>
        <tr class="w-full flex justify-between">
          <th class="w-full flex justify-between">azonosito</th>
          <th class="w-full flex justify-between">nev</th>
          <th class="w-full flex justify-between">ar</th>
          <th class="w-full flex justify-between">raktaron</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prodct in prodcts" :key="prodct.id" class="w-full flex justify-between">
          <td class="w-full flex justify-between">{{ prodct.id }}</td>
          <td class="w-full flex justify-between">{{ prodct.name }}</td>
          <td class="w-full flex justify-between">{{ prodct.price }}</td>
          <td class="w-full flex justify-between">{{ prodct.inStock ? "igen" : "nem" }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
