# Superheroes

### Running the angular app

```sh
npm run serve.demo
```

### Running the nest app

```sh
npm run serve.api
```

### Running Prisma, must be in API directory

```sh
npx prisma db push
```

```sh
npx prisma studio
```

### Removing cached error

```sh
rm -rf ./node_modules/.cache/nx
```

## Development Steps

- run application by running npm run serve.demo
- generate todo.module.ts
- generate todo component
- double check if todo.module.ts is updated properly with child routes
- update app-routing.module.ts
- update app.component.html
- check localhost:4200/todo if running
- generate todo.service.ts
- complete the todo.service.ts
- update todo.component.ts
- generate shared.module.ts
- update todo.module.ts
- update todo.component.html
- generate navbar component -> path is apps/demo/src/app/components/shared/navbar
- update shared.module.ts by exporting the navbar component
- import SharedModule in the app.module.ts
- update app.component.html
- build the navbar
- generate post.module.ts
- generate post component
- update app-routing.module.ts
- update post.module.ts with SharedModule and ChildRoute
- check the localhost:4200/post or navigate to post
- generate post.service.ts
- complete the post.service.ts
- update post.component.ts
- update post.component.html
- update rxjs-sample.module.ts
- update rxjs-sample.component.ts
- update rxjs-sample.component.html

### Other Common Observable Operators

- https://dev.to/deborahk/inner-observables-and-higher-order-mapping-hhe
