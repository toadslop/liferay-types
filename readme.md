# Liferay Types

Liferay Types is a project to provide type declarations for Liferay DXP's global Liferay object.
This is a work in progress with many types left undefined.
Please contribute your own types to help finish these type definitions.
There are probably some mistakes in here -- maybe types are too narrow or too wide.
Again, please put in a pull request! And be sure to add your name to the authors list in index.d.ts.

## How to use this

```
npm install --save-dev liferay-types
```

In your tsconfig.json, update your include tag as follows:

```
{
  "compilerOptions": {
    // ...
  },
  "include": [
    // ...
    "node_modules/liferay-types/**/*"
  ],
}  
```

Note that this will not work if node_modules is in your exclude array.
To avoid this, explicitly include your project folders in the include array and delete node_modules from the exclude array.

Once you've followed these steps, you should be able to simply access the Liferay global object anywhere in your typescript code.

Example:

```
Liferay.Service("myEndpoint/myfunctionname, {some: data}, (result => console.log(result)));
```
