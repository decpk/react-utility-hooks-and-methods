

******❤❤❤Any improvement of PR is always welcome ❤❤❤️******

# React utility hooks and methods

This repository is to have all sort of methods and hooks that is required while development
* **useTrackHookDepsChanged**: This is a meta hook which is responsible to track and print the deps changed of any hook. Have you ever been in a situation where you want to know why any hook gets triggered or what are the deps responsible to trigger this hook. If yes, then this hook is a life saver for you.

I've put together a quick tutorial, it assumes an understanding of React, hooks and unit tests.

If something is not clear, message me or raise an issue, I will explain in more detail.

Example: [Codesandbox](https://codesandbox.io/s/holy-dawn-njhv76?file=/src/App.tsx)


********args********
* Record\<string, unknown\>: an object where `key` will represents the dependency name and `value` is actual dependency

********Return value********
* *Array\<unknown\>:* An array which is actual dependency. You can also use it as a dependency in any hook.



## How we will be able to use your package
Right now there is 1 hook `useTrackHookDepsChanged` is available

####  **useTrackHookDepsChanged**: 
* Import useTrackHookDepsChanged hook into your component
```
import { useTrackHookDepsChanged } from '@decpk/react-utility-hooks-and-methods';
```

* collect `deps` after calling `useTrackHookDepsChanged` with `key-value` pair of deps in an **object** (Pass props as an object).

***Example 1: Let say you have dependency array of 3 value which are properties of an object as:***
```
  useEffect(() => {
    async function callAPI() {
      const res = await fetch(
        // ANY CODE
    }

    callAPI();
  }, [
        pagination.limit,
        pagination.skip,
        pagination.selectedCategories
    ]
);
```

So we have to pass this `deps` to `useTrackHookDepsChanged` as:

```
  // CHANGE
  const deps = useTrackHookDepsChanged({
    limit: pagination.limit,
    skip: pagination.skip,
    selectedCategories: pagination.selectedCategories,
  });
```

* `useTrackHookDepsChanged` will give you `deps` that you can use it in any hook as:

```
useEffect(() => {
    async function callAPI() {
        // ANY CODE
    }

    callAPI();
    
    // CHANGE
  }, deps);
```

***example 2: If you have dependency array as varable that represent value then you can make it even concise as:***

```
useEffect(() => {
    // ANY CODE
  }, [name, searchString]))
```

then you can make it concise as:

```
  useEffect(() => {
    // ANY CODE
  }, useTrackHookDepsChanged({ name, searchString }))
```



* So everything is set. All you have to do it open console and see table which will tell you which dependency changed as:
    * key: dependency changed
    * oldValue: value before hook changed
    * newValue: value after hook changed
    * oldValueType: type of value before hook changed
    * newValueType: type of value after hook changed