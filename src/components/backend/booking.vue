<template>
  <v-card
    class="mx-auto"
    max-width="500"

  >
    <v-list>
      <v-list-item-group v-model="model">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :disabled="item.disabled"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Teetime',
        },
        {
          text: 'Caddy',
        },
        {
          text: 'Member',
        }, 
        {
          text: 'Golf cart',
        },  
         {
          text: 'Starter',
        },
      ],
      model: 0,
    }),
  }
</script>