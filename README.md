## Ankiu

Creating a copy of anki, but much prettier...

## Structure

The structure layout, i found in an article on Medium by Bruno Bertolini. Basically, the struture is summarized in four folders: components, data, scenes and services. Here's an example:

```bash
/src
  /components
  /data
    /users
      actions.js
      reducer.js
  /scenes
    /App
    /Auth
      /components
      /scenes
      index.js
      routes.js
  /services
    /request
    /storage

```

### Components

The components folder is reponsible from basic application components, such as custom buttons, inputs, popups, etc.

### Data

The data folder is responsible for managing data. It includes API requests and data managements libs, such as Flux, Redux or Mobx.

### Scenes

A scene represents a page in the application. It contains a route and a index file, and can also include others nested scenes or components.

### Services

Services are utilities used in different parts of the project, but that are not components or scenes. Examples include library abstractions and default configurations.
