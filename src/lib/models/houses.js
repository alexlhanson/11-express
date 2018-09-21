'use strict';

import storage from '../storage/data-store';
import uuid from 'uuid/v1';

class Houses {
  constructor(address, description, sqFootage){
    this.id = uuid();
    this.address = address;
    this.description = description;
    this.sqFootage = sqFootage || '';
  }

  save() {
    return storage.save(this);
  }

  static get(id) {
    return storage.fetchOne(id);
  }

  static delete(id) {
    console.log('here');
    return storage.delete(id);
  }
}

export default Houses;
