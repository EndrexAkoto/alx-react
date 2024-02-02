// task_3/dashboard/src/utils.test.js
import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

describe('Utils Tests', () => {
  // Test for getFullYear
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear()
    expect(getFullYear()).toEqual(currentYear)
  })

  // Test for getFooterCopy
  it('should return correct string when isIndex is true', () => {
    const result = getFooterCopy(true)
    expect(result).toEqual('Holberton School')
  })

  it('should return correct string when isIndex is false', () => {
    const result = getFooterCopy(false)
    expect(result).toEqual('Holberton School main dashboard')
  })

  // Test for getLatestNotification
  it('should return the correct string for getLatestNotification', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD'
    expect(getLatestNotification()).toEqual(expectedString)
  })

  // Additional test for another function
  // it('should test another function', () => {
  //   const result = anotherFunction();
  //   expect(result).toBe('expectedValue');
  // });
})
