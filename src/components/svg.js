import React from "react";

// https://svgr.now.sh/

const hint = props => (
  <svg viewBox="0 0 93.558 93.558" {...props}>
    <path d="M72.766 74.275C59.4 63.824 68.833 20.837 68.833 20.837h16.336c1.705 0 8.389-1.072 8.389-9.076 0-9.846-8.168-9.241-8.168-9.241H25.243c-9.873 0-18.784 11.304-23.899 19.389-2.723 4.318-1.183 5.528 3.493 3.493 16.392-7.178 21.012-4.593 21.012-4.593 1.155 5.528 1.54 30.473-2.667 40.318-4.263 9.269-12.128 21.012-.578 27.915 9.021 5.115 18.481-5.391 17.546-23.268-.44-9.461-1.183-44.938-1.183-44.938h15.072c-.469 5.528-3.025 33.745-.357 50.467 2.777 27.915 33.112 22.497 38.777 6.685 1.402-4.373 1.073-7.729.027-10.26-1.926-4.702-5.144-4.949-4.785-2.75.221 1.402.083 2.777-.138 4.016-.661 3.823-8.471 9.817-14.797 5.281z" />
  </svg>
);
const pause = props => (
  <svg viewBox="0 0 535.578 535.578" {...props}>
    <path d="M231.6 516.278c0 10.658-8.641 19.3-19.3 19.3H106.15c-10.659 0-19.3-8.641-19.3-19.3V19.3c0-10.659 8.641-19.3 19.3-19.3H212.3c10.659 0 19.3 8.641 19.3 19.3v496.978zM448.728 516.278c0 10.658-8.641 19.3-19.3 19.3h-106.15c-10.659 0-19.3-8.641-19.3-19.3V19.3c0-10.659 8.641-19.3 19.3-19.3h106.15c10.659 0 19.3 8.641 19.3 19.3v496.978z" />
  </svg>
);

