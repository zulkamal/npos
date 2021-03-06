'use strict';

var symbols = require('./symbols');

var rules = module.exports = {};

rules[symbols.FF] = 0;
rules[symbols.CAN] = 0;

/*************************************************
 * ESC
 *************************************************/
// fn, skip size, dynamic size
var ESC = rules[symbols.ESC] = {
  '!': 1,
  '$': 2,
  '%': 1,
  '&': [0, 'ycc'],
  '*': [0, 'bitimage'],
  '-': 1,
  '2': 0,
  '3': 1,
  '=': 1,
  '?': 1,
  '@': 0,
  'D': [0, 'escd'],
  'E': 1,
  'G': 1,
  'J': 1,
  'L': 0,
  'M': 1,
  'R': 1,
  'S': 0,
  'T': 1,
  'V': 1,
  'W': 8,
  '\\': 2,
  'a': 1,
  'c': 2,
  'd': 1,
  'p': 3,
  'r': 0, // Select print color
  't': 1,
  '{': 1,
  'B': 2, // Unknown Command
  'Z': [3, 'd16'],
  'i': 0, // Obsolete
};

ESC[symbols.FF] = 0;
ESC[symbols.SP] = 1;

/*************************************************
 * DLE
 *************************************************/
var DLE = rules[symbols.DLE] = {};
DLE[symbols.C_EOT] = 1;
DLE[symbols.C_END] = 1;
DLE[symbols.C_DC41] = 2;
DLE[symbols.C_DC42] = 2;
DLE[symbols.C_DC48] = 7;

/*************************************************
 * FS
 *************************************************/
rules[symbols.FS] = {
  'g1': [5, 'd16'],
  'g2': 7,
  '!': 1,
  '&': 0,
  '-': 1,
  '.': 0,
  '2': 74,
  'C': 1,
  'S': 2,
  'W': 1,
  'p': 2,
  'q': [0, 'fsq']
};

/*************************************************
 * GS
 *************************************************/
var GS = rules[symbols.GS] = {
  '!': 1,
  '$': 2,
  '(A': [0, 'd16'],
  '(D': [0, 'd16'],
  '(E': [0, 'd16'],
  '(H': [0, 'd16'],
  '(K': [0, 'd16'],
  '(L': [0, 'd16'],
  '8L': [0, 'd32'],
  '(N': [0, 'd16'],
  '*': [0, 'xy'],
  '/': 1,
  ':': 0,
  'B': 1,
  'C0': 2,
  'C1': 6,
  'C2': 2,
  'C;': 10,
  'E': 1,
  'H': 1,
  'I': 1,
  'L': 2,
  'P': 2,
  'T': 1, // Set print position to the beginning of print line
  'S': 0, // Unknown Command
  'U': 3, // Unknown Command
  'V': [0, 'gsV'],
  'W': 2,
  '\\': 2,
  '^': 3,
  'a': 1,
  'b': 1,
  'f': 1,
  'g': 4,
  'h': 1,
  'k': [0, 'gsk'],
  'r': 1,
  'w': 1,
  'v0': [1, 'gsv0'],
  '#': 1,

  // SPRT code 2d type set
  'Z': 1
};

GS[symbols.FF] = 0;
