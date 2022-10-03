import { reactive } from 'vue'
import { postsService } from './services/PostsService.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

   /** @type {import('./models/post.js').post} */
  posts: {}
})