const backspace = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M490.667 64h-357.59a21.333 21.333 0 0 0-17.848 9.647L3.485 244.314a21.334 21.334 0 0 0 0 23.372l111.744 170.667A21.333 21.333 0 0 0 133.077 448h357.589c11.782 0 21.333-9.551 21.333-21.333V85.333C512 73.551 502.449 64 490.667 64zm-21.334 341.333H144.609L46.833 256l97.776-149.333h324.725v298.666z" />
    <path d="M198.246 356.418c8.331 8.331 21.839 8.331 30.17 0l70.248-70.248 70.248 70.248c8.331 8.331 21.839 8.331 30.17 0s8.331-21.839 0-30.17L328.834 256l70.248-70.248c8.331-8.331 8.331-21.839 0-30.17s-21.839-8.331-30.17 0l-70.248 70.248-70.248-70.248c-8.331-8.331-21.839-8.331-30.17 0-8.331 8.331-8.331 21.839 0 30.17L268.495 256l-70.248 70.248c-8.332 8.332-8.332 21.839-.001 30.17z" />
  </svg>
);
const del = props => (
  <svg viewBox="0 0 95.939 95.939" {...props}>
    <path d="M62.819 47.97l32.533-32.534a2 2 0 0 0 0-2.828L83.333.586a2.002 2.002 0 0 0-2.828 0L47.97 33.121 15.435.586c-.75-.75-2.078-.75-2.828 0L.587 12.608a2 2 0 0 0 0 2.828L33.121 47.97.587 80.504a2 2 0 0 0 0 2.828l12.02 12.021a2 2 0 0 0 2.828 0L47.97 62.818l32.535 32.535a2 2 0 0 0 2.828 0l12.02-12.021a2 2 0 0 0 0-2.828L62.819 47.97z" />
  </svg>
);
const clear = props => (
  <svg viewBox="0 0 14.155 14.155" {...props}>
    <path d="M12.083 1.887A7.054 7.054 0 0 0 9.356.19v2.135c.48.239.935.55 1.334.95a5.118 5.118 0 0 1 0 7.229 5.123 5.123 0 0 1-7.229 0 5.121 5.121 0 0 1 0-7.229c.005-.006.021-.016.028-.025h.002l1.181 1.179L4.665.685.923.68l1.176 1.176a.118.118 0 0 1-.027.031 7.078 7.078 0 1 0 10.011 0z" />
  </svg>
);
const theme = props => (
  <svg viewBox="0 0 512.001 512.001" {...props}>
    <path d="M165.051 121.887c-24.809 0-44.992 20.184-44.992 44.992s20.184 44.992 44.992 44.992 44.992-20.184 44.992-44.992-20.183-44.992-44.992-44.992zm0 59.99c-8.27 0-14.997-6.728-14.997-14.997s6.728-14.997 14.997-14.997 14.997 6.728 14.997 14.997-6.727 14.997-14.997 14.997zM105.061 211.872c-24.809 0-44.992 20.184-44.992 44.992 0 24.809 20.184 44.992 44.992 44.992s44.992-20.184 44.992-44.992c.001-24.808-20.183-44.992-44.992-44.992zm0 59.99c-8.27 0-14.997-6.728-14.997-14.997 0-8.27 6.728-14.997 14.997-14.997s14.997 6.728 14.997 14.997c.001 8.269-6.727 14.997-14.997 14.997zM135.056 331.852c-24.809 0-44.992 20.184-44.992 44.992 0 24.809 20.184 44.992 44.992 44.992s44.992-20.184 44.992-44.992c.001-24.809-20.183-44.992-44.992-44.992zm0 59.989c-8.27 0-14.997-6.728-14.997-14.997 0-8.27 6.728-14.997 14.997-14.997s14.997 6.728 14.997 14.997c.001 8.27-6.727 14.997-14.997 14.997z" />
    <path d="M490.564 71.222c15.043-22.064 30.34-49.363 14.957-64.744-7.259-7.259-18.181-8.424-32.466-3.462-9.144 3.176-20.246 8.946-32.994 17.15-26.254 16.894-60.308 44.817-91.726 78.146-57.61-37.558-128.99-45.705-192.013-25.544C52.201 106.077-17.897 212.466 4.14 330.203c16.257 86.848 85.119 157.749 171.353 176.428 16.519 3.578 33.088 5.37 49.546 5.37 11.229 0 22.408-.835 33.481-2.505 23.93-3.609 43.563-20.343 51.236-43.67 7.916-24.059 1.809-50.029-15.941-67.78-11.719-11.709-11.727-30.687.004-42.408 11.728-11.727 30.684-11.728 42.413 0 17.733 17.733 43.655 23.843 67.648 15.95 23.294-7.664 40.008-27.301 43.62-51.249 7.948-52.674-2.621-110.311-35.472-159.187 26.362-24.897 57.989-59.797 78.536-89.93zm-12.165-38.09c-7.306 15.324-22.145 34.914-32.873 48.072L429.17 64.848c13.651-10.687 33.274-24.745 49.229-31.716zM417.84 315.865c-1.943 12.883-10.667 23.062-23.335 27.23-10.329 3.397-25.489 2.906-37.064-8.668-23.387-23.387-61.444-23.389-84.827-.004-23.452 23.433-23.461 61.399-.004 84.837 11.59 11.59 12.07 26.811 8.655 37.192-4.179 12.702-14.354 21.443-27.218 23.383-23.691 3.574-47.982 2.726-72.204-2.521-74.59-16.156-134.155-77.494-148.22-152.631C7.922 187.38 125.443 69.928 262.866 95.652c22.99 4.303 45.21 12.961 65.15 25.276-17.182 20.121-36.031 45.096-44.425 66.211-20.264-5.756-42.982-.685-58.904 15.237-7.054 7.053-12.273 15.812-15.094 25.329-4.544 15.33-18.707 27.05-36.08 29.857a14.997 14.997 0 1 0-8.213 25.41l4.242 4.241c18.695 18.696 43.552 28.992 69.991 28.992s51.296-10.296 69.991-28.992c16.582-16.582 21.393-40.534 14.464-61.409 21.026-8.696 45.666-27.382 65.485-44.347 26.873 41.949 34.967 90.655 28.367 134.408zm-129.526-49.86c-13.031 13.03-30.355 20.207-48.783 20.207-12.082 0-23.691-3.086-33.925-8.883 15.701-9.27 27.621-23.823 32.742-41.099 1.426-4.808 3.965-9.062 7.547-12.644 11.693-11.695 30.724-11.695 42.419 0 11.613 11.617 11.76 30.659 0 42.419zm50.453-83.084c-13.114 9.026-21.932 13.498-27.498 15.71 2.214-5.566 6.684-14.384 15.71-27.497 20.467-29.734 51.654-62.772 79.058-87.002l19.871 19.871c-25.06 27.711-56.718 57.977-87.141 78.918z" />
  </svg>
);

