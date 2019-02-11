import { resolve } from "url";

/**
 * Create a string with your name, wrap it with a promise, and return it.
 */
export const resolvingValues = () => {
    const nameFunction = new Promise((resolve, reject) => {
     setTimeout (() => {
        resolve('Jordan')
     }, 1000)
    });
    return nameFunction
  } 

/**
 * Return a rejected promise that has 'Doh' as the message
 */
export const rejectedPromise = () => {
  const rejectFunction = new Promise ((resolve, reject) => {
    reject('Doh')
  })
  
  return rejectFunction
}

/**
 * For this function, we're going to some code that conditionally checks the number (parameter)
 *  - When the number is positive, resolve the promise with the number
 *  - When the number is negative, reject the promise, provide the number as the rejection message
 */
  export const conditionallyReject = (number) => {
    var posNeg = new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (Math.sign(number) == 1) {
        resolve(number)
      } else if (Math.sign(number) == -1) {
        reject(number)
      }}, 1000)
    })
  return posNeg
}


const REPLACE_WITH_CODE = false
