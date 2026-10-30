import assert from 'node:assert/strict';
import { test } from 'node:test';

test('Connect Online renders social links with accessible labels and destinations', async () => {
  const response = await fetch('http://localhost:3000/');
  assert.equal(response.status, 200);

  const html = await response.text();
  for (const [label, url] of [
    ['GitHub', 'https://github.com/jatinxsaini'],
    ['LinkedIn', 'https://linkedin.com/in/jatinxsaini'],
    ['Twitter / X', 'https://x.com/jatinsaini2805'],
  ]) {
    assert.ok(html.includes(`aria-label="${label}"`), `Missing accessible label: ${label}`);
    assert.ok(html.includes(`href="${url}"`), `Missing social destination: ${url}`);
  }
});
