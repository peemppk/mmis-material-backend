import Knex = require('knex');
import * as moment from 'moment';

export class typeProductModel {
  list(knex: Knex,btnD:any = 'N') {
    let query = knex('mm_generic_types')
    if(btnD == 'N') query.where('is_deleted','N')
    return query
  }

  save(knex: Knex, datas: any) {
    return knex('mm_generic_types')
      .insert(datas);
  }

  update(knex: Knex, typeId: string, datas: any) {
    return knex('mm_generic_types')
      .where('generic_type_id', typeId)
      .update(datas);
  }

  detail(knex: Knex, typeId: string) {
    return knex('mm_generic_types')
      .where('generic_type_id', typeId);
  }

  remove(knex: Knex, typeId: string) {
    return knex('mm_generic_types')
      .where('generic_type_id', typeId)
      .update('is_deleted','Y')
  }
  reRemove(knex: Knex, Id: string) {
    return knex('mm_generic_types')
      .where('generic_type_id', Id)
      .update('is_deleted','N');
  }
}