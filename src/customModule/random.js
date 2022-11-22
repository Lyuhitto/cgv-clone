// import React from 'react'

export function randomValue(min, max) {
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
}
