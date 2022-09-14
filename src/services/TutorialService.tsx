import http from '../http-commons';

const getAll = () => {
    return http.get('tutorials');
}

const get = (id:string) => {
    return http.get(`/tutorials/${id}`);
};

const create = (data:any) => {
    return http.post('/tutorials',data);
};

const update = (id:string, data:any) => {
    return http.put(`/tutorials/${id}`, data);
};

const remove = (id:string) => {
    return http.delete(`/tutorials/${id}`);
}

const removeAll = () => {
    return http.delete(`/tutorials`);
};

const findByTitle = (title:string) => {
    return http.get(`/tutorials?title=${title}`);
};

const TutorialService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
}

export default TutorialService;
