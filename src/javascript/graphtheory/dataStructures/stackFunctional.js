//stack implementation, copied almost completely from here https://non-traditional.dev/converting-object-oriented-code-to-functional-in-javascript-f3d50cd06d93
//Uses currying for implementation.

// head is an object with a value and a next.  
// A stack with 1 value of 42 will have {value: 42: next: undefined}
// A stack with 2 values of 42, 84 will have {value: 42: next: {value: 84, next: undefined}}
// ...

/**
 * Pass stack to get head value
 * @param {*} head 
 * @returns the value or undefined
 */
export function stackPeek(head) {
  return head?.value
}

/**
 * Remove a value. head is a stack, result is the stack after removal, e.g. {value: 1, next: undefined}
 * @param {*} head 
 * @returns 
 */
export function stackPop(head) {
  const safeNode = head ?? {} // if head is null, safe node is empty object
  return safeNode.next
}

/**
 * Push a value on to the stack, head is a stack
 * @param {*} head 
 * @returns 
 */
export function stackPush(head) {
  return value => {
    const node = {
      value,
      next: head,
    }
    return node
  }
}

/**
 * 
 * @param {*} head 
 * @returns 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators for tutorial on iterators
 */
export function stackGetIterator(head) {
  return (function* () {
    let safeNode = head ?? {}
    while (safeNode.value) {
      yield safeNode.value
      safeNode = safeNode.next ?? {}
    }
  })()
}

