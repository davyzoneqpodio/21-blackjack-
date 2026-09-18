'use strict';
const assert = require('assert');
const { createDeck, resolveDuel, scoreHand } = require('../backend/game-core');

assert.strictEqual(createDeck().length, 52);
assert.strictEqual(scoreHand([{rank:'K',value:10},{rank:'A',value:11}]).total, 21);
assert.strictEqual(resolveDuel([{rank:'10',value:10},{rank:'K',value:10}], [{rank:'9',value:9},{rank:'Q',value:10}]).result, 'a-wins');
assert.strictEqual(resolveDuel([{rank:'K',value:10},{rank:'Q',value:10},{rank:'2',value:2}], [{rank:'K',value:10},{rank:'J',value:10},{rank:'3',value:3}]).result, 'draw');
assert.strictEqual(resolveDuel([{rank:'K',value:10},{rank:'A',value:11}], [{rank:'7',value:7},{rank:'7',value:7},{rank:'7',value:7}]).result, 'a-wins');
assert.strictEqual(resolveDuel([{rank:'K',value:10},{rank:'7',value:7}], [{rank:'K',value:10},{rank:'7',value:7}]).result, 'draw');
assert.strictEqual(resolveDuel([{rank:'K',value:10},{rank:'8',value:8},{rank:'5',value:5}], [{rank:'K',value:10},{rank:'3',value:3},{rank:'4',value:4}]).result, 'b-wins');
assert.strictEqual(resolveDuel([{rank:'K',value:10},{rank:'K',value:10},{rank:'5',value:5}], [{rank:'K',value:10},{rank:'K',value:10},{rank:'6',value:6}]).result, 'draw');
console.log('game-core-test: OK');

assert.strictEqual(resolveDuel([{rank:'K',value:10,suit:'spades'},{rank:'A',value:11,suit:'clubs'}],[{rank:'K',value:10,suit:'hearts'},{rank:'A',value:11,suit:'clubs'}]).result,'a-wins');
