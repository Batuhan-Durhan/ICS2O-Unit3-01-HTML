// Copyright (c) 2022 Batuhan Durhan All rights reserved
//
// Created by: Batuhan Durhan
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of trapezoid.
 */
function calculate() {
  // input
  const sidea = parseInt(document.getElementById('sidea-of-trapezoid').value)
  const base = parseInt(document.getElementById('base-of-trapezoid').value)
  const sidec = parseInt(document.getElementById('sidec-of-trapezoid').value)
  const sided = parseInt(document.getElementById('sided-of-trapezoid').value)
  const height = parseInt(document.getElementById('height-of-trapezoid').value)

  // process
  const area = (sidea + base) / 2 * height
  const perimeter = sidea + base + sidec + sided

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}
