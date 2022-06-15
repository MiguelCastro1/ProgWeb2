import {v4 as uuidv4} from 'uuid';

let users = [];

const index = (req, res) => {
    res.send(users);
};

const create = (req, res) => {
    const user = {
        id: uuidv4(),
        ...req.body
    }

    users.push(user);
    res.status(201).send(user);
};

const read = (req, res) => {
    const {id} = req.params;
    const found_user = users.find(user => user.id === id);
    if(!found_user) res.status(204).send(); 
    
    res.status(200).send(found_user);
};

const update = (req, res) => {
    const {id} = req.params;
    const found_user = users.find(user => user.id == id);
    if(!found_user) res.status(204).send(); 

    let update_user = {
        id: found_user.id,
        ...req.body
    }
    
    users = users.map(user => user.id === id ? update_user : user);
    res.status(200).send(update_user);
};

const remove = (req, res) => {
    const {id} = req.params;
    const found_user = users.find(user => user.id === id);
    if(!found_user) res.status(204).send();

    users = users.filter(user => user.id !== id);
    res.status(200).send();
};

export default { index, create, read, update, remove };