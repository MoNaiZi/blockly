/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Wrapper functions around JS functions for showing
 * alert/confirmation dialogs.
 */

/**
 * Wrapper functions around JS functions for showing alert/confirmation dialogs.
 * @namespace Blockly.dialog
 */
import * as goog from '../closure/goog/goog';
goog.declareModuleId('Blockly.dialog');


let alertImplementation = function(
    message: AnyDuringMigration, opt_callback: AnyDuringMigration) {
  window.alert(message);
  if (opt_callback) {
    opt_callback();
  }
};

let confirmImplementation = function(
    message: AnyDuringMigration, callback: AnyDuringMigration) {
  callback(window.confirm(message));
};

let promptImplementation = function(
    message: AnyDuringMigration, defaultValue: AnyDuringMigration,
    callback: AnyDuringMigration) {
  callback(window.prompt(message, defaultValue));
};

/**
 * Wrapper to window.alert() that app developers may override via setAlert to
 * provide alternatives to the modal browser window.
 * @param message The message to display to the user.
 * @param opt_callback The callback when the alert is dismissed.
 * @alias Blockly.dialog.alert
 */
export function alert(
    message: string, opt_callback?: () => AnyDuringMigration) {
  alertImplementation(message, opt_callback);
}

/**
 * Sets the function to be run when Blockly.dialog.alert() is called.
 * @param alertFunction The function to be run.
 * @see Blockly.dialog.alert
 * @alias Blockly.dialog.setAlert
 */
export function setAlert(
    alertFunction: (p1: string, p2?: () => AnyDuringMigration) =>
        AnyDuringMigration) {
  alertImplementation = alertFunction;
}

/**
 * Wrapper to window.confirm() that app developers may override via setConfirm
 * to provide alternatives to the modal browser window.
 * @param message The message to display to the user.
 * @param callback The callback for handling user response.
 * @alias Blockly.dialog.confirm
 */
export function confirm(
    message: string, callback: (p1: boolean) => AnyDuringMigration) {
  confirmImplementation(message, callback);
}

/**
 * Sets the function to be run when Blockly.dialog.confirm() is called.
 * @param confirmFunction The function to be run.
 * @see Blockly.dialog.confirm
 * @alias Blockly.dialog.setConfirm
 */
export function setConfirm(
    confirmFunction: (p1: string, p2: (p1: boolean) => AnyDuringMigration) =>
        AnyDuringMigration) {
  confirmImplementation = confirmFunction;
}

/**
 * Wrapper to window.prompt() that app developers may override via setPrompt to
 * provide alternatives to the modal browser window. Built-in browser prompts
 * are often used for better text input experience on mobile device. We strongly
 * recommend testing mobile when overriding this.
 * @param message The message to display to the user.
 * @param defaultValue The value to initialize the prompt with.
 * @param callback The callback for handling user response.
 * @alias Blockly.dialog.prompt
 */
export function prompt(
    message: string, defaultValue: string,
    callback: (p1: string|null) => AnyDuringMigration) {
  promptImplementation(message, defaultValue, callback);
}

/**
 * Sets the function to be run when Blockly.dialog.prompt() is called.
 * @param promptFunction The function to be run.
 * @see Blockly.dialog.prompt
 * @alias Blockly.dialog.setPrompt
 */
export function setPrompt(
    promptFunction:
        (p1: string, p2: string, p3: (p1: string|null) => AnyDuringMigration) =>
            AnyDuringMigration) {
  promptImplementation = promptFunction;
}