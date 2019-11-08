import axios from "axios";

export default {
    searchBooks: function() {
        return axios.get("GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDQMor4uOSFoxlnuDQ3TLMrENDCEHQCN4E");
    } 
};