import test from 'ava';
import nm from './';

test('async :: return `true` for default module', async t => {
	t.true(await nm('fs'));
	t.true(await nm('path'));
});

test('sync :: return `true` for default module', t => {
	t.true(nm.sync('fs'));
	t.true(nm.sync('path'));
});

test('async :: return `true` if the module has exists in `node_modules`', async t => {
	t.true(await nm('ava'));
	t.true(await nm('xo'));
});

test('sync :: return `true` if the module has exists in `node_modules`', t => {
	t.true(nm.sync('ava'));
	t.true(nm.sync('xo'));
});

test('async :: return `false` if the node module does not exists', async t => {
	t.false(await nm('foo'));
	t.false(await nm('bar'));
});

test('sync :: return `false` if the node module does not exists', t => {
	t.false(nm.sync('foo'));
	t.false(nm.sync('bar'));
});

test('async :: return `true` if the local module has exists', async t => {
	t.true(await nm('./fixtures/awesome'));
	t.true(await nm('./fixtures/app'));
});

test('sync :: return `true` if the local module has exists', t => {
	t.true(nm.sync('./fixtures/awesome'));
	t.true(nm.sync('./fixtures/app'));
});