const undo = props => (
  <svg viewBox="0 0 485.183 485.183" {...props}>
    <path d="M257.751 113.708c-74.419 0-140.281 35.892-181.773 91.155L0 128.868v242.606h242.606l-82.538-82.532c21.931-66.52 84.474-114.584 158.326-114.584 92.161 0 166.788 74.689 166.788 166.795.001-125.629-101.817-227.445-227.431-227.445z" />
  </svg>
);
const redo = props => (
  <svg viewBox="0 0 485.215 485.215" {...props}>
    <path d="M227.443 113.724c74.421 0 140.283 35.892 181.773 91.155l75.999-75.994v242.606H242.592l82.523-82.532c-21.921-66.52-84.465-114.584-158.326-114.584C74.659 174.375 0 249.064 0 341.17c0-125.629 101.817-227.446 227.443-227.446z" />
  </svg>
);

const left = props => (
  <svg viewBox="0 0 292.359 292.359" {...props}>
    <path d="M222.979 5.424C219.364 1.807 215.08 0 210.132 0c-4.949 0-9.233 1.807-12.848 5.424L69.378 133.331c-3.615 3.617-5.424 7.898-5.424 12.847s1.809 9.233 5.424 12.847l127.906 127.907c3.614 3.617 7.898 5.428 12.848 5.428 4.948 0 9.232-1.811 12.847-5.428 3.617-3.614 5.427-7.898 5.427-12.847V18.271c-.001-4.949-1.81-9.229-5.427-12.847z" />
  </svg>
);
const right = props => (
  <svg viewBox="0 0 292.359 292.359" {...props}>
    <path d="M222.979 133.331L95.073 5.424C91.456 1.807 87.178 0 82.226 0s-9.233 1.807-12.85 5.424c-3.617 3.617-5.424 7.898-5.424 12.847v255.813c0 4.948 1.807 9.232 5.424 12.847 3.621 3.617 7.902 5.428 12.85 5.428 4.949 0 9.23-1.811 12.847-5.428l127.906-127.907c3.614-3.613 5.428-7.897 5.428-12.847 0-4.948-1.813-9.229-5.428-12.846z" />
  </svg>
);
const up = props => (
  <svg viewBox="0 0 292.362 292.362" {...props}>
    <path d="M286.935 197.287L159.028 69.381c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233 1.807-12.85 5.424L5.424 197.287C1.807 200.904 0 205.186 0 210.134s1.807 9.233 5.424 12.847c3.621 3.617 7.902 5.425 12.85 5.425h255.813c4.949 0 9.233-1.808 12.848-5.425 3.613-3.613 5.427-7.898 5.427-12.847s-1.814-9.23-5.427-12.847z" />
  </svg>
);
const down = props => (
  <svg viewBox="0 0 292.362 292.362" {...props}>
    <path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" />
  </svg>
);

const rightwards = props => (
  <svg viewBox="0 0 459 459" {...props}>
    <path d="M102 204L0 306l102 102v-76.5h178.5v-51H102V204zm357-51L357 51v76.5H178.5v51H357V255l102-102z" />
  </svg>
);
const downwards = props => (
  <svg viewBox="0 0 459 459" {...props}>
    <path d="M331.5 357V178.5h-51V357H204l102 102 102-102h-76.5zM153 0L51 102h76.5v178.5h51V102H255L153 0z" />
  </svg>
);

export const Svg = {
  hint,
  pause,
  backspace,
  del,
  clear,
  theme,
  undo,
  redo,
  up,
  down,
  left,
  right,
  rightwards,
  downwards
};
