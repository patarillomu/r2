// tslint:disable:object-literal-key-quotes
// tslint:disable:max-line-length
import * as nock from 'nock';

function nocksetup() {
  const coincheck = nock('https://coincheck.com');
  coincheck.get('/api/accounts/balance').reply(200, { success: true, 'jpy': '0.375', 'btc': '0.123', 'usd': '0', 'cny': '0', 'eth': '0', 'etc': '0', 'dao': '0', 'lsk': '0', 'fct': '0', 'xmr': '0', 'rep': '0', 'xrp': '0', 'zec': '0', 'xem': '0', 'ltc': '0', 'dash': '0', 'bch': '0', 'jpy_reserved': '0.0', 'btc_reserved': '0.0', 'usd_reserved': '0', 'cny_reserved': '0', 'eth_reserved': '0', 'etc_reserved': '0', 'dao_reserved': '0', 'lsk_reserved': '0', 'fct_reserved': '0', 'xmr_reserved': '0', 'rep_reserved': '0', 'xrp_reserved': '0', 'zec_reserved': '0', 'xem_reserved': '0', 'ltc_reserved': '0', 'dash_reserved': '0', 'bch_reserved': '0', 'jpy_lend_in_use': '0.0', 'btc_lend_in_use': '0.0', 'usd_lend_in_use': '0.0', 'cny_lend_in_use': '0.0', 'eth_lend_in_use': '0.0', 'etc_lend_in_use': '0.0', 'dao_lend_in_use': '0.0', 'lsk_lend_in_use': '0.0', 'fct_lend_in_use': '0.0', 'xmr_lend_in_use': '0.0', 'rep_lend_in_use': '0.0', 'xrp_lend_in_use': '0.0', 'zec_lend_in_use': '0.0', 'xem_lend_in_use': '0.0', 'ltc_lend_in_use': '0.0', 'dash_lend_in_use': '0.0', 'bch_lend_in_use': '0.0', 'jpy_lent': '0.0', 'btc_lent': '0.0', 'usd_lent': '0.0', 'cny_lent': '0.0', 'eth_lent': '0.0', 'etc_lent': '0.0', 'dao_lent': '0.0', 'lsk_lent': '0.0', 'fct_lent': '0.0', 'xmr_lent': '0.0', 'rep_lent': '0.0', 'xrp_lent': '0.0', 'zec_lent': '0.0', 'xem_lent': '0.0', 'ltc_lent': '0.0', 'dash_lent': '0.0', 'bch_lent': '0.0', 'jpy_debt': '0.0', 'btc_debt': '0.0', 'usd_debt': '0.0', 'cny_debt': '0.0', 'eth_debt': '0.0', 'etc_debt': '0.0', 'dao_debt': '0.0', 'lsk_debt': '0.0', 'fct_debt': '0.0', 'xmr_debt': '0.0', 'rep_debt': '0.0', 'xrp_debt': '0.0', 'zec_debt': '0.0', 'xem_debt': '0.0', 'ltc_debt': '0.0', 'dash_debt': '0.0', 'bch_debt': '0.0' });
  coincheck.get('/api/exchange/leverage/positions?status=open').reply(200, { 'success': true, 'pagination': { 'limit': 10, 'order': 'desc', 'starting_after': null, 'ending_before': null }, 'data': [{ 'id': 2079202, 'pair': 'btc_jpy', 'status': 'open', 'created_at': '2017-10-20T22:42:05.000Z', 'closed_at': null, 'open_rate': '674299.0', 'closed_rate': null, 'amount': '0.005', 'all_amount': '0.005', 'side': 'buy', 'pl': '59.237804', 'new_order': { 'id': 336182009, 'side': 'buy', 'rate': null, 'amount': '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:42:05.000Z' }, 'close_orders': [] }, { 'id': 2079200, 'pair': 'btc_jpy', 'status': 'open', 'created_at': '2017-10-20T22:41:59.000Z', 'closed_at': null, 'open_rate': '674257.0', 'closed_rate': null, 'amount': '0.005', 'all_amount': '0.005', 'side': 'buy', 'pl': '59.447972', 'new_order': { 'id': 336181865, 'side': 'buy', 'rate': null, 'amount': '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:41:59.000Z' }, 'close_orders': [] }, { 'id': 2079199, 'pair': 'btc_jpy', 'status': 'open', 'created_at': '2017-10-20T22:41:56.000Z', 'closed_at': null, 'open_rate': '674189.0', 'closed_rate': null, 'amount': '0.005005', 'all_amount': '0.005', 'side': 'sell', 'pl': '-65.983495', 'new_order': { 'id': 336181798, 'side': 'sell', 'rate': null, 'amount': '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:41:56.000Z' }, 'close_orders': [] }, { 'id': 2079195, 'pair': 'btc_jpy', 'status': 'open', 'created_at': '2017-10-20T22:41:53.000Z', 'closed_at': null, 'open_rate': '674290.0', 'closed_rate': null, 'amount': '0.005005', 'all_amount': '0.005', 'side': 'sell', 'pl': '-65.478495', 'new_order': { 'id': 336181726, 'side': 'sell', 'rate': null, 'amount': '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:41:53.000Z' }, 'close_orders': [] }, { 'id': 2079192, 'pair': 'btc_jpy', 'status': 'open', 'created_at': '2017-10-20T22:41:39.000Z', 'closed_at': null, 'open_rate': '674188.0', 'closed_rate': null, 'amount': '0.005005', 'all_amount': '0.005', 'side': 'sell', 'pl': '-65.988495', 'new_order': { 'id': 336181428, 'side': 'sell', 'rate': null, 'amount': '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:41:39.000Z' }, 'close_orders': [] }, { 'id': 2079191, 'pair': 'btc_jpy', 'status': 'open', 'created_at': '2017-10-20T22:41:35.000Z', 'closed_at': null, 'open_rate': '674292.0', 'closed_rate': null, 'amount': '0.005', 'all_amount': '0.005', 'side': 'buy', 'pl': '59.272832', 'new_order': { 'id': 336181335, 'side': 'buy', 'rate': null, 'amount': '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:41:35.000Z' }, 'close_orders': [] }, { 'id': 2079188, 'pair': 'btc_jpy', 'status': 'open', 'created_at': '2017-10-20T22:41:26.000Z', 'closed_at': null, 'open_rate': '674146.0', 'closed_rate': null, 'amount': '0.005005', 'all_amount': '0.005', 'side': 'sell', 'pl': '-66.198495', 'new_order': { 'id': 336181128, 'side': 'sell', 'rate': null, 'amount': '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:41:26.000Z' }, 'close_orders': [] }, { 'id': 2079185, 'pair': 'btc_jpy', 'status': 'open', 'created_at': '2017-10-20T22:41:21.000Z', 'closed_at': null, 'open_rate': '674050.0', 'closed_rate': null, 'amount': '0.005005', 'all_amount': '0.005', 'side': 'sell', 'pl': '-66.678495', 'new_order': { 'id': 336181024, 'side': 'sell', 'rate': null, 'amount': '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:41:21.000Z' }, 'close_orders': [] }, { 'id': 2079184, 'pair': 'btc_jpy', 'status': 'open', 'created_at': '2017-10-20T22:41:18.000Z', 'closed_at': null, 'open_rate': '674063.0', 'closed_rate': null, 'amount': '0.005', 'all_amount': '0.005', 'side': 'buy', 'pl': '60.418748', 'new_order': { 'id': 336180957, 'side': 'buy', 'rate': null, 'amount': '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:41:18.000Z' }, 'close_orders': [] }] }).persist();
  coincheck.get('/api/exchange/leverage/positions?status=open&limit=4&order=desc').reply(200, { 'success': true, 'pagination': { 'limit': 4, 'order': 'desc', 'starting_after': null, 'ending_before': null }, 'data': [{ 'id': 2079202, 'pair': 'btc_jpy', 'status': 'open', 'created_at': '2017-10-20T22:42:05.000Z', 'closed_at': null, 'open_rate': '674299.0', 'closed_rate': null, 'amount': '0.005', 'all_amount': '0.005', 'side': 'buy', 'pl': '51.877804', 'new_order': { 'id': 336182009, 'side': 'buy', 'rate': null, amount: '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:42:05.000Z' }, close_orders: [] }, { id: 2079200, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:41:59.000Z', closed_at: null, open_rate: '674257.0', closed_rate: null, amount: '0.005', all_amount: '0.005', side: 'buy', pl: '52.087972', new_order: { 'id': 336181865, 'side': 'buy', 'rate': null, 'amount': '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:41:59.000Z' }, close_orders: [] }, { id: 2079199, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:41:56.000Z', closed_at: null, open_rate: '674189.0', closed_rate: null, amount: '0.005005', all_amount: '0.005', side: 'sell', pl: '-59.96248', new_order: { 'id': 336181798, 'side': 'sell', 'rate': null, 'amount': '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:41:56.000Z' }, close_orders: [] }, { id: 2079195, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:41:53.000Z', closed_at: null, open_rate: '674290.0', closed_rate: null, amount: '0.005005', all_amount: '0.005', side: 'sell', pl: '-59.45748', new_order: { 'id': 336181726, 'side': 'sell', 'rate': null, 'amount': '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:41:53.000Z' }, close_orders: [] }] }).persist();
  coincheck.get('/api/exchange/leverage/positions?status=open&limit=4&order=desc&starting_after=2079195').reply(200, { success: true, pagination: { 'limit': 4, 'order': 'desc', 'starting_after': 2079195, 'ending_before': null }, data: [{ id: 2079192, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:41:39.000Z', closed_at: null, open_rate: '674188.0', closed_rate: null, amount: '0.005005', all_amount: '0.005', side: 'sell', pl: '-62.49', new_order: { 'id': 336181428, 'side': 'sell', 'rate': null, 'amount': '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:41:39.000Z' }, close_orders: [] }, { id: 2079191, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:41:35.000Z', closed_at: null, open_rate: '674292.0', closed_rate: null, amount: '0.005', all_amount: '0.005', side: 'buy', pl: '55.677832', new_order: { 'id': 336181335, 'side': 'buy', 'rate': null, 'amount': '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:41:35.000Z' }, close_orders: [] }, { id: 2079188, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:41:26.000Z', closed_at: null, open_rate: '674146.0', closed_rate: null, amount: '0.005005', all_amount: '0.005', side: 'sell', pl: '-62.7', new_order: { 'id': 336181128, 'side': 'sell', 'rate': null, 'amount': '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:41:26.000Z' }, close_orders: [] }, { id: 2079185, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:41:21.000Z', closed_at: null, open_rate: '674050.0', closed_rate: null, amount: '0.005005', all_amount: '0.005', side: 'sell', pl: '-63.18', new_order: { 'id': 336181024, 'side': 'sell', 'rate': null, 'amount': '0.005', 'pending_amount': '0', 'status': 'complete', 'created_at': '2017-10-20T22:41:21.000Z' }, close_orders: [] }] }).persist();
  coincheck.get('/api/exchange/leverage/positions?status=open&limit=4&order=desc&starting_after=2079185').reply(200, { success: true, pagination: { 'limit': 4, 'order': 'desc', 'starting_after': 2079185, 'ending_before': null }, data: [{ id: 2079184, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:41:18.000Z', closed_at: null, open_rate: '674063.0', closed_rate: null, amount: '0.005', all_amount: '0.005', side: 'buy', pl: '56.268748', new_order: { id: 336180957, side: 'buy', rate: null, amount: '0.005', pending_amount: '0', status: 'complete', created_at: '2017-10-20T22:41:18.000Z' }, close_orders: [] }] }).persist();
  coincheck.get('/api/exchange/leverage/positions?limit=4&status=open&order=desc').reply(200, { success: true, pagination: { limit: 4, order: 'desc', starting_after: null, ending_before: null }, data: [{ id: 2079202, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:42:05.000Z', closed_at: null, open_rate: '674299.0', closed_rate: null, amount: '0.005', all_amount: '0.005', side: 'buy', pl: '51.877804', new_order: { id: 336182009, side: 'buy', rate: null, amount: '0.005', pending_amount: '0', status: 'complete', created_at: '2017-10-20T22:42:05.000Z' }, close_orders: [] }, { id: 2079200, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:41:59.000Z', closed_at: null, open_rate: '674257.0', closed_rate: null, amount: '0.005', all_amount: '0.005', side: 'buy', pl: '52.087972', new_order: { id: 336181865, side: 'buy', rate: null, amount: '0.005', pending_amount: '0', status: 'complete', created_at: '2017-10-20T22:41:59.000Z' }, close_orders: [] }, { id: 2079199, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:41:56.000Z', closed_at: null, open_rate: '674189.0', closed_rate: null, amount: '0.005005', all_amount: '0.005', side: 'sell', pl: '-59.96248', new_order: { id: 336181798, side: 'sell', rate: null, amount: '0.005', pending_amount: '0', status: 'complete', created_at: '2017-10-20T22:41:56.000Z' }, close_orders: [] }, { id: 2079195, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:41:53.000Z', closed_at: null, open_rate: '674290.0', closed_rate: null, amount: '0.005005', all_amount: '0.005', side: 'sell', pl: '-59.45748', new_order: { id: 336181726, side: 'sell', rate: null, amount: '0.005', pending_amount: '0', status: 'complete', created_at: '2017-10-20T22:41:53.000Z' }, close_orders: [] }] }).persist();
  coincheck.get('/api/exchange/leverage/positions?limit=4&status=open&order=desc&starting_after=2079195').reply(200, { success: true, pagination: { limit: 4, order: 'desc', starting_after: 2079195, ending_before: null }, data: [{ id: 2079192, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:41:39.000Z', closed_at: null, open_rate: '674188.0', closed_rate: null, amount: '0.005005', all_amount: '0.005', side: 'sell', pl: '-62.49', new_order: { id: 336181428, side: 'sell', rate: null, amount: '0.005', pending_amount: '0', status: 'complete', created_at: '2017-10-20T22:41:39.000Z' }, close_orders: [] }, { id: 2079191, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:41:35.000Z', closed_at: null, open_rate: '674292.0', closed_rate: null, amount: '0.005', all_amount: '0.005', side: 'buy', pl: '55.677832', new_order: { id: 336181335, side: 'buy', rate: null, amount: '0.005', pending_amount: '0', status: 'complete', created_at: '2017-10-20T22:41:35.000Z' }, close_orders: [] }, { id: 2079188, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:41:26.000Z', closed_at: null, open_rate: '674146.0', closed_rate: null, amount: '0.005005', all_amount: '0.005', side: 'sell', pl: '-62.7', new_order: { id: 336181128, side: 'sell', rate: null, amount: '0.005', pending_amount: '0', status: 'complete', created_at: '2017-10-20T22:41:26.000Z' }, close_orders: [] }, { id: 2079185, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:41:21.000Z', closed_at: null, open_rate: '674050.0', closed_rate: null, amount: '0.005005', all_amount: '0.005', side: 'sell', pl: '-63.18', new_order: { id: 336181024, side: 'sell', rate: null, amount: '0.005', pending_amount: '0', status: 'complete', created_at: '2017-10-20T22:41:21.000Z' }, close_orders: [] }] }).persist();
  coincheck.get('/api/exchange/leverage/positions?limit=4&status=open&order=desc&starting_after=2079185').reply(200, { success: true, pagination: { limit: 4, order: 'desc', starting_after: 2079185, ending_before: null }, data: [{ id: 2079184, pair: 'btc_jpy', status: 'open', created_at: '2017-10-20T22:41:18.000Z', closed_at: null, open_rate: '674063.0', closed_rate: null, amount: '0.005', all_amount: '0.005', side: 'buy', pl: '56.268748', new_order: { id: 336180957, side: 'buy', rate: null, amount: '0.005', pending_amount: '0', status: 'complete', created_at: '2017-10-20T22:41:18.000Z' }, close_orders: [] }] }).persist();
  coincheck.get('/api/order_books').reply(200, { asks: [['662548.0', '0.7'], ['662553.0', '0.199'], ['662633.0', '1.2'], ['662634.0', '1.0'], ['662821.0', '0.00542'], ['662825.0', '0.00542'], ['662870.0', '0.5'], ['662893.0', '0.00512'], ['662897.0', '0.90401829'], ['662898.0', '0.44'], ['662900.0', '11.38095078'], ['662983.0', '0.00670176'], ['663000.0', '1.9'], ['663010.0', '0.352'], ['663109.0', '0.05'], ['663200.0', '0.02965176'], ['663307.0', '0.03612967'], ['663378.0', '0.005'], ['663500.0', '0.00670173'], ['663522.0', '0.005'], ['663528.0', '2.0'], ['663532.0', '0.015'], ['663568.0', '0.79'], ['663580.0', '1.76'], ['663591.0', '0.985346'], ['663600.0', '0.0072802'], ['663665.0', '0.005'], ['663676.0', '0.03'], ['663776.0', '0.036'], ['663800.0', '0.00728024'], ['663809.0', '0.005'], ['663841.0', '2.12'], ['663850.0', '1.177623'], ['663866.0', '0.015'], ['663892.0', '0.00670173'], ['663900.0', '0.005'], ['663953.0', '0.005'], ['663988.0', '1.52'], ['663999.0', '0.00727955'], ['664000.0', '1.68381809'], ['664097.0', '0.005'], ['664099.0', '0.00727959'], ['664241.0', '0.005'], ['664300.0', '0.40207665'], ['664385.0', '0.105'], ['664399.0', '0.00727978'], ['664488.0', '1.65'], ['664495.0', '1.0'], ['664500.0', '0.13'], ['664529.0', '0.005'], ['664673.0', '0.005'], ['664750.0', '0.5'], ['664776.0', '0.156'], ['664794.0', '0.65'], ['664797.0', '0.87709767'], ['664800.0', '2.0'], ['664811.0', '0.00514'], ['664815.0', '2.0'], ['664817.0', '0.005'], ['664904.0', '0.2'], ['664961.0', '0.005'], ['664999.0', '1.71319327'], ['665000.0', '25.63689763'], ['665005.0', '0.07'], ['665105.0', '0.005'], ['665114.0', '0.04'], ['665200.0', '0.01204456'], ['665250.0', '0.005'], ['665394.0', '0.005'], ['665411.0', '0.2'], ['665500.0', '1.151561'], ['665539.0', '0.005'], ['665600.0', '0.1'], ['665683.0', '0.005'], ['665827.0', '0.005'], ['665843.0', '0.3'], ['665868.0', '0.5'], ['665972.0', '0.005'], ['666000.0', '1.11122457'], ['666071.0', '1.0'], ['666100.0', '0.01202827'], ['666116.0', '0.005'], ['666261.0', '0.005'], ['666406.0', '0.005'], ['666500.0', '13.0'], ['666550.0', '0.005'], ['666694.0', '3.5'], ['666695.0', '0.005'], ['666700.0', '0.3'], ['666840.0', '0.005'], ['666862.0', '0.2'], ['666896.0', '0.5'], ['666900.0', '0.005'], ['666945.0', '0.985'], ['666985.0', '0.005'], ['667130.0', '0.005'], ['667241.0', '6.8'], ['667274.0', '0.005'], ['667419.0', '0.005'], ['667468.0', '0.005'], ['667500.0', '0.03'], ['667546.0', '0.005'], ['667600.0', '0.05'], ['667900.0', '0.0119958'], ['668000.0', '4.74947449'], ['668102.0', '0.531'], ['668200.0', '0.30322147'], ['668208.0', '12.633'], ['668210.0', '0.2'], ['668230.0', '0.05822797'], ['668292.0', '7.679'], ['668295.0', '16.016'], ['668372.0', '0.1'], ['668392.0', '0.05'], ['668400.0', '1.0'], ['668500.0', '1.0'], ['668505.0', '0.07'], ['668760.0', '3.935'], ['668833.0', '4.2013'], ['668981.0', '0.1'], ['669000.0', '0.73917557'], ['669500.0', '0.125'], ['669580.0', '0.46828392'], ['669700.0', '0.31196351'], ['669753.0', '1.0'], ['669800.0', '0.07791656'], ['669900.0', '4.0'], ['669999.0', '37.65081327'], ['670000.0', '10.38161871'], ['670001.0', '1.0'], ['670122.0', '0.1'], ['670128.0', '0.2'], ['670208.0', '0.05'], ['670400.0', '0.00728088'], ['670500.0', '0.30639289'], ['670600.0', '0.00728095'], ['670800.0', '0.00728117'], ['670980.0', '35.0'], ['670999.0', '0.02'], ['671000.0', '0.8099811'], ['671151.0', '0.15'], ['671200.0', '0.00728118'], ['671400.0', '0.00728126'], ['671500.0', '0.39521999'], ['671586.0', '0.00728027'], ['671600.0', '0.00728134'], ['671777.0', '1.5'], ['671800.0', '1.0'], ['671999.0', '0.12'], ['672000.0', '0.865'], ['672005.0', '0.07'], ['672056.0', '1.0'], ['672219.0', '0.1'], ['672335.0', '1.0'], ['672800.0', '0.1'], ['672995.0', '0.52344'], ['672997.0', '0.00534'], ['672999.0', '0.02'], ['673000.0', '0.31'], ['673203.0', '1.0'], ['673500.0', '0.055'], ['673999.0', '0.02'], ['674000.0', '0.04'], ['674454.0', '0.12899698'], ['674473.0', '0.05'], ['674700.0', '0.01'], ['674800.0', '1.24007816'], ['674900.0', '0.51'], ['674999.0', '0.07'], ['675000.0', '25.16339896'], ['675505.0', '0.07'], ['675549.0', '0.0466'], ['675999.0', '0.02'], ['676000.0', '0.01'], ['676090.0', '0.005'], ['676400.0', '0.08727436'], ['676456.0', '0.005'], ['676500.0', '0.055'], ['676530.0', '0.005'], ['676623.0', '0.005'], ['676999.0', '0.02'], ['677000.0', '0.378'], ['677260.0', '0.7'], ['677777.0', '2.39484995'], ['677999.0', '0.04695974'], ['678000.0', '0.83882178'], ['678243.0', '0.01'], ['678410.0', '0.0956919'], ['678654.0', '0.005'], ['678900.0', '0.0066985'], ['678999.0', '0.02'], ['679000.0', '10.97488935'], ['679005.0', '0.07'], ['679010.0', '0.0066985'], ['679110.0', '0.05'], ['679111.0', '0.005'], ['679200.0', '0.00727632'], ['679398.0', '0.1'], ['679400.0', '0.00727653'], ['679431.0', '0.01']], bids: [['662215.0', '0.96'], ['662212.0', '1.0947'], ['662201.0', '0.1'], ['662200.0', '1.33775804'], ['662090.0', '0.005'], ['662007.0', '0.03'], ['661998.0', '0.05'], ['661996.0', '0.3'], ['661994.0', '0.908476'], ['661970.0', '0.00541'], ['661950.0', '0.3'], ['661947.0', '0.005'], ['661910.0', '2.0'], ['661900.0', '0.50670148'], ['661803.0', '0.005'], ['661776.0', '0.036'], ['661746.0', '0.1719'], ['661741.0', '0.00521'], ['661660.0', '0.005'], ['661600.0', '0.00727913'], ['661550.0', '0.00945801'], ['661516.0', '0.005'], ['661515.0', '0.00523'], ['661500.0', '0.04365143'], ['661400.0', '0.0072791'], ['661373.0', '0.005'], ['661235.0', '0.00513'], ['661230.0', '0.005'], ['661228.0', '0.00531'], ['661212.0', '0.00531266'], ['661211.0', '0.00511'], ['661200.0', '0.00727906'], ['661086.0', '0.005'], ['661027.0', '0.7505959'], ['660972.0', '0.5'], ['660943.0', '0.005'], ['660800.0', '0.005'], ['660776.0', '0.036'], ['660686.0', '17.4'], ['660685.0', '1.692'], ['660684.0', '1.915'], ['660679.0', '0.2'], ['660677.0', '0.498'], ['660676.0', '1.5'], ['660675.0', '1.5'], ['660657.0', '21.9809'], ['660656.0', '0.005'], ['660652.0', '0.00512'], ['660548.0', '1.0'], ['660513.0', '0.005'], ['660379.0', '0.078'], ['660370.0', '0.005'], ['660227.0', '0.005'], ['660085.0', '0.36'], ['660084.0', '0.005'], ['660062.0', '1.22'], ['660051.0', '0.61605764'], ['660050.0', '1.93223152'], ['660017.0', '0.51'], ['660002.0', '0.1'], ['660000.0', '0.48347505'], ['659941.0', '0.005'], ['659798.0', '0.005'], ['659776.0', '0.036'], ['659700.0', '0.02'], ['659655.0', '0.005'], ['659512.0', '0.005'], ['659370.0', '0.005'], ['659227.0', '0.005'], ['659200.0', '0.00544958'], ['659084.0', '0.005'], ['659030.0', '0.05'], ['658942.0', '0.005'], ['658870.0', '0.27'], ['658860.0', '3.5'], ['658800.0', '0.00531269'], ['658799.0', '0.005'], ['658776.0', '0.036'], ['658662.0', '0.005'], ['658657.0', '0.005'], ['658579.0', '0.1'], ['658578.0', '0.91249464'], ['658514.0', '0.005'], ['658500.0', '0.6306'], ['658480.0', '0.01'], ['658387.0', '0.34019521'], ['658385.0', '0.00522'], ['658371.0', '0.005'], ['658363.0', '0.01'], ['658229.0', '0.005'], ['658087.0', '0.005'], ['658005.0', '0.07'], ['658000.0', '4.06737947'], ['657944.0', '0.005'], ['657802.0', '0.005'], ['657776.0', '0.036'], ['657660.0', '0.005'], ['657610.0', '0.1'], ['657600.0', '6.05252599'], ['657518.0', '0.005'], ['657500.0', '0.3003'], ['657375.0', '0.005'], ['657233.0', '0.005'], ['657091.0', '0.005'], ['657000.0', '0.41822825'], ['656949.0', '0.005'], ['656807.0', '0.005'], ['656800.0', '0.5'], ['656776.0', '0.036'], ['656665.0', '0.005'], ['656600.0', '0.1'], ['656544.0', '0.1'], ['656523.0', '0.005'], ['656491.0', '0.00543'], ['656489.0', '0.00533'], ['656381.0', '0.005'], ['656240.0', '0.005'], ['656132.0', '0.4'], ['656098.0', '0.005'], ['656092.0', '0.10005'], ['656001.0', '0.2'], ['656000.0', '2.0'], ['655956.0', '0.005'], ['655900.0', '11.0'], ['655815.0', '0.005'], ['655724.0', '30.0'], ['655673.0', '0.005'], ['655500.0', '1.3548'], ['655490.0', '1.08139382'], ['655430.0', '0.50025'], ['655390.0', '0.005'], ['655300.0', '0.5'], ['655248.0', '0.005'], ['655215.0', '0.1652155'], ['655200.0', '0.7005'], ['655111.0', '0.15'], ['655107.0', '0.018498'], ['655100.0', '1.1006'], ['655050.0', '1.93812666'], ['655012.0', '0.58856064'], ['655001.0', '2.002'], ['655000.0', '2.57345973'], ['654965.0', '0.005'], ['654824.0', '0.005'], ['654804.0', '0.2'], ['654803.0', '0.64585837'], ['654800.0', '0.4002'], ['654776.0', '0.036'], ['654683.0', '0.005'], ['654541.0', '0.005'], ['654505.0', '0.07'], ['654500.0', '0.04131076'], ['654400.0', '0.005'], ['654259.0', '0.005'], ['654118.0', '0.005'], ['654000.0', '1.35512494'], ['653977.0', '0.005'], ['653835.0', '0.005'], ['653800.0', '0.30842679'], ['653776.0', '0.036'], ['653700.0', '0.5'], ['653694.0', '0.005'], ['653681.0', '0.99186459'], ['653632.0', '0.021'], ['653625.0', '1.0'], ['653624.0', '35.0'], ['653584.0', '0.10005'], ['653554.0', '0.005'], ['653500.0', '4.68186677'], ['653413.0', '0.005'], ['653356.0', '24.0843669'], ['653295.0', '0.01086845'], ['653272.0', '0.005'], ['653200.0', '0.00562'], ['653131.0', '0.005'], ['653000.0', '2.84656761'], ['652990.0', '0.03562834'], ['652850.0', '1.0005'], ['652849.0', '0.005'], ['652720.0', '0.5'], ['652708.0', '0.005'], ['652707.0', '1.0'], ['652700.0', '30.03000002'], ['652600.0', '0.1'], ['652568.0', '0.005'], ['652500.0', '0.04'], ['652427.0', '0.005'], ['652400.0', '5.34678155'], ['652287.0', '0.005'], ['652222.0', '0.01'], ['652192.0', '0.005'], ['652146.0', '0.005'], ['652119.0', '0.5'], ['652100.0', '1.0'], ['652067.0', '0.1'], ['652006.0', '0.005'], ['652001.0', '0.38384884'], ['652000.0', '5.9358419'], ['651865.0', '0.005'], ['651812.0', '3.0015']] });
  coincheck.post('/api/exchange/orders', 'pair=btc_jpy&order_type=leverage_buy&amount=0.005&rate=300000').reply(200, { success: true, id: 340622252, amount: '0.005', rate: '300000.0', order_type: 'leverage_buy', pair: 'btc_jpy', created_at: '2017-10-22T07:52:12.517Z', market_buy_amount: null, stop_loss_rate: null });
  coincheck.delete('/api/exchange/orders/340809935').reply(200, { success: true, id: 340809935 });
  coincheck.get('/api/exchange/orders/opens').reply(200, { success: true, orders: [{ id: 347772269, order_type: 'buy', rate: '300000.0', pair: 'btc_jpy', pending_amount: '0.005', pending_market_buy_amount: null, stop_loss_rate: null, created_at: '2017-10-24T11:17:27.000Z' }] });
  coincheck.get('/api/exchange/orders/transactions_pagination?limit=20&order=desc').reply(200, { success: true, pagination: { limit: 20, order: 'desc', starting_after: null, ending_before: null }, data: [{ id: 60254118, order_id: 340598284, created_at: '2017-10-22T07:43:18.000Z', funds: { btc: '-0.005', jpy: '3371.125' }, pair: 'btc_jpy', rate: '674225.0', fee_currency: null, fee: '0.0', liquidity: 'T', side: 'sell' }, { id: 60253344, order_id: 340595769, created_at: '2017-10-22T07:42:30.000Z', funds: { btc: '0.005', jpy: '-3382.36' }, pair: 'btc_jpy', rate: '676472.0', fee_currency: null, fee: '0.0', liquidity: 'T', side: 'buy' }, { id: 60217196, order_id: 340460505, created_at: '2017-10-22T06:55:46.000Z', funds: { btc: '-0.0264391', jpy: '17565.609258' }, pair: 'btc_jpy', rate: '664380.0', fee_currency: null, fee: '0.0', liquidity: 'T', side: 'sell' }, { id: 60198060, order_id: 340380749, created_at: '2017-10-22T06:26:27.000Z', funds: { btc: '0.0264391', jpy: '-17532.1373574' }, pair: 'btc_jpy', rate: '663114.0', fee_currency: null, fee: '0.0', liquidity: 'T', side: 'buy' }, { id: 60196501, order_id: 340367172, created_at: '2017-10-22T06:25:07.000Z', funds: { btc: '-0.02646992', jpy: '17470.1472' }, pair: 'btc_jpy', rate: '660000.0', fee_currency: null, fee: '0.0', liquidity: 'M', side: 'sell' }, { id: 60194500, order_id: 340366746, created_at: '2017-10-22T06:21:43.000Z', funds: { btc: '0.005', jpy: '-3290.0' }, pair: 'btc_jpy', rate: '658000.0', fee_currency: null, fee: '0.0', liquidity: 'T', side: 'buy' }, { id: 60194498, order_id: 340366746, created_at: '2017-10-22T06:21:43.000Z', funds: { btc: '0.013', jpy: '-8554.0' }, pair: 'btc_jpy', rate: '658000.0', fee_currency: null, fee: '0.0', liquidity: 'T', side: 'buy' }, { id: 60194497, order_id: 340366746, created_at: '2017-10-22T06:21:43.000Z', funds: { btc: '0.00846992', jpy: '-5573.20736' }, pair: 'btc_jpy', rate: '658000.0', fee_currency: null, fee: '0.0', liquidity: 'T', side: 'buy' }, { id: 60192725, order_id: 340358309, created_at: '2017-10-22T06:20:02.000Z', funds: { btc: '-0.02638018', jpy: '17384.53862' }, pair: 'btc_jpy', rate: '659000.0', fee_currency: null, fee: '0.0', liquidity: 'M', side: 'sell' }, { id: 60188314, order_id: 340347768, created_at: '2017-10-22T06:15:37.000Z', funds: { btc: '0.02638018', jpy: '-17351.19407248' }, pair: 'btc_jpy', rate: '657736.0', fee_currency: null, fee: '0.0', liquidity: 'T', side: 'buy' }, { id: 60187543, order_id: 340343952, created_at: '2017-10-22T06:14:28.000Z', funds: { btc: '-0.005', jpy: '3305.0' }, pair: 'btc_jpy', rate: '661000.0', fee_currency: null, fee: '0.0', liquidity: 'M', side: 'sell' }, { id: 60187540, order_id: 340344075, created_at: '2017-10-22T06:14:28.000Z', funds: { btc: '-0.005', jpy: '3305.0' }, pair: 'btc_jpy', rate: '661000.0', fee_currency: null, fee: '0.0', liquidity: 'M', side: 'sell' }, { id: 60187521, order_id: 340343675, created_at: '2017-10-22T06:14:28.000Z', funds: { btc: '-0.02102674', jpy: '13898.67514' }, pair: 'btc_jpy', rate: '661000.0', fee_currency: null, fee: '0.0', liquidity: 'M', side: 'sell' }, { id: 60183870, order_id: 340328748, created_at: '2017-10-22T06:08:57.000Z', funds: { btc: '0.02102674', jpy: '-13864.38052706' }, pair: 'btc_jpy', rate: '659369.0', fee_currency: null, fee: '0.0', liquidity: 'T', side: 'buy' }, { id: 60182224, order_id: 340323654, created_at: '2017-10-22T06:07:12.000Z', funds: { btc: '0.005005', jpy: '-3295.74245' }, pair: 'btc_jpy', rate: '658490.0', fee_currency: null, fee: '0.0', liquidity: 'T', side: 'buy' }, { id: 60182184, order_id: 340323466, created_at: '2017-10-22T06:07:08.000Z', funds: { btc: '0.005005', jpy: '-3297.719425' }, pair: 'btc_jpy', rate: '658885.0', fee_currency: null, fee: '0.0', liquidity: 'T', side: 'buy' }, { id: 60182130, order_id: 340323117, created_at: '2017-10-22T06:07:02.000Z', funds: { btc: '0.005005', jpy: '-3298.295' }, pair: 'btc_jpy', rate: '659000.0', fee_currency: null, fee: '0.0', liquidity: 'T', side: 'buy' }, { id: 60182052, order_id: 340322957, created_at: '2017-10-22T06:06:59.000Z', funds: { btc: '0.005005', jpy: '-3296.77348' }, pair: 'btc_jpy', rate: '658696.0', fee_currency: null, fee: '0.0', liquidity: 'T', side: 'buy' }, { id: 60181994, order_id: 340322678, created_at: '2017-10-22T06:06:54.000Z', funds: { btc: '-0.005', jpy: '3293.365' }, pair: 'btc_jpy', rate: '658673.0', fee_currency: null, fee: '0.0', liquidity: 'T', side: 'sell' }, { id: 60181944, order_id: 340322425, created_at: '2017-10-22T06:06:49.000Z', funds: { btc: '0.005005', jpy: '-3298.14485' }, pair: 'btc_jpy', rate: '658970.0', fee_currency: null, fee: '0.0', liquidity: 'T', side: 'buy' }] });
  coincheck.get('/api/exchange/orders/opens').reply(200, { "success": true, "orders": [] });
  coincheck.get('/api/exchange/orders/transactions_pagination?order=desc&limit=20').reply(200, { "success": true, "pagination": { "limit": 20, "order": "desc", "starting_after": null, "ending_before": null }, "data": [{ "id": 64395948, "order_id": 361173028, "created_at": "2017-10-28T01:20:39.000Z", "funds": { "btc": "0.01", "jpy": "-6629.07" }, "pair": "btc_jpy", "rate": "662907.0", "fee_currency": null, "fee": "0.0", "liquidity": "T", "side": "buy" }, { "id": 60254118, "order_id": 340598284, "created_at": "2017-10-22T07:43:18.000Z", "funds": { "btc": "-0.005", "jpy": "3371.125" }, "pair": "btc_jpy", "rate": "674225.0", "fee_currency": null, "fee": "0.0", "liquidity": "T", "side": "sell" }, { "id": 60253344, "order_id": 340595769, "created_at": "2017-10-22T07:42:30.000Z", "funds": { "btc": "0.005", "jpy": "-3382.36" }, "pair": "btc_jpy", "rate": "676472.0", "fee_currency": null, "fee": "0.0", "liquidity": "T", "side": "buy" }, { "id": 60217196, "order_id": 340460505, "created_at": "2017-10-22T06:55:46.000Z", "funds": { "btc": "-0.0264391", "jpy": "17565.609258" }, "pair": "btc_jpy", "rate": "664380.0", "fee_currency": null, "fee": "0.0", "liquidity": "T", "side": "sell" }, { "id": 60198060, "order_id": 340380749, "created_at": "2017-10-22T06:26:27.000Z", "funds": { "btc": "0.0264391", "jpy": "-17532.1373574" }, "pair": "btc_jpy", "rate": "663114.0", "fee_currency": null, "fee": "0.0", "liquidity": "T", "side": "buy" }, { "id": 60196501, "order_id": 340367172, "created_at": "2017-10-22T06:25:07.000Z", "funds": { "btc": "-0.02646992", "jpy": "17470.1472" }, "pair": "btc_jpy", "rate": "660000.0", "fee_currency": null, "fee": "0.0", "liquidity": "M", "side": "sell" }, { "id": 60194500, "order_id": 340366746, "created_at": "2017-10-22T06:21:43.000Z", "funds": { "btc": "0.005", "jpy": "-3290.0" }, "pair": "btc_jpy", "rate": "658000.0", "fee_currency": null, "fee": "0.0", "liquidity": "T", "side": "buy" }, { "id": 60194498, "order_id": 340366746, "created_at": "2017-10-22T06:21:43.000Z", "funds": { "btc": "0.013", "jpy": "-8554.0" }, "pair": "btc_jpy", "rate": "658000.0", "fee_currency": null, "fee": "0.0", "liquidity": "T", "side": "buy" }, { "id": 60194497, "order_id": 340366746, "created_at": "2017-10-22T06:21:43.000Z", "funds": { "btc": "0.00846992", "jpy": "-5573.20736" }, "pair": "btc_jpy", "rate": "658000.0", "fee_currency": null, "fee": "0.0", "liquidity": "T", "side": "buy" }, { "id": 60192725, "order_id": 340358309, "created_at": "2017-10-22T06:20:02.000Z", "funds": { "btc": "-0.02638018", "jpy": "17384.53862" }, "pair": "btc_jpy", "rate": "659000.0", "fee_currency": null, "fee": "0.0", "liquidity": "M", "side": "sell" }, { "id": 60188314, "order_id": 340347768, "created_at": "2017-10-22T06:15:37.000Z", "funds": { "btc": "0.02638018", "jpy": "-17351.19407248" }, "pair": "btc_jpy", "rate": "657736.0", "fee_currency": null, "fee": "0.0", "liquidity": "T", "side": "buy" }, { "id": 60187543, "order_id": 340343952, "created_at": "2017-10-22T06:14:28.000Z", "funds": { "btc": "-0.005", "jpy": "3305.0" }, "pair": "btc_jpy", "rate": "661000.0", "fee_currency": null, "fee": "0.0", "liquidity": "M", "side": "sell" }, { "id": 60187540, "order_id": 340344075, "created_at": "2017-10-22T06:14:28.000Z", "funds": { "btc": "-0.005", "jpy": "3305.0" }, "pair": "btc_jpy", "rate": "661000.0", "fee_currency": null, "fee": "0.0", "liquidity": "M", "side": "sell" }, { "id": 60187521, "order_id": 340343675, "created_at": "2017-10-22T06:14:28.000Z", "funds": { "btc": "-0.02102674", "jpy": "13898.67514" }, "pair": "btc_jpy", "rate": "661000.0", "fee_currency": null, "fee": "0.0", "liquidity": "M", "side": "sell" }, { "id": 60183870, "order_id": 340328748, "created_at": "2017-10-22T06:08:57.000Z", "funds": { "btc": "0.02102674", "jpy": "-13864.38052706" }, "pair": "btc_jpy", "rate": "659369.0", "fee_currency": null, "fee": "0.0", "liquidity": "T", "side": "buy" }, { "id": 60182224, "order_id": 340323654, "created_at": "2017-10-22T06:07:12.000Z", "funds": { "btc": "0.005005", "jpy": "-3295.74245" }, "pair": "btc_jpy", "rate": "658490.0", "fee_currency": null, "fee": "0.0", "liquidity": "T", "side": "buy" }, { "id": 60182184, "order_id": 340323466, "created_at": "2017-10-22T06:07:08.000Z", "funds": { "btc": "0.005005", "jpy": "-3297.719425" }, "pair": "btc_jpy", "rate": "658885.0", "fee_currency": null, "fee": "0.0", "liquidity": "T", "side": "buy" }, { "id": 60182130, "order_id": 340323117, "created_at": "2017-10-22T06:07:02.000Z", "funds": { "btc": "0.005005", "jpy": "-3298.295" }, "pair": "btc_jpy", "rate": "659000.0", "fee_currency": null, "fee": "0.0", "liquidity": "T", "side": "buy" }, { "id": 60182052, "order_id": 340322957, "created_at": "2017-10-22T06:06:59.000Z", "funds": { "btc": "0.005005", "jpy": "-3296.77348" }, "pair": "btc_jpy", "rate": "658696.0", "fee_currency": null, "fee": "0.0", "liquidity": "T", "side": "buy" }, { "id": 60181994, "order_id": 340322678, "created_at": "2017-10-22T06:06:54.000Z", "funds": { "btc": "-0.005", "jpy": "3293.365" }, "pair": "btc_jpy", "rate": "658673.0", "fee_currency": null, "fee": "0.0", "liquidity": "T", "side": "sell" }] });
  coincheck.get('/api/exchange/leverage/positions?limit=20&status=open&order=desc').reply(200, {"success":true,"pagination":{"limit":20,"order":"desc","starting_after":null,"ending_before":null},"data":[{"id":2398142,"pair":"btc_jpy","status":"open","created_at":"2017-11-02T12:10:43.000Z","closed_at":null,"open_rate":"785626.0","closed_rate":null,"amount":"0.010005","all_amount":"0.01","side":"sell","pl":"-2.837585","new_order":{"id":380703207,"side":"sell","rate":"785500.0","amount":"0.01","pending_amount":"0","status":"complete","created_at":"2017-11-02T12:10:43.000Z"},"close_orders":[]},{"id":2389484,"pair":"btc_jpy","status":"open","created_at":"2017-11-02T11:15:16.000Z","closed_at":null,"open_rate":"857716.0","closed_rate":null,"amount":"0.030015","all_amount":"0.03","side":"sell","pl":"2154.201045","new_order":{"id":380515841,"side":"sell","rate":"857600.0","amount":"0.03","pending_amount":"0","status":"complete","created_at":"2017-11-02T11:15:16.000Z"},"close_orders":[]},{"id":2389468,"pair":"btc_jpy","status":"open","created_at":"2017-11-02T11:15:04.000Z","closed_at":null,"open_rate":"858083.0","closed_rate":null,"amount":"0.030015","all_amount":"0.03","side":"sell","pl":"2165.197245","new_order":{"id":380515194,"side":"sell","rate":"857400.0","amount":"0.03","pending_amount":"0","status":"complete","created_at":"2017-11-02T11:15:04.000Z"},"close_orders":[]},{"id":2389441,"pair":"btc_jpy","status":"open","created_at":"2017-11-02T11:14:55.000Z","closed_at":null,"open_rate":"858500.0","closed_rate":null,"amount":"0.030015","all_amount":"0.03","side":"sell","pl":"2177.707245","new_order":{"id":380514584,"side":"sell","rate":"858500.0","amount":"0.03","pending_amount":"0.0","status":"complete","created_at":"2017-11-02T11:14:52.000Z"},"close_orders":[]},{"id":2389415,"pair":"btc_jpy","status":"open","created_at":"2017-11-02T11:14:43.000Z","closed_at":null,"open_rate":"858503.0","closed_rate":null,"amount":"0.030015","all_amount":"0.03","side":"sell","pl":"2177.79612","new_order":{"id":380514033,"side":"sell","rate":"858500.0","amount":"0.03","pending_amount":"0.0","status":"complete","created_at":"2017-11-02T11:14:43.000Z"},"close_orders":[]},{"id":2389078,"pair":"btc_jpy","status":"open","created_at":"2017-11-02T11:11:11.000Z","closed_at":null,"open_rate":"857541.0","closed_rate":null,"amount":"0.010005","all_amount":"0.01","side":"sell","pl":"716.312415","new_order":{"id":380501854,"side":"sell","rate":"857500.0","amount":"0.01","pending_amount":"0","status":"complete","created_at":"2017-11-02T11:11:11.000Z"},"close_orders":[]}]});

}

export default nocksetup;