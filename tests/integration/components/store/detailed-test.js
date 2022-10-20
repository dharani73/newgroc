import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | store/detailed', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      rental: {
        id: 1,
        title: 'Fresh Vegetables',
        homedelivery: 'Available',
        city: 'hyderabad',
        Rating: '5 star',
        stock: 'Available',
        location: {
          lat: 37.7749,
          lng: -122.4194,
        },
        category: 'Vegetables',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpRrke3Izx3RVURPmCwFKJGACwf2hXD-VIvg&usqp=CAU',
        description:
          'These are organic vegetables also fresh and easy to buy now from our app.',
      },
    });
  });

  test('it renders a header with a share button', async function (assert) {
    await render(hbs`<Store::Detailed @store={{this.store}} />`);
    assert.dom('.jumbo').exists();
    assert.dom('.jumbo h2').containsText('Fresh Vegetables');
    assert
      .dom('.jumbo p')
      .containsText(
        'These are organic vegetables also fresh and easy to buy now from our app'
      );
    assert.dom('.jumbo a.button').containsText('Share on Twitter');
  });

  test('it renders information about a groceries', async function (assert) {
    await render(hbs`<Store::Detailed @store={{this.store}} />`);

    assert.dom('article').hasClass('store');
    assert.dom('article h3').hasText('Fresh Vegetables');
    assert.dom('article h3 a').hasAttribute('href', '/stores/1');
    assert.dom('article .homedelivery').includesText('Available');
    assert.dom('article .location').includesText('hyderabad');
    assert.dom('article .Rating').includesText('5 star');
    assert.dom('article .stock').includesText('Available');
    assert.dom('article .image').exists();
  });
});
