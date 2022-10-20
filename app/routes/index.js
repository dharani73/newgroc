import Route from '@ember/routing/route';

const GROCERY_CATEGORIES = ['Vegetables', 'Fruits', 'Cereals'];

export default class StoreRoute extends Route {
  async model(params) {
    let response = await fetch('/api/stores/${params.store_id}.json');
    let { data } = await response.json();

    let { id, attributes } = data;
    let type;

    if (GROCERY_CATEGORIES.includes(attributes.category)) {
      type = 'grocery';
    } else {
      type = 'all';
    }

    return { id, type, ...attributes };
  }
}
