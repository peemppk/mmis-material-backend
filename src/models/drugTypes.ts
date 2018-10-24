import Knex = require('knex');
import * as moment from 'moment';

export class DrugTypeModel {
  list(knex: Knex,btnD:any = 'N') {
    let query = knex('mm_generic_accounts')
    if(btnD == 'N') query.where('is_deleted','N')
    .where('is_deleted','N')
    return query
  }
  reRemove(knex: Knex, Id: string) {
    return knex('mm_generic_accounts')
      .where('account_id', Id)
      .update('is_deleted','N');
  }
  save(knex: Knex, datas: any) {
    return knex('mm_generic_accounts')
      .insert(datas);
  }

  update(knex: Knex, typeId: string, datas: any) {
    return knex('mm_generic_accounts')
      .where('account_id', typeId)
      .update(datas);
  }

  detail(knex: Knex, typeId: string) {
    return knex('mm_generic_accounts')
      .where('account_id', typeId);
  }

  remove(knex: Knex, typeId: string) {
    return knex('mm_generic_accounts')
      .where('account_id', typeId)
      .update('is_deleted','Y')
  }

}
