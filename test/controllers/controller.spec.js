import 'babel-polyfill'
import { expect } from 'chai'
import addOp from '../../controller/operations'

describe('Math', () => {
  describe('#add function', () => {
    it('should return the result number from the two arguments', () => {
      let result = addOp(1, 2)
      expect(result).to.equal(3)
    })
  })
})