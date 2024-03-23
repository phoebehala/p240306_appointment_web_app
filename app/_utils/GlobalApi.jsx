import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:1337/api',
});

const getCategory = () => instance.get('categories?populate=*')
const getDoctorList = () => instance.get('doctors?populate=*')

export default{
    getCategory,
    getDoctorList
}