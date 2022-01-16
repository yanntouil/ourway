


/**
 * getSlideWidth
 * @param {Number} wrapperWidth 
 * @param {Number} cols 
 * @param {Number} gap 
 */
 export const getSlideWidth = (wrapperWidth, columns = 1, gap = 0) =>  (wrapperWidth - (columns - 1) * gap) / columns

 /**
  * getTrackWidth
  * @param {Number} slidesCount 
  * @param {Number} slideWidth 
  * @param {Number} gap 
  */
 export const getTrackWidth = (slidesCount, slideWidth, gap = 0) => slidesCount * slideWidth + (slidesCount - 1) * gap
 
 /**
  * getDragConstraintsLeft
  * @param {Number} wrapperWidth 
  * @param {Number} trackWidth 
  */
 export const getDragConstraintsLeft = (wrapperWidth, trackWidth) => wrapperWidth - trackWidth
 
 /**
  * handleDragEnd
  * @param {{offset: {x: Number}, velocity: {x: Number}}} info PanInfo
  * @param {Number} wrapperWidth
  * @param {Number} index
  * @param {Function} previous
  * @param {Function} next
  * @param {Function} goTo
  */
 export const handleDragEnd = (info, wrapperWidth, index, count, goTo) => {
     const velocityRatio = 0.4
     const swipeConfidenceThreshold = wrapperWidth / 3//
     const offset = info.offset.x * velocityRatio
     const correctedVelocity = info.velocity.x * velocityRatio
     const direction = correctedVelocity < 0 || offset < 0 ? 1 : -1
     const endOffset = direction > 0 ? Math.min(correctedVelocity, offset) : Math.max(correctedVelocity, offset)
     if (endOffset > swipeConfidenceThreshold) goTo((index > 0) ? index - 1 : index)
     else if (endOffset < -swipeConfidenceThreshold) goTo((index < count - 1) ? index + 1 : index)
     else goTo(index)
 }
 