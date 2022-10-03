import { AppState } from "../AppState"
import { Post } from "../models/post";
import { api } from "./AxiosService"


class PostsService {
    
    async getPosts(){
        AppState.posts = {}
        const res = await api.get('api/posts')
        console.log('get Posts',res.data);
        AppState.posts = res.data.posts.map(p => new Post(p))
    }

    
}

export const postsService = new PostsService()