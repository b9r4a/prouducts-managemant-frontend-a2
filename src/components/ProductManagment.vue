<script setup>
import { createProdts, getProducts } from "../api/proudcts";
</script>

<script>
export default {
  name: "ProductManager",
  data() {
    return {
      prodcts: [],
      newProdutc: {
        name: "",
        price: 0,
        inStock: false,
      },
    };
  },
  methods: {
    async loadproducts() {
      this.prodcts = await getProducts();
    },
    async addProduct(product) {
      await createProdts(product);
      await this.loadproducts();
    },
    async submitcreatedProduct() {
      await this.addProduct(this.newProdutc);
    },
  },
  mounted() {
    this.loadproducts();
  },
};
</script>

<template>
  <main class="flex justify-center items-center flex-col min-h-screen">
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
        <tr
          v-for="prodct in prodcts"
          :key="prodct.id"
          class="w-full flex justify-between"
        >
          <td class="w-full flex justify-between">{{ prodct.id }}</td>
          <td class="w-full flex justify-between">{{ prodct.name }}</td>
          <td class="w-full flex justify-between">{{ prodct.price }}</td>
          <td class="w-full flex justify-between">
            {{ prodct.inStock ? "igen" : "nem" }}
          </td>
        </tr>
      </tbody>
    </table>
    <form
      @submit.prevent="submitcreatedProduct"
      class="gap-3 shadow-2xl shadow-white flex flex-col my-3 border-2 border-stone-200 rounded-2xl p-5"
    >
      <label for="name">Nev:</label>
      <input
        v-model="newProdutc.name"
        type="text"
        name="name"
        placeholder="laptop...."
        class="border-2 border-stone-200 rounded-xl px-3 py-1"
      />

      <label for="price">Ar:</label>
      <input
        v-model="newProdutc.price"
        type="number"
        name="price"
        placeholder="1 500ft..."
      />

      <label for="inStock">Raktaron:</label>
      <input v-model="newProdutc.inStock" type="checkbox" name="inStock" />
      <button
        class="border-2 border-stone-200 rounded-xl by-2 cursor-pointer"
        type="submit"
      >
        letrehozas
      </button>
    </form>
  </main>
</template>
