'use strict';

import storage from '../storage/memory';
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

  get(id) {
    return storage.fetchOne(id);
  }
}

export default Houses;
