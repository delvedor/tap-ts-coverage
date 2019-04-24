import { test } from 'tap'
import sum from '../lib'

test('Should return the sum', t => {
  t.strictEqual(sum(1, 1), 2)
  t.end()
})
