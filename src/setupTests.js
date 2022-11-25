import '@testing-library/jest-dom';
import * as ResizeObserverModule from 'resize-observer-polyfill';

global.ResizeObserver = ResizeObserverModule.default;
