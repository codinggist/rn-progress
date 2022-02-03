declare module '@@codinggist/rn-progress' {
  import React from 'react';

  /**
   * Properties for 'ProgressBarPropTypes' component
   *
   * @export
   * @interface ProgressBarPropTypes
   */
  export interface ProgressBarPropTypes {
    /**
     * Width of ProgressBar
     *
     * @type {number | string}
     * @memberof ProgressBarPropTypes
     * @default 100%
     */
    width?: number | string;

    /**
     * Height of ProgressBar
     *
     * @type {number | string}
     * @memberof ProgressBarPropTypes
     * @default 20
     */
    height?: number | string;

    /**
     * Stroke/Border width of ProgressBar
     *
     * @type {number}
     * @memberof ProgressBarPropTypes
     * @default 1
     */
    strokeWidth?: number;

    /**
     * Stroke color of ProgressBar
     *
     * @type {string}
     * @memberof ProgressBarPropTypes
     * @default #1B5FAA
     */
    strokeColor?: string;

    /**
     * Color of ProgressBar
     *
     * @type {string}
     * @memberof ProgressBarPropTypes
     * @default #185DA9FC
     */
    color?: string;

    /**
     * Starting value ProgressBar
     *
     * @type {number}
     * @memberof ProgressBarPropTypes
     * @default 20
     */
    startValue?: number;

    /**
     * Maximum value ProgressBar
     *
     * @type {number}
     * @memberof ProgressBarPropTypes
     * @default 100
     */
    maxValue?: number;

    /**
     * Current position/value of ProgressBar
     *
     * @type {number}
     * @memberof ProgressBarPropTypes
     * @default 20
     */
    currentValue?: number;

    /**
     * Current position/value of ProgressBar
     *
     * @type {string}
     * @memberof ProgressBarPropTypes
     * @default transparent
     */
    backgroundColor?: string;
  }

  export class ProgressBar extends React.Component<ProgressBarPropTypes> {}
}
