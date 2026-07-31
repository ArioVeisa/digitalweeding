const assert = require('node:assert/strict');
const fs = require('node:fs');
const test = require('node:test');

const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('css/guest.css', 'utf8');

test('undangan berisi data Korsen dan Mustika tanpa foto pasangan', () => {
    assert.match(html, /Doni <em>&amp;<\/em> Rahma/);
    assert.match(html, /Korsen Doni Setiawan/);
    assert.match(html, /Mustika Rahma Dhani/);
    assert.match(html, /-7\.760785%2C112\.228930/);
    assert.match(html, /class="mouse-icon"/);
    assert.match(html, /class="dove dove-one"/);
    assert.doesNotMatch(html, /class="curtain/);
    assert.doesNotMatch(css, /curtain-sway|open-left|open-right/);
    assert.match(html, /2026-08-09/);
    assert.match(html, /id="countdown"/);
    assert.match(html, /\.\/dist\/romance\.js/);
    assert.doesNotMatch(html, /picsum\.photos|cowo\.webp|cewe\.webp/);
});
