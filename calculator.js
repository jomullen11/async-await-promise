/**
 * Create a variadic function (function that accepts a variable amount of values) and uses
 * reduce function to sum the values and return the reduced value as a promise.
 *
 * Use only async/await
 *
 * @param {Array<string>} values
 * @returns {Promise<Number>}
 */
const add = async (...values) => {
    const calc = new Promise((resolve, reject) => {
         resolve([...values].reduce((acc, curVal) => acc + curVal))
        })
         return await calc
    }

/**
 * Create a variadic function (function that accepts a variable amount of values) and uses
 * reduce function to subtract values and return the reduced value as a promise.
 *
 * Use only async/await
 *
 * @param {Array<string>} values
 * @returns {Promise<Number>}
 */
const subtract = async (...values) => {
    const sub = new Promise((resolve, reject) => {
        resolve([...values].reduce((acc, curVal) => acc + curVal) * -1)
    })
    return await sub
}
/**
 * Export out the add, and subtract
 */
export default {
  add, subtract
}
