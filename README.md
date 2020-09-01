# Graffiti.js

> Graffiti.js is a minimalistic GraphQL framework

⚠ This project is still under development ⚠

## How to use

Install it:

```
$ npm install graffiti --save
```

After that, the file-system is the main API. Every `.js` file becomes a Mongoose schema that gets automatically processed and converted to GraphQL API.

Populate `./schema/note.js` inside your project:

```js
exports.schema = {
  name: String,
  body: String,
  // NOTE: Mongoose model names will always be capitalized versions of your filenames
  group: { type: 'ObjectId', ref: 'Collection' },
};
```

and `/schema/collection.js`:

```js
exports.schema = {
  name: String,
};
```

and then just run `graffiti` and go to `http://localhost:3000/graphql`

So far, we get:

- Automatic creation of GraphQL APIs
- Automatic relations between types (when using `ObjectId` as type)

You can find detailed documentation in [`./docs` folder](./docs/README.md).  
You can also find more examples in `./examples` folder.

## Configuring Graffiti.js

You can provide additional options to Graffiti using `graffiti.config.js` file in your project.  
Currently, it allows you to set custom MongoDB URL, server port and host e.g.:

```js
module.exports = {
  mongoUrl: 'mongodb://localhost/graffiti-test', // optional, defaults to "mongodb://localhost/graffiti"
  port: 3000, // optional, defaults to 3000
  host: '0.0.0.0', // optional, defaults to 0.0.0.0
};
```

## Future directions

The following issues are currently being explored and input from the community is appreciated:

- Support for plugins (e.g. auth, next.js as front-end, etc.) [[#1](https://github.com/yamalight/graffiti/issues/1)]
- Development mode [[#7](https://github.com/yamalight/graffiti/issues/7)]

## Special thanks

A huge thank you to [Jay Phelps](https://github.com/jayphelps) for releasing the "graffiti" npm package name to me!
