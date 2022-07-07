/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Zelos specific objects representing elements in a row of a
 * rendered block.
 */

/**
 * Zelos specific objects representing elements in a row of a
 * rendered block.
 * @class
 */
import * as goog from '../../../../closure/goog/goog';
goog.declareModuleId('Blockly.zelos.RightConnectionShape');

/* eslint-disable-next-line no-unused-vars */
import {ConstantProvider} from '../../../renderers/common/constants';
import {Measurable} from '../../../renderers/measurables/base';
import {Types} from '../../../renderers/measurables/types';


/**
 * An object containing information about the space a right connection shape
 * takes up during rendering.
 * @alias Blockly.zelos.RightConnectionShape
 */
export class RightConnectionShape extends Measurable {
  // Size is dynamic
  override height = 0;
  override width = 0;

  /**
   * @param constants The rendering constants provider.
   * @internal
   */
  constructor(constants: ConstantProvider) {
    super(constants);
    // AnyDuringMigration because:  Property 'getType' does not exist on type
    // 'typeof Types'.
    this.type |= (Types as AnyDuringMigration).getType('RIGHT_CONNECTION');
  }
}