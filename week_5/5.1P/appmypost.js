const app = Vue.createApp({ })
app.component('app-mypost', // indicating the component tag
{
    // defining data to be used in the component
    data:function(){
        return{
            statPosts:[],
            strStatus:''
        }
    },
    // define the template for the component
    template:
    `
    <div class="form-group">
        <label><strong>Status: </strong></label>
        <input type="text" class="form-control" v-model="strStatus">
        <button type="button" @click="add">Post</button>
    </div><br>
    <h2>Status Posts</h2>
    <ul class="list-group">
        <!-- v-for in this case creates a loop of "post" = value of one array + "index" = the id or order of it in array starting with 0 -->
        <li v-for="(post, index) in statPosts" :key="index" class="list-group-item">
            <p>
            <span>{{ post }}</span> Task 5.1P
            <button @click="remove(index)">Delete</button>
            </p>
        </li>
    </ul>
    `
    ,
    // defining the methods for add and remove status
    methods: {
        add:function(){
            // Check if strStatus is not empty or just whitespace
            if (this.strStatus.trim()) {
            // push this concrete status into statPosts array
            this.statPosts.push(this.strStatus);
            // reset
            this.strStatus = '';
        //push status into statPosts array
            }
        },
        remove:function(index){
            return this.statPosts.splice(index, 1);
            //delete status from statPost using index
        }
    }
});
app.mount('#app')