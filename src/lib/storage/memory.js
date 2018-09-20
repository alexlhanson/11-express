'use strict';

const storage = {};
const database = {};

storage.save = (data) => {

  return new Promise ((resolve, reject) =>{
    if (data.id) {
      database[data.id] = data;
      resolve (database[data.id]);
    } else {reject (`ERROR: resource ${data.id} not found`);}
  });
};

export default storage;
