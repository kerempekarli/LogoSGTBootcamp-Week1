import axios from "axios";

/*let writePosts = async () => {
let posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
console.log(posts.data);
}*/

let posts2 = () => axios.get("https://jsonplaceholder.typicode.com/posts").then((x) => console.log(x.data));


//writePosts();
posts2();