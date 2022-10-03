<template>
  <div>
    <PostsCard v-for="p in posts" :post="p" />
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';

import PostsCard from '../components/PostsCard.vue';


export default {
    setup() {
        async function getPosts() {
            try {
                await postsService.getPosts();
            }
            catch (error) {
                Pop.error(error, "[Getting Posts]");
            }
        }
        onMounted(() => {
            getPosts();
        });
        return {
            posts: computed(() => AppState.posts)
        };
    },
    components: {  PostsCard }
}
</script>

<style scoped lang="scss">

</style>
