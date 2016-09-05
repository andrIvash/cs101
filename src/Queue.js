const createSinglyLinkedList = require('./SinglyLinkedList')
/**
 * Queue is a first in first out (FIFO) abstract data type (opposite to Stack).
 * The first element added to the queue will be the first one to be removed.
 *
 * Application:
 * Queues are used to process buffers and events.
 *
 * @param {Array} input initial queue data
 */
module.exports = (input = []) => {
  const list = createSinglyLinkedList()

  initialize(input)
  /** Public interface */
  return {
    size,
    peek,
    enqueue,
    dequeue
  }

  /**
   * Add all elements of given array to the queue.
   *
   * Performance: O(n)
   * @param {Array} input initial queue data
   */
  function initialize (input) {
    input.forEach(enqueue)
  }

  /**
   * Get current queue size.
   *
   * Performance: O(1)
   * @returns {number}
   */
  function size () {
    return list.size()
  }

  /**
   * Return value of the front element without removing it.
   *
   * Performance: O(1)
   * @returns {*}
   */
  function peek () {
    return list.size() > 0 ? list.headNode().data : null
  }

  /**
   * Add new item to the queue.
   *
   * Performance: O(1)
   * @param {*} item
   */
  function enqueue (item) {
    list.addLast(item)
  }

  /**
   * Remove and return first item in the queue.
   *
   * Performance: O(1)
   * @returns {*}
   */
  function dequeue () {
    if (list.size() === 0) throw RangeError("Can't dequeue empty queue.")
    return list.removeFirst()
  }
}
