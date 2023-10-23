import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';

export default class ApplicationController extends Controller {
  @service store;

  constructor(...args) {
    super(...args);

    const book = getOwner(this)
      .lookup('service:store')
      .push({
        data: {
          id: 'don-juan',
          type: 'book',
          relationships: {
            author: { data: { id: 'byron', type: 'author' } },
          },
        },
      });
    this.book = book;
  }
}
