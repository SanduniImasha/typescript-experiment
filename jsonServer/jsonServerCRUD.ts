import axios from 'axios';
import { Interface } from 'readline';

interface Post{
    id:string;
    title:string;
    views:string;
}
interface Comments{
    id:string;
    text:string;
}
interface Profile{
    name:string;
}
interface profiledb{
    posts:Post[];
    com:Comments[];
    profile:Profile;
}

const baseURL = 'http://localhost:3000'; // Assuming JSON Server is running on port 3000

/*// get all
async function getAll():Promise<profiledb> {
    const response = await axios.get<profiledb>(`${baseURL}/`);
    return response.data;
}*/

//get all post
async function getAllPost():Promise<Post[]> {
    const response =  await axios.get<profiledb>(`${baseURL}/posts`);
    return response.data.posts;
}

//get all comments
async function getAllComments(id:string):Promise<Comments[]>{
    const response = await axios.get<profiledb>(`${baseURL}/comments?PostId==${id}`);
    return response.data.com;
}

//get all Profiles
async function getAllProfile():Promise<Profile> {
    const response = await axios.get<profiledb>(`${baseURL}/profile`);
    return response.data.profile;    
}
async function createNew(postData:Post) {
    const response =  await axios.post<profiledb>(`${baseURL}/posts`,postData);
  //  return response.data.posts;
    console.log(response.data);
}
getAllPost();
//console.log(await getAllPost());


