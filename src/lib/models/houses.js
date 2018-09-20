'use strict';

import storage from '../lib/storage/memory.js';
import uuid from 'uuid/v1';

Class Houses {
  constructor(address, description, sqFootage){
    this.id = uuid();
    this.address = address;
    this.description = description;
    this.sqFootage = sqFootage || '';
  };

  save() {
    return storage.save(this);
  };

  get(id) {
    return storage.fetchOne(id);
  };
}