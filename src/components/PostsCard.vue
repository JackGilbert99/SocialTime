<template>
    <div class="container">
        <p>
            <span v-if="post.imgUrl">
               
                <img class="" :src="post.imgUrl" :alt="post.make">
            </span>

            
            <span v-if="post.body != null">
               
               <p>{{post.body}}</p>
           </span>
           
        </p>



        
    </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { Post } from '../models/Post.js';


export default {
    props: {
        post: {
            type: Post,
            required: true 
        }
    },
    setup(props) {
        return {
            imgUrl: computed(() => `url(${props.post.imgUrl})`),
        }
    }
}

</script>




<style lang="scss" scoped>

.Posts-card {

    height: 110vh;
  background-image: v-bind(coverImg);
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;
}


</style>








