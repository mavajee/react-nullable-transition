`react-nullable-transition` is simple wrap component for using `react-transition-group` with jsx stataments (like vue transition).

For example you can create `OpacityTransition` component based on this package and use it like this:

```jsx
<OpacityTransition>
  {show && <Square />}
</OpacityTransition>
```

See full example on [codesandbox](https://codesandbox.io/s/billowing-browser-6hlo9?file=/src/index.tsx)