<script>
import { RouterView, RouterLink } from 'vue-router'
import InputSearch from '@/components/InputSearch.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import ChatItem from '@/components/ChatItem.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    RouterView,
    RouterLink,
    InputSearch,
    ProfileCard,
    ChatItem
  },
  data() {
    return {
      search: '',
      profile: {
        username: 'Usuario Actual',
        avatar: '/avatars/avatar.jpg'
      },
      channels: [
        { id: 1, name: 'General', messages: 27 },
        { id: 2, name: 'Emergencias', messages: null },
        { id: 3, name: 'Anuncios', messages: 2 },
        { id: 4, name: 'Proyecto 1', messages: 24 },
        { id: 5, name: 'Non-work', messages: null },
        { id: 6, name: 'Atención a clientes', messages: 120 }
      ]
    }
  },
  computed: {
    // Trae variables desde el store.
    // Al ser variables reactivas,
    // usamos funciones computadas para su
    // representación.
    // https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
    ...mapState(['status']),
    // https://vuex.vuejs.org/guide/getters.html#the-mapgetters-helper
    // Primero indicamos el modulo (si no pertenece directamente al index.js de store)
    // y luego el getter a obtener.
    // Esto se debe a que el modulo 'profile' tiene 'namespaced: true'
    ...mapGetters('profile', ['firstName']),
    ...mapGetters('channels', ['getChannels'])
  },
}
</script>

<template>
<div class="home">
  <aside>
    <InputSearch v-model="search" />
    <ProfileCard
      :avatar="profile.avatar"
      :username="firstName('')"
      :status="status"
    />
    <RouterLink to="/" class="channels-title">Canales <Icon icon="carbon:hashtag" /></RouterLink>
    <div class="channels">
      <ChatItem
        v-for="channel in getChannels(search)"
        :key="channel.id"
        :id="channel.id"
        :name="channel.name"
        :messages="channel.messages"
      />
    </div>
  </aside>
  <main>
    <RouterView />
  </main>
</div>
</template>

<style lang="scss" scoped>
.home {
  @apply flex h-screen;
  aside {
    @apply flex flex-col w-80 min-w-max px-6 py-5 gap-4 bg-zinc-800;
    .channels-title {
      @apply flex items-center gap-2 mt-2 ml-3 text-xl font-bold text-neutral-200;
    }
    .channels {
      @apply flex flex-col gap-2 overflow-y-auto;
    }
  }
  main {
    @apply w-full;
  }
}
</style>